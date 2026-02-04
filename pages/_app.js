import { useEffect, useState } from 'react';
import '../public/style.css';

export default function App({ Component, pageProps }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 10000); // 10 detik
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div style={{
        width: '100vw', height: '100vh', background: '#518eeb',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        color: '#fff', fontFamily: 'Inter, Arial, sans-serif', fontSize: '2rem', flexDirection:'column'
      }}>
        <img src="/logo.png" alt="AppVerse logo" style={{width:128, marginBottom:24}} />
        Loading AppVerse...
      </div>
    );
  }

  return <Component {...pageProps} />;
}