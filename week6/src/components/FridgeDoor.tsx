import { useDroppable } from '@dnd-kit/core';

export default function FridgeDoor({ children }: { children: React.ReactNode }) {
  const { setNodeRef, isOver } = useDroppable({
    id: 'fridge',
  });

  return (
    <div
      ref={setNodeRef}
      className={`w-full h-96 border-4 rounded-xl relative p-4 transition-colors ${
        isOver ? 'border-blue-400 bg-blue-50' : 'border-gray-300 bg-white'
      }`}
    >
      {children}
    </div>
  );
}