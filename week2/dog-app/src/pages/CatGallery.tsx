import React, { useState, useEffect } from 'react';

export function CatGallery() {
  // State to store array of cats
  const [cats, setCats] = useState<any[]>([]);

  // Fetch 10 cat images when page loads
  useEffect(() => {
    fetch('https://api.thecatapi.com/v1/images/search?limit=10')
      .then((response) => response.json())
      .then((data) => setCats(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">Cat Gallery</h2>

      {/* Grid layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {cats.map((cat) => (
          <img
            key={cat.id}
            src={cat.url}
            alt="Cat"
            className="w-full h-64 object-cover rounded-xl shadow-lg"
          />
        ))}
      </div>
    </div>
  );
}