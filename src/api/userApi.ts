import { $host, $authHost } from './axios';
import type { IUser } from '../store/UserStore.ts';

export const userApi = {
    sendCode: async (email: string): Promise<void> => {
        await $host.post('/user/send-code', { email });
    },

    registration: async (data: { email: string; password: string; code: string }): Promise<string> => {
        const res = await $host.post<{ token: string }>('/user/registration', data);
        return res.data.token;
    },

    login: async (data: { email: string; password: string }): Promise<string> => {
        const res = await $host.post<{ token: string }>('/user/login', data);
        return res.data.token;
    },

    checkAuth: async (): Promise<string> => {
        const res = await $authHost.get<{ token: string }>('/user/auth');
        return res.data.token;
    },

    getMyProfile: async (): Promise<IUser> => {
        const res = await $authHost.get<IUser>('/user/me');
        return res.data;
    },

    updateMyProfile: async (data: { phone?: string; unp?: string }) => {
        const response = await $authHost.patch('/user/me', data);
        return response.data;
    },

    sendUpdateCode: async () => {
        const response = await $authHost.post('/user/me/send-email-code');
        return response.data;
    },

    updateEmail: async (data: { newEmail: string; code: string }): Promise<string> => {
        const response = await $authHost.patch('/user/me/email', data);
        return response.data.token;
    },

    updatePassword: async (data: {
        oldPassword: string;
        newPassword: string;
        confirmPassword: string;
    }) => {
        const response = await $authHost.patch('/user/me/password', data);
        return response.data;
    },

    getAllUsers: async (filters?: {
        email?: string;
        phone?: string;
        role?: string;
        clientType?: string;
    }) => {
        const query = new URLSearchParams(filters as any).toString();
        const response = await $authHost.get(`/user/${query ? `?${query}` : ''}`);
        return response.data;
    },

    getUserById: async (id: number) => {
        const response = await $authHost.get(`/user/${id}`);
        return response.data;
    },

    updateUser: async (id: number, data: {
        email?: string;
        phone?: string;
        role?: 'admin' | 'manager' | 'user';
    }) => {
        const response = await $authHost.patch(`/user/${id}`, data);
        return response.data;
    },

    deleteUser: async (id: number) => {
        const response = await $authHost.delete(`/user/${id}`);
        return response.data;
    },
};