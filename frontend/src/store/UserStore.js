import { create } from "zustand";
import * as jwt_decode from "jwt-decode";
import api from "../api";

export const useUserStore = create((set, get) => ({
  username: "",
  role: "",
  iat: null,
  exp: null,
  decodeToken: () => {
    const token = localStorage.getItem("token");
    if (!token) return;
    const decoded = jwt_decode.jwtDecode(token);
    set({
      userName: decoded["username"],
      role: decoded["role"],
      exp: decoded["exp"],
      iat: decoded["iat"],
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
  login: async (username, password) => {
    localStorage.getItem("token") && get().logout();
    const { token } = await fetch(api.auth.login, {
      method: "POST",
      body: {
        username,
        password,
      },
    });
    return token;
  },
  isTokenExpired: () => {
    if (!get().exp) return false;
    try {
      const currentTime = Date.now() / 1000;
      return get().exp < currentTime;
    } catch {
      return true;
    }
  },
}));
