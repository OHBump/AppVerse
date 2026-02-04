import mongoose from 'mongoose';

const FeedbackSchema = new mongoose.Schema({
  userId: { type: String, required: true },  // Discord ID user yang submit feedback
  feedback: { type: String, required: true }, // Isi feedback/masukan user
  status: { type: String, default: 'open' },  // open/closed/resolved (bisa dipakai admin)
  reply: { type: String },                    // Jawaban admin/staff
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.models.Feedback || mongoose.model('Feedback', FeedbackSchema);