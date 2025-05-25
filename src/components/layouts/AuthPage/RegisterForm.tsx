import { useState } from "react";
import { useUserStore } from "../../../store/UserStore";

const RegisterForm = () => {
    const { sendCode, register, loading } = useUserStore();

    const [email, setEmail] = useState("");
    const [codeSent, setCodeSent] = useState(false);
    const [code, setCode] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState<string | null>(null);

    const handleSendCode = async () => {
        setError(null);
        try {
            await sendCode(email);
            setCodeSent(true);
        } catch (err) {
            setError("Не удалось отправить код. Проверьте email.");
        }
    };

    const handleRegister = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);
        try {
            await register({ email, password, code });
        } catch (err) {
            setError("Ошибка регистрации. Проверьте код или пароль.");
        }
    };

    return (
        <form onSubmit={handleRegister} className="space-y-4">
            <h3 className="text-2xl font-semibold text-center mb-4">Регистрация</h3>

            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
            />

            <button
                type="button"
                onClick={handleSendCode}
                disabled={!email || loading}
                className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition disabled:opacity-50"
            >
                Отправить код
            </button>

            {codeSent && (
                <>
                    <input
                        type="text"
                        placeholder="Код с почты"
                        value={code}
                        onChange={(e) => setCode(e.target.value)}
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
                        disabled={loading}
                        className="w-full py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition"
                    >
                        Зарегистрироваться
                    </button>
                </>
            )}

            {error && <p className="text-red-600 text-sm">{error}</p>}
        </form>
    );
};

export default RegisterForm;
