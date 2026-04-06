import React, { useState } from 'react';
import Modal from './components/Modal';

// Fake data
const CAMPING_GEAR = [
  { id: 1, name: 'Tent', weight: 3500 },
  { id: 2, name: 'Sleeping Bag', weight: 1200 },
  { id: 3, name: 'Camping Stove', weight: 800 }
];

export default function App() {
  const [showList, setShowList] = useState(false);
  const [showInfo, setShowInfo] = useState(false);

  // reduce example
  const totalWeight = CAMPING_GEAR.reduce(
    (sum, item) => sum + item.weight,
    0
  );

  return (
    <div className="min-h-screen bg-gray-100 p-10 space-y-8">
      
      {/* Part 1 */}
      <div>
        <h2 className="text-2xl font-bold mb-4">
          Camping Trip Summary
        </h2>

        <p className="text-xl font-black text-blue-600 mb-4">
          Backpack weight: {totalWeight} g
        </p>

        <button
          onClick={() => setShowList(true)}
          className="bg-black text-white px-4 py-2 rounded shadow hover:bg-gray-800"
        >
          View Equipment
        </button>
      </div>

      {/* Part 2 */}
      <div>
        <h2 className="text-2xl font-bold mb-4">
          Modal Testing
        </h2>

        <div className="space-x-4">
          <button
            onClick={() => setShowList(true)}
            className="bg-blue-700 text-white px-4 py-2 rounded shadow hover:bg-blue-800"
          >
            Show Details
          </button>

          <button
            onClick={() => setShowInfo(true)}
            className="bg-green-700 text-white px-4 py-2 rounded shadow hover:bg-green-800"
          >
           Show Details
          </button>
        </div>
      </div>

      {/* Modal 1 */}
      <Modal isOpen={showList} onClose={() => setShowList(false)}>
        <h3 className="text-lg font-bold mb-3">Packed Items</h3>
        <ul className="space-y-2">
          {CAMPING_GEAR.map(item => (
            <li key={item.id} className="flex justify-between border-b pb-1">
              <span>{item.name}</span>
              <span className="text-gray-500">{item.weight} g</span>
            </li>
          ))}
        </ul>
      </Modal>

      {/* Modal 2 */}
      <Modal isOpen={showInfo} onClose={() => setShowInfo(false)}>
        <h2 className="text-green-600 text-lg font-bold mb-2">
          Second popup with same Modal component!!!
        </h2>
        <p className="text-gray-600">
          Content changes but the Modal is the same!
        </p>
      </Modal>
    </div>
  );
}