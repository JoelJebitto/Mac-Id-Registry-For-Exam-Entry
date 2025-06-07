import { create } from "zustand";
import Home from "../pages/Home";
export const usePageStore = create((set, get) => ({
  CurrentPage: Home,
  setCurrentPage: (Page) => {
    set({
      CurrentPage: Page,
    });
  },
}));
