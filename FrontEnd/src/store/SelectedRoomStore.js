// store.js
import { create } from "zustand";

export const useSelectedRoomStore = create((set) => ({
  roomNo: "",
  macId: "",
  setValue: (roomNo, macId) => {
    set({ roomNo, macId });
  },
}));
