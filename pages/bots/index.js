import useSWR from 'swr';
import BotCard from '../../components/BotCard';

const fetcher = (...args) => fetch(...args).then(res => res.json());

export default function BotList() {
  const { data, error } = useSWR('/api/bots', fetcher);

  if (error) return <div>Error loading bots</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <div>
      <h1>All Bots</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
        {data.map(bot => (
          <BotCard key={bot._id} bot={bot} />
        ))}
      </div>
    </div>
  );
}