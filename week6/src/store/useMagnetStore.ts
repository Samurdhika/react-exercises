import { create } from 'zustand';
import type { Magnet } from '../types/Magnet';

interface MagnetStore {
  magnets: Magnet[];
  moveMagnet: (id: string, x: number, y: number, status: 'bank' | 'fridge') => void;
  loadExpansion: () => void;
}

export const useMagnetStore = create<MagnetStore>((set) => ({
  magnets: [
    { id: '1', word: 'Hello', status: 'bank', x: 0, y: 0 },
    { id: '2', word: 'world', status: 'bank', x: 0, y: 0 },
  ],

  moveMagnet: (id, x, y, status) =>
    set((state) => ({
      magnets: state.magnets.map((m) =>
        m.id === id ? { ...m, x, y, status } : m
      ),
    })),

  loadExpansion: () =>
    set((state) => ({
      magnets: [
        ...state.magnets,
        { id: '3', word: 'React', status: 'bank', x: 0, y: 0 },
        { id: '4', word: 'is', status: 'bank', x: 0, y: 0 },
        { id: '5', word: 'fun', status: 'bank', x: 0, y: 0 },
      ],
    })),
}));