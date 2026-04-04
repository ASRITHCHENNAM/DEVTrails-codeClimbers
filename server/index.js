require('dotenv').config();
const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const { GoogleGenAI } = require('@google/genai');

const app = express();
app.use(express.json());
app.use(cors());

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
const DB_FILE = path.join(__dirname, 'db.json');

// Helper to initialize or read lightweight DB
function getDB() {
  if (!fs.existsSync(DB_FILE)) {
    fs.writeFileSync(DB_FILE, JSON.stringify({ users: [], policies: [], claims: [] }));
  }
  return JSON.parse(fs.readFileSync(DB_FILE, 'utf-8'));
}

function saveDB(db) {
  fs.writeFileSync(DB_FILE, JSON.stringify(db, null, 2));
}

function generateId() {
  return Math.random().toString(36).substring(2, 15);
}

// Helper function to ask Gemini
async function getPremiumFromGemini(city, zone) {
  try {
    const prompt = `You are a Risk Assessment AI for a Parametric Insurance platform in India.
The gig worker operates in ${city}, specifically in the ${zone} zone.
Evaluate the risk of external disruptions like heavy rain, heatwaves, and pollution.
Provide ONLY a reasonable suggested Weekly Premium amount in Indian Rupees (INR) as an integer between 35 and 150.
Do not provide any other text, just the number.`;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
    });

    const amount = parseInt(response.text.trim().replace(/[^0-9]/g, ''));
    if (!isNaN(amount) && amount >= 20 && amount <= 300) {
      return amount;
    }
  } catch (err) {
    console.error("Gemini AI API Error:", err);
  }
  return 75; // Fallback premium
}

// 1. Auth Signup API
app.post('/api/auth/signup', async (req, res) => {
  try {
    const { name, phone, password, city, deliveryZone } = req.body;
    let db = getDB();

    if (db.users.find(u => u.phone === phone)) {
      return res.status(409).json({ error: 'User already exists' });
    }

    const newUser = { _id: generateId(), name, phone, password, city, deliveryZone, dateJoined: new Date().toISOString() };
    db.users.push(newUser);

    const weeklyPremium = await getPremiumFromGemini(city, deliveryZone);

    const newPolicy = {
      _id: generateId(),
      user: newUser._id,
      coverageType: 'Income Loss due to External Disruption',
      weeklyPremium,
      startDate: new Date().toISOString(),
      status: 'Active'
    };
    db.policies.push(newPolicy);

    saveDB(db);

    res.json({
      success: true,
      message: 'Signup successful & AI Assessed Policy generated!',
      user: newUser,
      policy: newPolicy
    });
  } catch (error) {
    console.error('Signup Error:', error);
    res.status(500).json({ error: 'Server Error', details: error.message });
  }
});

// 1.5 Auth Login API
app.post('/api/auth/login', async (req, res) => {
  try {
    const { phone, password } = req.body;
    const db = getDB();
    const user = db.users.find(u => u.phone === phone);
    
    if (!user || user.password !== password) {
      return res.status(401).json({ error: 'Invalid phone or password' });
    }

    res.json({ success: true, message: 'Login successful!', user });
  } catch (error) {
    res.status(500).json({ error: 'Server Error', details: error.message });
  }
});

// 2. Trigger Event API (Zero-Touch Claim)
app.post('/api/trigger', async (req, res) => {
  try {
    const { phone, disruptionType } = req.body;
    let db = getDB();

    const user = db.users.find(u => u.phone === phone);
    if (!user) return res.status(404).json({ error: 'User not found' });

    const activePolicy = db.policies.find(p => p.user === user._id && p.status === 'Active');
    if (!activePolicy) return res.status(400).json({ error: 'No active policy found' });

    const today = new Date().toISOString().split('T')[0];
    const eventWindowId = `${disruptionType.toUpperCase()}_${today}_${user.deliveryZone}`;
    
    const existingClaim = db.claims.find(c => c.user === user._id && c.eventWindowId === eventWindowId);
    if (existingClaim) {
      return res.status(409).json({
        error: 'Duplicate claim detected!',
        message: `A payout for ${disruptionType} in ${user.deliveryZone} has already been processed today.`
      });
    }

    const payoutAmount = Math.floor(Math.random() * (500 - 300 + 1) + 300);

    const newClaim = {
      _id: generateId(),
      user: user._id,
      policy: activePolicy._id,
      disruptionType,
      payoutAmount,
      eventWindowId,
      dateTriggered: new Date().toISOString(),
      status: 'Paid' // Instant payout
    };
    db.claims.push(newClaim);
    saveDB(db);

    res.json({
      success: true,
      message: `Disruption Detected! Zero-touch payout of ₹${payoutAmount} initiated.`,
      claim: newClaim
    });
  } catch (error) {
    res.status(500).json({ error: 'Server Error', details: error.message });
  }
});

// 3. Dashboard Data API
app.get('/api/dashboard/:phone', async (req, res) => {
  try {
    const db = getDB();
    const user = db.users.find(u => u.phone === req.params.phone);
    if (!user) return res.status(404).json({ error: 'User not found' });

    // Reverse for latest first
    const policiesForUser = db.policies.filter(p => p.user === user._id).reverse();
    const claimsForUser = db.claims.filter(c => c.user === user._id).reverse();

    res.json({ 
      user, 
      policy: policiesForUser[0], 
      claims: claimsForUser 
    });
  } catch (error) {
    res.status(500).json({ error: 'Server Error', details: error.message });
  }
});

app.get('/', (req, res) => {
  res.send('CodeClimbers Bypass Local JSON Backend is Running!');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Bypass JSON Server running on port ${PORT}`);
});
