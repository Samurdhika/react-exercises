import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { DogGallery } from './pages/DogGallery';
import { CatGallery } from './pages/CatGallery';

// Home page
function Home() {
  return (
    <div className="p-8 text-xl">
      Welcome to the Pet Gallery App! 🐶🐱
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      {/* Navigation */}
      <nav className="p-4 bg-zinc-800 text-white flex gap-6">
        <Link to="/" className="px-3 py-1 rounded hover:bg-zinc-700">
          Home
        </Link>

        <Link to="/dogs" className="px-3 py-1 rounded hover:bg-zinc-700">
          Dog Gallery
        </Link>

        <Link to="/cats" className="px-3 py-1 rounded hover:bg-zinc-700">
          Cat Gallery
        </Link>
      </nav>

      {/* Pages */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dogs" element={<DogGallery />} />
        <Route path="/cats" element={<CatGallery />} />
      </Routes>
    </BrowserRouter>
  );
}