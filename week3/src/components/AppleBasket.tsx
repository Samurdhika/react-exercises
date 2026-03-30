import { useState } from 'react';
import { useStore } from '../store/useStore';

export function AppleBasket() {
  const apples = useStore((state) => state.apples);
  const [filter, setFilter] = useState<'all' | 'red' | 'green'>('all');

  if (!Array.isArray(apples)) {
    return <div>Error: apples is not an array</div>;
  }

  const displayedApples =
    filter === 'all'
      ? apples
      : apples.filter((a) => a.color === filter);

  return (
    <div style={{ padding: '20px' }}>
      <div>
        <button onClick={() => setFilter('all')}>All</button>
        <button onClick={() => setFilter('red')}>Red</button>
        <button onClick={() => setFilter('green')}>Green</button>
      </div>

      <p>Basket has {displayedApples.length} apples:</p>

      <div>
        {displayedApples.map((a) => (
          <span key={a.id} style={{ fontSize: '30px' }}>
            {a.color === 'red' ? '🍎' : '🍏'}
          </span>
        ))}
      </div>
    </div>
  );
}