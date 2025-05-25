import { $host, $authHost } from './axios';
import type { IUser } from '../store/UserStore.ts';

// Отправка кода на email
export const sendCode = async (email: string): Promise<void> => {
    await $host.post('/user/send-code', { email });
};

// Регистрация нового пользователя
export const registration = async (data: { email: string; password: string; code: string }): Promise<string> => {
    const res = await $host.post<{ token: string }>('/user/registration', data);
    return res.data.token;
};

// Логин пользователя
export const login = async (data: { email: string, password: string }): Promise<string> => {
    const res = await $host.post<{ token: string }>('/user/login', data);
    return res.data.token;
};

// Обновление токена
export const checkAuth = async (): Promise<string> => {
    const res = await $authHost.get<{ token: string }>('/user/auth');
    return res.data.token;
};

// Получить профиль текущего пользователя
export const getMyProfile = async (): Promise<IUser> => {
    const res = await $authHost.get<IUser>('/user/me');
    return res.data;
};

// Обновление профиля: phone, unp
export async function updateMyProfile(data: { phone?: string; unp?: string }) {
    const response = await $authHost.patch('/user/me', data);
    return response.data;
}

// Отправка кода на обновление email
export async function sendUpdateCode() {
    const response = await $authHost.post('/user/me/send-email-code');
    return response.data;
}

// Обновление email по коду
export async function updateEmail(data: { newEmail: string; code: string }): Promise<string> {
    const response = await $authHost.patch('/user/me/email', data);
    return response.data.token;
}

// Обновление пароля
export async function updatePassword(data: {
    oldPassword: string;
    newPassword: string;
    confirmPassword: string;
}) {
    const response = await $authHost.patch('/user/me/password', data);
    return response.data;
}

export async function getAllUsers(filters?: {
    email?: string;
    phone?: string;
    role?: string;
    clientType?: string;
}) {
    const query = new URLSearchParams(filters as any).toString();
    const response = await $authHost.get(`/user/${query ? `?${query}` : ''}`);
    return response.data;
}

// Получить одного пользователя по ID (только для администратора)
export async function getUserById(id: number) {
    const response = await $authHost.get(`/user/${id}`);
    return response.data;
}

// Обновить пользователя по ID (только для администратора)
export async function updateUser(id: number, data: {
    email?: string;
    phone?: string;
    role?: 'admin' | 'manager' | 'user';
}) {
    const response = await $authHost.patch(`/user/${id}`, data);
    return response.data;
}

// Удалить пользователя по ID (только для администратора)
export async function deleteUser(id: number) {
    const response = await $authHost.delete(`/user/${id}`);
    return response.data;
}