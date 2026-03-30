import { useState } from 'react';
import { useMovieStore } from '../store/useMovieStore';

export function MovieList() {
  const movies = useMovieStore((state) => state.movies);
  const toggleWatched = useMovieStore((state) => state.toggleWatched);

  const [filterType, setFilterType] = useState<'all' | 'watched' | 'unwatched'>('all');

  // 🎯 FILTER LOGIC
  let filteredMovies = movies;

  if (filterType === 'watched') {
    filteredMovies = movies.filter((m) => m.watched);
  } else if (filterType === 'unwatched') {
    filteredMovies = movies.filter((m) => !m.watched);
  }

  return (
    <div style={{ marginTop: '40px' }}>
      <h2>Movie library</h2>

      {/* FILTER BUTTONS */}
      <div style={{ marginBottom: '20px' }}>
        <button onClick={() => setFilterType('all')}>All movies</button>
        <button onClick={() => setFilterType('watched')}>Watched</button>
        <button onClick={() => setFilterType('unwatched')}>Unwatched</button>
      </div>

      {/* MOVIE LIST */}
      {filteredMovies.map((movie) => (
        <div key={movie.id} style={{ marginBottom: '10px' }}>
          <span>
            {movie.title} {movie.watched ? '✅ Watched' : '⏳ Unwatched'}
          </span>

          <button
            onClick={() => toggleWatched(movie.id)}
            style={{ marginLeft: '10px' }}
          >
            Change state
          </button>
        </div>
      ))}
    </div>
  );
}