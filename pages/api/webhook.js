import connectDb from '../../lib/db';
import WebhookLog from '../../models/WebhookLog';

// POST: /api/webhook
export default async function handler(req, res) {
  await connectDb();
  if (req.method === 'POST') {
    // Authenticate source—ensure AppVerse bot is sender (signing key, token, etc)
    const { type, serverId, botId, logData } = req.body;
    if (!serverId || !botId || !type || !logData) {
      return res.status(400).json({ error: 'Missing payload' });
    }
    const log = new WebhookLog({ type, serverId, botId, logData });
    await log.save();
    res.status(201).json({ ok: true });
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}