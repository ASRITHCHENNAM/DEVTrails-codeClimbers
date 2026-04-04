const fs = require('fs');
const path = require('path');

const DB_FILE = path.join(__dirname, 'db.json');

function seed() {
  try {
    console.log('Building Local JSON Database...');

    const userId = "priya123";
    const policyId = "pol999";

    const db = {
      users: [
        {
          _id: userId,
          name: 'Priya Sharma',
          phone: '9988776655',
          password: 'password123',
          city: 'Delhi',
          deliveryZone: 'Connaught Place',
          dateJoined: new Date().toISOString()
        }
      ],
      policies: [
        {
          _id: policyId,
          user: userId,
          coverageType: 'Income Loss due to External Disruption',
          weeklyPremium: 65,
          startDate: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(),
          status: 'Active'
        }
      ],
      claims: [
        {
          _id: "claim777",
          user: userId,
          policy: policyId,
          disruptionType: 'Severe AQI',
          payoutAmount: 450,
          eventWindowId: 'SEVERE_AQI_20260403_Connaught Place',
          dateTriggered: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString(),
          status: 'Paid'
        }
      ]
    };

    fs.writeFileSync(DB_FILE, JSON.stringify(db, null, 2));
    console.log('✅ Created User: Priya Sharma');
    console.log('✅ Created Policy for Priya: ₹65/Week');
    console.log('✅ Created paid claim: ₹450 for Severe AQI');
    console.log('🎉 Local DB JSON Seeding successfully completed!');
    
  } catch (err) {
    console.error('Seeding error:', err);
  }
}

seed();
