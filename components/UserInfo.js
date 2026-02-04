import { useSession } from 'next-auth/react';

export default function UserInfo() {
  const { data: session, status } = useSession();

  if (status === "loading") return <div>Loading user...</div>;

  if (!session) return <div>Please login!</div>;
  return (
    <div>
      Welcome, {session.user.name} ({session.user.id})
      <img src={session.user.image} alt="User avatar" width={32} style={{verticalAlign:'middle', marginLeft:10}} />
    </div>
  );
}