// store.js
import { create } from "zustand";
import * as jwt_decode from "jwt-decode";
export const useUserStore = create((set, get) => ({
  username: "",
  role: "",
  exp: null,
  decodeToken: () => {
    const token = localStorage.getItem("token");
    if (!token) return;
    const decoded = jwt_decode.jwtDecode(token);
    set({
      userName: decoded["username"],
      role: decoded["role"],
      exp: decoded["exp"],
    });
  },
  logout: () => {
    localStorage.removeItem("token");
    set({
      userName: "",
      role: "",
      exp: null,
    });
  },
  isTokenExpired: () => {
    try {
      const currentTime = Date.now() / 1000;
      return get().exp < currentTime;
    } catch {
      return true;
    }
  },
}));
