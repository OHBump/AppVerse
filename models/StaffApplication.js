import mongoose from 'mongoose';

const StaffApplicationSchema = new mongoose.Schema({
  userId: String,
  name: String,
  languages: [String],
  reason: String,
  status: { type: String, enum: ['pending', 'approved', 'rejected'], default: 'pending'},
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.models.StaffApplication || mongoose.model('StaffApplication', StaffApplicationSchema);