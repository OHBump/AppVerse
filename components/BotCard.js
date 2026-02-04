import Link from 'next/link';

export default function BotCard({ bot }) {
  return (
    <div style={{
      boxShadow: '0 1px 6px #bbb',
      padding: 16,
      borderRadius: 8,
      width: 260,
      background: '#fff'
    }}>
      <img src={bot.avatar} alt={bot.name} width={56} height={56} style={{ borderRadius: '50%' }} />
      <h2>{bot.name}</h2>
      <p>{bot.description}</p>
      <p><strong>Category:</strong> {bot.category.join(', ')}</p>
      <a href={bot.invite} target="_blank" rel="noopener noreferrer">Invite Bot</a> |{' '}
      <Link href={`/bots/${bot._id}`}>Details</Link>
    </div>
  );
}