import { create } from "zustand";

export const useModalStore = create((set) => ({
  isOpen: false,
  message: "",
  title: "",
  openModal: (title, msg) => set({ isOpen: true, title: title, message: msg }),
  closeModal: () => set({ isOpen: false, title: "", message: "" }),
}));
