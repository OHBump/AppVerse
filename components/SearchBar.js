import { useState } from 'react';

export default function SearchBar({ onSearch }) {
  const [query, setQuery] = useState('');
  return (
    <input
      type="text"
      placeholder="Search bots..."
      value={query}
      onChange={e => {
        setQuery(e.target.value);
        onSearch && onSearch(e.target.value);
      }}
      style={{width: '100%', padding: '0.75rem', marginBottom: '1rem'}}
    />
  );
}