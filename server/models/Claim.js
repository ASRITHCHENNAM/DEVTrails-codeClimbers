const mongoose = require('mongoose');

const ClaimSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  policy: { type: mongoose.Schema.Types.ObjectId, ref: 'Policy', required: true },
  disruptionType: { type: String, required: true }, // e.g., 'Heavy Rain', 'Air Quality (AQI)', 'Heatwave'
  dateTriggered: { type: Date, default: Date.now },
  payoutAmount: { type: Number, required: true },
  status: { type: String, enum: ['Processing', 'Paid', 'Rejected'], default: 'Paid' }, // Instant payout
  eventWindowId: { type: String, required: true }, // Used for duplicate claim prevention
});

module.exports = mongoose.model('Claim', ClaimSchema);
