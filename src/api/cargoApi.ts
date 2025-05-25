import { $authHost } from "./axios";

export interface CargoDto {
    cargoName: string;
    cargoType: string;
    cargoValue: number;
    cargoWeight: number;
    fromCity: string;
    toCity: string;
    deliveryDate: string; // ISO format
}

export interface Cargo extends CargoDto {
    id: number;
    createdAt: string;
    updatedAt: string;
}

export interface UpdateCargoAndRecalculateResponse {
    cargo: Cargo;
    risk: {
        id: number;
        riskLevel: string;
        riskReason: string;
        riskScore: number;
        updatedAt: string;
    };
    policy: {
        id: number;
        amount: number;
        updatedAt: string;
    };
    payment: {
        id: number;
        amount: number;
        updatedAt: string;
    };
}

export const cargoApi = {
    async createCargo(data: CargoDto): Promise<Cargo> {
        const res = await $authHost.post<Cargo>("/cargo", data);
        return res.data;
    },

    async updateCargo(id: number, data: CargoDto): Promise<Cargo> {
        const res = await $authHost.patch<Cargo>(`/cargo/${id}`, data);
        return res.data;
    },

    async updateCargoAndRecalculate(
        insuranceId: number,
        data: CargoDto
    ): Promise<UpdateCargoAndRecalculateResponse> {
        const res = await $authHost.patch<UpdateCargoAndRecalculateResponse>(
            `/cargo/update-and-recalculate/${insuranceId}`,
            data
        );
        return res.data;
    },
};