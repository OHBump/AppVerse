import mongoose from 'mongoose';

const WebhookLogSchema = new mongoose.Schema({
  type: String,
  serverId: String,
  botId: String,
  logData: mongoose.Schema.Types.Mixed,
  timestamp: { type: Date, default: Date.now }
});

export default mongoose.models.WebhookLog || mongoose.model('WebhookLog', WebhookLogSchema);