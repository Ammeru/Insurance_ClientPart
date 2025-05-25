import { create } from "zustand";

export type InsuranceType = "cargo" | "responsibility" | "multiple";
export type InsuranceTariff = "full" | "mid" | "low";

interface InsuranceStore {
    insuranceType: InsuranceType | null;
    insuranceTariff: InsuranceTariff | null;
    setInsuranceType: (type: InsuranceType) => void;
    setInsuranceTariff: (tariff: InsuranceTariff) => void;
    reset: () => void;
}

export const useInsuranceStore = create<InsuranceStore>((set) => ({
    insuranceType: null,
    insuranceTariff: null,
    setInsuranceType: (type) => set({ insuranceType: type }),
    setInsuranceTariff: (tariff) => set({ insuranceTariff: tariff }),
    reset: () => set({ insuranceType: null, insuranceTariff: null }),
}));