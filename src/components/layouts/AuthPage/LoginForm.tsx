import { useState } from "react";
import { useUserStore } from "../../../store/UserStore";
import { useNavigate } from "react-router-dom";
import { PROFILE_ROUTE } from "../../../utils/consts";

const LoginForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const login = useUserStore((state) => state.login);
    const loading = useUserStore((state) => state.loading);
    const navigate = useNavigate();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            console.log("Попытка логина:", email, password);
            await login({ email, password });
            navigate(PROFILE_ROUTE);
        } catch (error) {
            alert("Ошибка авторизации");
        }
    };

    return (
        <form onSubmit={handleLogin} className="space-y-4 w-full max-w-sm">
            <h3 className="text-2xl font-semibold text-center mb-4">Вход</h3>
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
            />
            <input
                type="password"
                placeholder="Пароль"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
            />
            <button
                type="submit"
                className="w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
                disabled={loading}
            >
                {loading ? "Вход..." : "Войти"}
            </button>
        </form>
    );
};

export default LoginForm;
