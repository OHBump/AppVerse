import { useSession } from 'next-auth/react';
import { ADMIN_IDS } from '../../lib/admins';
import useSWR from 'swr';

const fetcher = (...args) => fetch(...args).then(res => res.json());

export default function AdminDashboard() {
  const { data: session } = useSession();
  const { data, error } = useSWR('/api/admin/pending', fetcher);

  if (!session) return <div>You must log in as admin.</div>;
  if (!ADMIN_IDS.includes(session.user.id)) return <div>Access denied: admin only.</div>;
  if (error) return <div>Error loading admin data</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <main>
      <h1>Admin Panel</h1>
      <h2>Pending Bots & Staff Applications</h2>
      <ul>
        {data.bots.map(bot => (
          <li key={bot._id}>{bot.name} - <button>Approve</button> <button>Reject</button></li>
        ))}
        {data.applications.map(app => (
          <li key={app._id}>{app.name} - {app.status}</li>
        ))}
      </ul>
    </main>
  );
}