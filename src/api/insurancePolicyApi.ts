import { $authHost } from './axios'

export type InsuranceType = "cargo" | "responsibility" | "multiple"
export type InsuranceTariff = "full" | "mid" | "low"
export type InsuranceStatus = "pending" | "confirmed" | "declined" | "paid" | "active" | "expired"

export interface InsurancePolicy {
    id: number
    insuranceType: InsuranceType
    insuranceTariff: InsuranceTariff
    startDate: string
    endDate: string
    insuranceStatus: InsuranceStatus
    amount: number
}

export const insurancePolicyApi = {
    createInsurancePolicy: async (data: {
        cargoId: number
        amount: number
        insuranceType: InsuranceType
        insuranceTariff: InsuranceTariff
    }): Promise<InsurancePolicy> => {
        const res = await $authHost.post('/insurance', data)
        return res.data
    },

    createResponsibilityPolicy: async (data: {
        insuranceTariff: InsuranceTariff
        durationType: 'single' | 'annual'
        amount: number
    }): Promise<{ policy: InsurancePolicy; payment: any }> => {
        const res = await $authHost.post('/insurance/responsibility', data)
        return res.data
    },

    getMyPolicies: async (status?: InsuranceStatus): Promise<InsurancePolicy[]> => {
        const res = await $authHost.get('/me', {
            params: status ? { status } : undefined
        })
        return res.data
    },

    getMyPolicyById: async (
        id: number
    ): Promise<{ policy: InsurancePolicy; cargo: any; risk: any }> => {
        const res = await $authHost.get(`/me/${id}`)
        return res.data
    },

    getAllPolicies: async (filters?: {
        id?: number
        insuranceType?: InsuranceType
        insuranceTariff?: InsuranceTariff
        insuranceStatus?: InsuranceStatus
    }): Promise<InsurancePolicy[]> => {
        const res = await $authHost.get('/policies', {
            params: filters,
        })
        return res.data
    },

    getPolicyById: async (
        insuranceId: number
    ): Promise<{ policy: InsurancePolicy; cargo: any; risk: any }> => {
        const res = await $authHost.get(`/policies/${insuranceId}`)
        return res.data
    },

    updatePolicyStatus: async (
        id: number,
        status: InsuranceStatus
    ): Promise<{ message: string; policy: InsurancePolicy }> => {
        const res = await $authHost.patch(`/${id}/status`, { status })
        return res.data
    }
}