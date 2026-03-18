import { useState } from 'react';

interface CardProps {
  name: string;
  role: string;
}

export const TeamCard = ({ name, role }: CardProps) => {
  const [votes, setVotes] = useState(0);

  return (
    <div className="bg-white rounded-xl shadow-md p-6 w-60 text-center border-t-4 border-blue-500">
      
      {/* Name */}
      <h2 className="text-lg font-bold text-slate-800">{name}</h2>

      {/* Role */}
      <p className="text-gray-500 mb-4">{role}</p>

      {/* Button */}
      <button
        onClick={() => setVotes(votes + 1)}
        className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-md transition"
      >
        Vote ({votes})
      </button>

    </div>
  );
};