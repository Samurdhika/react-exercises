import { useStore } from '../store/useStore';

export function AppleButton() {
  const addApple = useStore((state) => state.addApple);
  
  return (
    <div style={{ display: 'flex', gap: '10px', padding: '20px' }}>
      <button onClick={() => addApple('red')}>
        Pick Red 🍎
      </button>

      <button onClick={() => addApple('green')}>
        Pick Green 🍏
      </button>
    </div>
  );
}