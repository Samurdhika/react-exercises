import { useDraggable } from '@dnd-kit/core';
import { CSS } from '@dnd-kit/utilities';
import type { Magnet } from '../types/Magnet';

export default function WordMagnet({ magnet }: { magnet: Magnet }) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: magnet.id,
  });

  const style = {
    transform: CSS.Translate.toString(transform),
    position: magnet.status === 'fridge' ? 'absolute' as const : 'relative' as const,
    left: magnet.status === 'fridge' ? magnet.x : undefined,
    top: magnet.status === 'fridge' ? magnet.y : undefined,
  };

  return (
    <div
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      style={style}
      className="bg-white shadow px-3 py-1 rounded cursor-grab"
    >
      {magnet.word}
    </div>
  );
}