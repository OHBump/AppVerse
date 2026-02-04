export default function BotDetail({ bot }) {
  if (!bot) return null;
  return (
    <div>
      <img src={bot.avatar} alt={bot.name} width={128} height={128} />
      <h1>{bot.name}</h1>
      <p>{bot.description}</p>
      <div>
        <a href={bot.invite} target="_blank" rel="noopener noreferrer">Invite</a>
      </div>
      <div>Categories: {bot.category.join(', ')}</div>
    </div>
  );
}