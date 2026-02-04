import useSWR from 'swr';
import BotCard from '../../components/BotCard';

const fetcher = (...args) => fetch(...args).then(res => res.json());

export default function UserDashboard() {
  const { data, error } = useSWR('/api/user/bots', fetcher);

  if (error) return <div>Your bots could not be loaded.</div>;
  if (!data) return <div>Loading your bots...</div>;

  return (
    <main>
      <h1>Your Bots</h1>
      <section style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
        {data.map(bot => (
          <BotCard key={bot._id} bot={bot} />
        ))}
      </section>
    </main>
  );
}