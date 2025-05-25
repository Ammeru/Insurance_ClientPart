import { create } from "zustand";

interface Payment {
    id?: number;
    insuranceId: number;
    amount: number;
    paymentStatus: "pending" | "paid";
    paidAt?: string;
}

interface PaymentStore {
    payment: Payment | null;
    setPayment: (payment: Payment) => void;
    updatePayment: (partial: Partial<Payment>) => void;
    clearPayment: () => void;
}

export const usePaymentStore = create<PaymentStore>((set) => ({
    payment: null,

    setPayment: (payment) => set({ payment }),

    updatePayment: (partial) =>
        set((state) => ({
            payment: state.payment ? { ...state.payment, ...partial } : null,
        })),

    clearPayment: () => set({ payment: null }),
}));