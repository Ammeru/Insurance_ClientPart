import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { useUserStore } from "../../../store/UserStore";
import {
    PROFILE_ROUTE,
    AUTH_ROUTE,
} from "../../../utils/consts.ts";

const TopBar = () => {
    const isAuth = useUserStore((state) => state.isAuth);
    const logout = useUserStore((state) => state.logout);
    const [openMenu, setOpenMenu] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
                setOpenMenu(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div className="bg-gray-100 text-sm border-b border-gray-200 h-[75px] flex items-center w-full">
            <div className="container mx-auto px-4 flex justify-between items-center w-full">
                <div className="flex space-x-6 text-base">
                    <Link to="/points" className="hover:underline">Точки продаж</Link>
                    <Link to="/contacts" className="hover:underline">Контакты</Link>
                </div>

                <div className="text-gray-600 text-sm leading-tight">
                    <ul className="list-none text-center">
                        <li className="font-semibold">
                            <a href="tel:777" className="text-blue-700 text-lg">777</a><br />
                            <span>Единый номер инфолинии</span>
                        </li>
                        <li className="text-xs mt-1">
                            Звонки платные согласно тарифам операторов
                        </li>
                    </ul>
                </div>

                <div className="text-base relative" ref={menuRef}>
                    {isAuth ? (
                        <>
                            <button
                                onClick={() => setOpenMenu((prev) => !prev)}
                                className="text-blue-600 hover:underline"
                            >
                                Личный кабинет
                            </button>
                            {openMenu && (
                                <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 shadow-md rounded-md z-50">
                                    <Link
                                        to={PROFILE_ROUTE}
                                        className="block px-4 py-2 hover:bg-gray-100"
                                        onClick={() => setOpenMenu(false)}
                                    >
                                        Профиль
                                    </Link>
                                    <button
                                        onClick={() => {
                                            logout();
                                            setOpenMenu(false);
                                        }}
                                        className="w-full text-left px-4 py-2 hover:bg-gray-100 text-red-600"
                                    >
                                        Выйти
                                    </button>
                                </div>
                            )}
                        </>
                    ) : (
                        <Link to={AUTH_ROUTE} className="text-blue-600 hover:underline">Войти</Link>
                    )}
                </div>
            </div>
        </div>
    );
};

export default TopBar;
