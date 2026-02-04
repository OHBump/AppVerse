import connectDb from '../../lib/db';
import Feedback from '../../models/Feedback';

export default async function handler(req, res) {
  await connectDb();
  if (req.method === 'POST') {
    const { userId, feedback } = req.body;
    if (!userId || !feedback) return res.status(400).json({ error: 'Incomplete data' });
    const entry = new Feedback({ userId, feedback });
    await entry.save();
    res.status(201).json({ ok: true });
  }
  else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}