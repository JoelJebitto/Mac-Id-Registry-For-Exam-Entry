// store.js
import { create } from "zustand";
import jwtDecode from "jwt-decode";
export const useUserStore = create((set, get) => ({
  username: "",
  role: "",
  decodeToken: () => {
    const token = localStorage.getItem("token");
    const decoded = jwtDecode(token);
    set({ userName: decoded["username"], role: decoded["role"] });
  },
  isTokenExpired: () => {
    const token = get().token;
    if (!token) return true;

    try {
      const { exp } = jwtDecode(token); // `exp` is in seconds
      const currentTime = Date.now() / 1000;
      return exp < currentTime;
    } catch (e) {
      return true;
    }
  },
  count: 0,
  increase: () => set((state) => ({ count: state.count + 1 })),
}));
