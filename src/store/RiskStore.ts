import { create } from "zustand";

interface RiskData {
    id?: number;
    riskLevel: string;
    riskReason: string;
    riskScore: number;
}

interface RiskStore {
    risk: RiskData | null;
    setRisk: (risk: RiskData) => void;
    updateRisk: (partial: Partial<RiskData>) => void;
    clearRisk: () => void;
}

export const useRiskStore = create<RiskStore>((set) => ({
    risk: null,

    setRisk: (risk) => set({ risk }),

    updateRisk: (partial) =>
        set((state) => ({
            risk: state.risk ? { ...state.risk, ...partial } : null,
        })),

    clearRisk: () => set({ risk: null }),
}));
