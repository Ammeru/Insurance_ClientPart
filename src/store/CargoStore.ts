import { create } from "zustand";

interface CargoData {
    cargoName: string;
    cargoType: string;
    cargoValue: number;
    cargoWeight: number;
    fromCity: string;
    toCity: string;
    deliveryDate: string; // ISO строка
    id?: number; // добавляется после createCargo
}

interface CargoStore {
    cargo: CargoData | null;
    setCargo: (cargo: CargoData) => void;
    updateCargo: (partial: Partial<CargoData>) => void;
    clearCargo: () => void;
}

export const useCargoStore = create<CargoStore>((set) => ({
    cargo: null,

    setCargo: (cargo) => set({ cargo }),

    updateCargo: (partial) =>
        set((state) => ({
            cargo: state.cargo ? { ...state.cargo, ...partial } : null,
        })),

    clearCargo: () => set({ cargo: null }),
}));