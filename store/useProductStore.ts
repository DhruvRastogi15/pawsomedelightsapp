// store/useProductStore.ts
import { create } from "zustand";

type Store = {
  product: any;
  setProduct: (p: any) => void;
};

export const useProductStore = create<Store>((set) => ({
  product: null,
  setProduct: (product) => set({ product }),
}));
