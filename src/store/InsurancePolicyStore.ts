import { create } from "zustand";

interface InsurancePolicy {
    id?: number;
    insuranceType: "cargo" | "responsibility" | "multiple";
    insuranceTariff: "full" | "mid" | "low";
    startDate: string;
    endDate: string;
    insuranceStatus: string;
    amount: number;
}

interface InsurancePolicyStore {
    policy: InsurancePolicy | null;
    setPolicy: (policy: InsurancePolicy) => void;
    updatePolicy: (partial: Partial<InsurancePolicy>) => void;
    clearPolicy: () => void;
}

export const useInsurancePolicyStore = create<InsurancePolicyStore>((set) => ({
    policy: null,

    setPolicy: (policy) => set({ policy }),

    updatePolicy: (partial) =>
        set((state) => ({
            policy: state.policy ? { ...state.policy, ...partial } : null,
        })),

    clearPolicy: () => set({ policy: null }),
}));