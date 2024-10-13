import {create} from 'zustand';
// using persist to keep data on page refresh in localStorage
import { createJSONStorage, persist } from 'zustand/middleware';

const useStore = create(persist(
  (set,get) => ({
    // Define your state and actions here
    count: 1,
    increment: () => set((state) => ({ count: state.count + 1 })),
    decrement: () => set((state) => ({ count: state.count - 1 })),
    addToCount: (number) => set((state) => ({ count: state.count + number })),
  }),
  {
    name: 'app-storage',
    getStorage: () => createJSONStorage(() => localStorage), // (optional) by default, 'localStorage' is used
  }
));

export default useStore;