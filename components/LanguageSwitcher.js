import { useRouter } from 'next/router';

const LANGUAGES = [
  { code: 'en', label: 'English' },
  { code: 'id', label: 'Indonesian' },
  { code: 'hi', label: 'Hindi' }
];

export default function LanguageSwitcher() {
  const router = useRouter();

  return (
    <select
      value={router.locale}
      onChange={e => router.push(router.pathname, router.asPath, { locale: e.target.value })}
      style={{margin: '8px'}}
    >
      {LANGUAGES.map(lang => (
        <option key={lang.code} value={lang.code}>{lang.label}</option>
      ))}
    </select>
  );
}