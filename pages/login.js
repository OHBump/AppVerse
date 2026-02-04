import { signIn } from 'next-auth/react';

export default function LoginPage() {
  return (
    <main>
      <h1>Login with Discord</h1>
      <button onClick={() => signIn('discord')}>Sign In with Discord</button>
    </main>
  );
}