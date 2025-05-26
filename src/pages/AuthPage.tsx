import { useState } from "react";
import LoginForm from "../components/layouts/AuthPage/LoginForm";
import RegisterForm from "../components/layouts/AuthPage/RegisterForm";
import { Link } from "react-router-dom";

import {HOME_ROUTE} from "../utils/consts.ts";

const AuthPage = () => {
    const [isLogin, setIsLogin] = useState(true);

    return (
        <div
            className={`min-h-screen flex items-center justify-center transition-all duration-1000 ease-in-out ${
                isLogin
                    ? "bg-gradient-to-r from-white to-blue-600"
                    : "bg-gradient-to-l from-red-400 to-white"
            }`}
        >
            <div className="w-full max-w-5xl bg-white rounded-2xl shadow-xl overflow-hidden flex transition-all duration-700">
                {/* Левая половина */}
                <div className="w-1/2 p-10 flex flex-col justify-center items-center text-center">
                    {isLogin ? (
                        <>
                            <h2 className="text-3xl font-bold text-blue-800 mb-4">С возвращением!</h2>
                            <p className="text-gray-600">
                                Войдите в свой аккаунт, чтобы управлять страховыми полисами, отслеживать статус и многое другое.
                            </p>
                            <Link
                                to={HOME_ROUTE}
                                className="mt-6 inline-block bg-gray-100 text-gray-800 px-5 py-2 rounded-lg shadow-sm hover:bg-gray-200 transition"
                            >
                                На главную
                            </Link>
                        </>
                    ) : (
                        <RegisterForm />
                    )}

                    {/* Переключатель */}
                    {!isLogin && (
                        <p className="mt-4 text-sm text-gray-600">
                            Уже есть аккаунт?{" "}
                            <button
                                className="text-red-500 hover:underline"
                                onClick={() => setIsLogin(true)}
                            >
                                Войти
                            </button>
                        </p>
                    )}
                </div>

                {/* Правая половина */}
                <div className="w-1/2 p-10 flex flex-col justify-center items-center text-center">
                    {isLogin ? (
                        <LoginForm />
                    ) : (
                        <>
                            <h2 className="text-3xl font-bold text-red-500 mb-4">Добро пожаловать!</h2>
                            <p className="text-gray-600">
                                Зарегистрируйтесь, чтобы начать оформление страхования грузов, ответственности или по многоразовой программе.
                            </p>
                            <Link
                                to={HOME_ROUTE}
                                className="mt-6 inline-block bg-gray-100 text-gray-800 px-5 py-2 rounded-lg shadow-sm hover:bg-gray-200 transition"
                            >
                                На главную
                            </Link>
                        </>
                    )}

                    {/* Переключатель */}
                    {isLogin && (
                        <p className="mt-4 text-sm text-gray-600">
                            Не зарегистрированы?{" "}
                            <button
                                className="text-blue-700 hover:underline"
                                onClick={() => setIsLogin(false)}
                            >
                                Зарегистрироваться
                            </button>
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default AuthPage;