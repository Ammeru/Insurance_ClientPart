import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { jwtDecode } from 'jwt-decode';

import * as userApi from '../api/userApi'; // 👈 импортируем все API-функции

export type UserRole = "user" | "manager" | "admin";
export const UserRole = {
    USER: "user",
    MANAGER: "manager",
    ADMIN: "admin",
} as const;

export type ClientType = "physical" | "legal";
export const ClientType = {
    PHYSICAL: "physical",
    LEGAL: "legal",
} as const;

export interface IUser {
    id: number;
    email: string;
    role: UserRole;
    clientType: ClientType;
    phone?: string | null;
    unp?: string | null;
}

interface UserStore {
    user: IUser | null;
    isAuth: boolean;
    loading: boolean;

    sendCode: (email: string) => Promise<void>;
    register: (data: { email: string; password: string; code: string }) => Promise<void>;
    login: (data: { email: string, password: string }) => Promise<void>;
    logout: () => void;
    checkAuth: () => Promise<void>;
    fetchUser: () => Promise<void>;
    updateProfile: (data: { phone?: string; unp?: string }) => Promise<void>;
    sendEmailUpdateCode: () => Promise<void>;
    updateEmail: (data: { newEmail: string; code: string }) => Promise<void>;
    updatePassword: (data: {
        oldPassword: string;
        newPassword: string;
        confirmPassword: string;
    }) => Promise<void>;
}

export const useUserStore = create<UserStore>()(
    persist(
        (set, get) => ({
            user: null,
            isAuth: false,
            loading: false,

            sendCode: async (email) => {
                set({ loading: true });
                try {
                    await userApi.sendCode(email);
                } catch (error) {
                    console.error('Ошибка отправки кода:', error);
                    throw error;
                } finally {
                    set({ loading: false });
                }
            },

            register: async ({ email, password, code }) => {
                set({ loading: true });
                try {
                    const token = await userApi.registration({ email, password, code });
                    localStorage.setItem('token', token);
                    const decoded: IUser = jwtDecode(token);
                    set({ isAuth: true, user: decoded });
                    await get().fetchUser();
                } catch (error) {
                    console.error('Ошибка регистрации:', error);
                    throw error;
                } finally {
                    set({ loading: false });
                }
            },

            login: async ({ email, password }) => {
                set({ loading: true });
                try {
                    const token = await userApi.login({ email, password });
                    localStorage.setItem('token', token);
                    const decoded: IUser = jwtDecode(token);
                    set({ isAuth: true, user: decoded });
                    await get().fetchUser();
                } catch (error) {
                    console.error('Ошибка логина:', error);
                    throw error;
                } finally {
                    set({ loading: false });
                }
            },

            logout: () => {
                localStorage.removeItem('token');
                set({ isAuth: false, user: null });
            },

            checkAuth: async () => {
                set({ loading: true });
                try {
                    const token = await userApi.checkAuth();
                    localStorage.setItem('token', token);
                    const decoded: IUser = jwtDecode(token);
                    set({ isAuth: true, user: decoded });
                    await get().fetchUser();
                } catch (error) {
                    console.error('Ошибка проверки токена:', error);
                    set({ isAuth: false, user: null });
                } finally {
                    set({ loading: false });
                }
            },

            fetchUser: async () => {
                try {
                    const user = await userApi.getMyProfile();
                    set({ user });
                } catch (error) {
                    console.error('Ошибка загрузки данных пользователя:', error);
                }
            },

            updateProfile: async (data) => {
                set({ loading: true });
                try {
                    await userApi.updateMyProfile(data);
                    await get().fetchUser(); // Обновим профиль
                } catch (error) {
                    console.error('Ошибка обновления профиля:', error);
                    throw error;
                } finally {
                    set({ loading: false });
                }
            },

            sendEmailUpdateCode: async () => {
                set({ loading: true });
                try {
                    await userApi.sendUpdateCode();
                } catch (error) {
                    console.error('Ошибка отправки кода на email:', error);
                    throw error;
                } finally {
                    set({ loading: false });
                }
            },

            updateEmail: async ({ newEmail, code }) => {
                set({ loading: true });
                try {
                    const token = await userApi.updateEmail({ newEmail, code });
                    localStorage.setItem('token', token);
                    const decoded: IUser = jwtDecode(token);
                    set({ isAuth: true, user: decoded });
                    await get().fetchUser();
                } catch (error) {
                    console.error('Ошибка обновления email:', error);
                    throw error;
                } finally {
                    set({ loading: false });
                }
            },

            updatePassword: async (data) => {
                set({ loading: true });
                try {
                    await userApi.updatePassword(data);
                } catch (error) {
                    console.error('Ошибка смены пароля:', error);
                    throw error;
                } finally {
                    set({ loading: false });
                }
            },
        }),
        {
            name: 'user-store',
            partialize: (state) => ({
                user: state.user,
                isAuth: state.isAuth,
            }),
        }
    )
);