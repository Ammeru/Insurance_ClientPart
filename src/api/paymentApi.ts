import { $authHost } from './axios'

export type PaymentStatus = 'pending' | 'paid'

export interface Payment {
    id: number
    insuranceId: number
    amount: number
    paymentStatus: PaymentStatus
    paidAt: string | null
    createdAt: string
    updatedAt: string
}

export interface InsuranceConnect {
    insuranceId: number
    cargoId: number
    riskId: number
}

export const paymentApi = {
    createPayment: async (
        insuranceId: number,
        cargoId: number,
        riskId: number,
        amount: number
    ): Promise<{ payment: Payment; connect: InsuranceConnect }> => {
        const res = await $authHost.post('/insurance/payments', {
            insuranceId,
            cargoId,
            riskId,
            amount,
        })
        return res.data
    },

    updatePayment: async (
        insuranceId: number
    ): Promise<{ payment: Payment; policy: any }> => {
        const res = await $authHost.patch('/me/payments', {
            insuranceId,
        })
        return res.data
    },
}