import { create } from "zustand";
import api from "../restApi";

export const useRoomStore = create((set) => ({
  data: null,
  loading: false,
  error: null,
  fetchData: async () => {
    set({ loading: true, error: null });
    try {
      console.log("hi");
      const res = await fetch(api.rooms);
      if (!res.ok) throw new Error("Failed to fetch");
      const json = await res.json();
      set({ data: json, loading: false });
    } catch (err) {
      set({ error: err.message, loading: false });
    }
  },
  increment: () => set((s) => ({ count: s.count + 1 })),
}));
