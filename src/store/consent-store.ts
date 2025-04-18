import { create } from "zustand";

type ConsentStore = {
    categories: string[];
    setCategories: (categories: string[]) => void;
};

const useConsentStore = create<ConsentStore>((set) => ({
    categories: [],
    setCategories: (categories: string[]) => set({ categories: categories }),
}));

export default useConsentStore;
