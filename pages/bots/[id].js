import { useRouter } from 'next/router';
import useSWR from 'swr';
import ReviewSection from '../../components/ReviewSection';

const fetcher = (...args) => fetch(...args).then(res => res.json());

export default function BotDetailPage() {
  const router = useRouter();
  const { id } = router.query;
  const { data, error } = useSWR(id ? `/api/bots/${id}` : null, fetcher);

  if (error) return <div>Error loading bot</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <main>
      <h1>{data.name}</h1>
      <img src={data.avatar} alt={data.name} width={128} height={128} />
      <p>{data.description}</p>
      <a href={data.invite} target="_blank" rel="noopener noreferrer">Invite</a>
      <div>Category: {data.category.join(', ')}</div>
      <ReviewSection reviews={data.reviews} botId={id} />
    </main>
  );
}