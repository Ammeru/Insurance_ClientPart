import axios from 'axios'
import type { InternalAxiosRequestConfig } from 'axios'

const apiBaseUrl = import.meta.env.VITE_API_BASE_URL

export const $host = axios.create({
    baseURL: apiBaseUrl,
})

export const $authHost = axios.create({
    baseURL: apiBaseUrl,
})

const authInterceptor = (config: InternalAxiosRequestConfig) => {
    const token = localStorage.getItem('token')
    if (token && config.headers) {
        config.headers.Authorization = `Bearer ${token}`
    }
    return config
}

$authHost.interceptors.request.use(authInterceptor)