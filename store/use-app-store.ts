import { create } from "zustand";

type AppState = {
  isShuffleEnabled: boolean;
  volume: number;
  toggleShuffle: () => void;
  setVolume: (nextVolume: number) => void;
};

export const useAppStore = create<AppState>((set) => ({
  isShuffleEnabled: false,
  volume: 0.8,
  toggleShuffle: () => set((state) => ({ isShuffleEnabled: !state.isShuffleEnabled })),
  setVolume: (nextVolume) =>
    set({
      volume: Math.max(0, Math.min(1, nextVolume)),
    }),
}));