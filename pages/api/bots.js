import connectDb from '../../lib/db';
import Bot from '../../models/Bot';

export default async function handler(req, res) {
  await connectDb();
  if (req.method === 'GET') {
    const bots = await Bot.find({});
    res.status(200).json(bots);
  } else if (req.method === 'POST') {
    const { name, description, invite, website, owner, category, avatar } = req.body;
    const bot = new Bot({ name, description, invite, website, owner, category, avatar });
    await bot.save();
    res.status(201).json(bot);
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}