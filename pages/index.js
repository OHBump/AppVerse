import useSWR from 'swr';
import BotCard from '../components/BotCard';
import SearchBar from '../components/SearchBar';
import SupportServerButton from '../components/SupportServerButton';

const fetcher = (...args) => fetch(...args).then(res => res.json());

export default function Home() {
  const { data, error } = useSWR('/api/bots', fetcher);

  if (error) return <div>Error loading bots...</div>;
  if (!data) return <div>Loading bots...</div>;

  return (
    <main>
      <header>
        <h1>AppVerse</h1>
        <p>Discover and review Discord bots. Sign in to add your bot!</p>
        <SupportServerButton />
      </header>
      <SearchBar />
      <section style={{ display: 'flex', flexWrap: 'wrap', gap: '24px' }}>
        {data.map(bot => <BotCard key={bot._id} bot={bot} />)}
      </section>
    </main>
  );
}