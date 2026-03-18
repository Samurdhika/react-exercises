import { Profile } from './components/Profile';
import { TeamCard } from './components/TeamCard';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      
      {/* Title */}
      <h1 className="text-2xl font-bold text-center mb-8 text-slate-700">
        Welcome to React!
      </h1>

      {/* Profile */}
      <div className="flex justify-center mb-10">
      <Profile name="Samurdhika" role="Junior Developer" />
      </div>

      {/* Team Cards */}
      <div className="flex gap-4 justify-center flex-wrap">
     <TeamCard name="Shanthi Kumari" role="Apple Developer" />
     <TeamCard name="Upul Ananda" role="Full Stack Developer" />
     <TeamCard name="Shaleendra Saranga" role="Software Developer" />
     </div>

    </div>
  );
}