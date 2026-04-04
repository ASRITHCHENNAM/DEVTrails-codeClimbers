# 🛡️ Gig Shield Pro
### 🚀 AI-Powered Parametric Insurance for India’s Gig Economy

**Gig Shield Pro** is a zero-touch, AI-driven insurance platform designed to protect India's delivery partners (Zomato, Swiggy, Zepto, etc.) from income loss caused by external disruptions such as extreme weather, air pollution, and natural disasters.

---

## ✨ Key Features

- **🤖 AI-Dynamic Pricing**: Uses Google Gemini API to assess regional risk factors and calculate personalized weekly transparent premiums.
- **🌧️ Parametric Triggers**: Zero-touch claim processing triggered automatically by real-world environmental data (Heavy Rain, Heatwaves, Hazardous AQI).
- **💸 Instant Payouts**: Automated verification and wallet credits, eliminating the need for manual paperwork or adjustment long waits.
- **🔍 Fraud Detection**: Intelligent duplicate claim prevention using geofenced event windows and zone-based validation.
- **🌤️ Live Weather Dashboard**: Integrated real-time weather telemetry (Open-Meteo) tracking temperature and atmospheric risk in the worker's zone.

---

## 🛠️ Tech Stack

- **Frontend**: React (Vite), Tailwind CSS, Lucide Icons.
- **Backend**: Node.js, Express, Local JSON Database (Persistent & Network-Safe).
- **AI Core**: Google Gemini-2.5-Flash.
- **APIs**: Open-Meteo Geocoding & Weather API.

---

## 🚀 Getting Started

### 1. Prerequisites
- **Node.js** (v18+)
- **NPM** or **Yarn**

### 2. Installation
Clone the repository and install dependencies for both the client and server:

```bash
# Server Setup
cd server
npm install

# Client Setup
cd ../client
npm install
```

### 3. Environment Configuration
Create a `.env` file in the `server` directory (referencing `.env.example`):
```env
PORT=5000
GEMINI_API_KEY=your_gemini_api_key_here
```

### 4. Running the App
Start the backend and frontend simultaneously:

```bash
# In server directory
node index.js

# In client directory
npm run dev
```

### 5. Seeding Demo Data
To view the dashboard with pre-populated demo records (Priya Sharma, Delhi):
```bash
cd server
node seed.js
```

---

## 🏆 DEVTrails Hackathon Project
**Team: CodeClimbers**
*Built with ❤️ for the future of the Indian Gig Economy.*
