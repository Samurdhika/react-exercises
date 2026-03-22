import React, { useState, useEffect } from 'react';

export function DogGallery() {
  const [dogUrl, setDogUrl] = useState('');

  useEffect(() => {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then((response) => response.json())
      .then((data) => setDogUrl(data.message))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">Random Dog</h2>

      {dogUrl ? (
        <img
          src={dogUrl}
          alt="Dog"
          className="rounded-xl shadow-lg w-64 h-64 object-cover"
        />
      ) : (
        <p>Loading dog...</p>
      )}
    </div>
  );
}