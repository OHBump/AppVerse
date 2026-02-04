import mongoose from 'mongoose';

const ReviewSchema = new mongoose.Schema({
  user: String,
  rating: Number,
  comment: String,
  createdAt: { type: Date, default: Date.now }
});

const BotSchema = new mongoose.Schema({
  name: String,
  description: String,
  invite: String,
  website: String,
  owner: String,
  category: [String],
  avatar: String,
  reviews: [ReviewSchema],
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.models.Bot || mongoose.model('Bot', BotSchema);