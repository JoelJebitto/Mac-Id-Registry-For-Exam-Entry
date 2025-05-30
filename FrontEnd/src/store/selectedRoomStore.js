// store.js
import { create } from "zustand";

export const useSelectedRoomStore = create((set) => ({
  studentName: "",
  roomNo: "",
  macId: "",
  increase: () => set((state) => ({ count: state.count + 1 })),
}));
