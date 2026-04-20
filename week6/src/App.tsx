import  { DndContext, type DragEndEvent } from '@dnd-kit/core';
import { useMagnetStore } from './store/useMagnetStore';
import WordMagnet from './components/WordMagnet';
import FridgeDoor from './components/FridgeDoor';

export default function App() {
  const { magnets, moveMagnet, loadExpansion } = useMagnetStore();

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (!over || over.id !== 'fridge') return;

    const activeRect = event.active.rect.current.translated;
    const overRect = event.over?.rect;

    if (!activeRect || !overRect) return;

    
    const x = activeRect.left - overRect.left;
    const y = activeRect.top - overRect.top;

    moveMagnet(active.id as string, x, y, 'fridge');
  };

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <div className="p-10 bg-gray-100 min-h-screen">

       
        <div className="flex gap-4 mb-6 print:hidden">
          <button
            onClick={loadExpansion}
            className="bg-green-500 text-white px-4 py-2 rounded"
          >
            Load Expansion
          </button>

          <button
            onClick={() => window.print()}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Print
          </button>
        </div>

        <div className="flex gap-8">

          
          <div className="w-1/3 bg-white p-4 rounded shadow print:hidden">
            <h2 className="font-bold mb-2">Word Bank</h2>
            <div className="flex flex-wrap gap-2">
              {magnets
                .filter((m) => m.status === 'bank')
                .map((m) => (
                  <WordMagnet key={m.id} magnet={m} />
                ))}
            </div>
          </div>

         
          <div className="flex-1">
            <FridgeDoor>
              {magnets
                .filter((m) => m.status === 'fridge')
                .map((m) => (
                  <WordMagnet key={m.id} magnet={m} />
                ))}
            </FridgeDoor>
          </div>

        </div>
      </div>
    </DndContext>
  );
}