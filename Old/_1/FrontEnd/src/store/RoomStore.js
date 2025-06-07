import { create } from "zustand";
import api from "../restApi";

export const useRoomStore = create((set, get) => ({
  data: null,
  loading: false,
  error: null,
  fetchData: async () => {
    const token = localStorage.getItem("token");
    set({ loading: true, error: null });
    try {
      const res = await fetch(api.rooms, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (!res.ok) throw new Error("Failed to fetch");
      const json = await res.json();
      set({ data: json, loading: false });
    } catch (err) {
      set({ error: err.message, loading: false });
    }
  },
  findRoom: (roomId) => {
    return get().data?.find((item) => {
      return item.roomNo === roomId;
    });
  },
  filterByName: (key) => {
    return get().data?.filter((item) => {
      return item.name.toLowerCase().includes(key.toLowerCase());
    });
  },
  filterByNo: (key) => {
    return get().data?.filter((item) => {
      return item.roomNo.toLowerCase().includes(key.toLowerCase());
    });
  },
}));
