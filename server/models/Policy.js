const mongoose = require('mongoose');

const PolicySchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  coverageType: { type: String, default: 'Income Loss due to External Disruption' },
  weeklyPremium: { type: Number, required: true },
  startDate: { type: Date, default: Date.now },
  endDate: { type: Date, default: () => new Date(Date.now() + 7 * 24 * 60 * 60 * 1000) },
  status: { type: String, enum: ['Active', 'Expired'], default: 'Active' },
});

module.exports = mongoose.model('Policy', PolicySchema);
