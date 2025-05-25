import { $authHost } from "./axios";

export interface Risk {
    id: number;
    riskLevel: string;
    riskReason: string;
    riskScore: number;
}

export interface RiskResponse {
    risk: Risk;
    amount: number;
}

export const riskApi = {
    async createRiskAnalysis(data: {
        cargoId: number;
        insuranceTariff: string;
        insuranceType: string;
    }): Promise<RiskResponse> {
        const response = await $authHost.post<RiskResponse>("/risk/create", data);
        return response.data;
    },

    async updateRisk(id: number, data: {
        cargoId: number;
        insuranceTariff: string;
        insuranceType: string;
    }): Promise<RiskResponse> {
        const response = await $authHost.patch<RiskResponse>(`/risk/${id}`, data);
        return response.data;
    }
};