import { Link } from "react-router-dom";
import {
    HOME_ROUTE,
    INFO_CARGO_ROUTE,
    INFO_RESPONSIBILITY_ROUTE,
    INFO_MULTIPLE_ROUTE,
    ABOUT_ROUTE
} from "../../../utils/consts.ts";

const MainNav = () => {
    return (
        <div className="h-[85px] bg-white flex items-center justify-between px-4 w-full">
            {/* Логотип */}
                <div className="flex items-center space-x-2">
                    <img src="/logo.svg" alt="Logo" className="w-8 h-8" />
                    <Link to={HOME_ROUTE} className="text-xl font-bold text-gray-800">БЕЛнеГОССТРАХ</Link>
                </div>

                {/* Меню */}
                <nav className="flex space-x-6 text-gray-700 font-medium">
                    <Link to={INFO_CARGO_ROUTE} className="hover:text-blue-600">Страхование грузов</Link>
                    <Link to={INFO_RESPONSIBILITY_ROUTE} className="hover:text-blue-600">Страхование ответственности</Link>
                    <Link to={INFO_MULTIPLE_ROUTE} className="hover:text-blue-600">Многоразовая страховка грузов</Link>
                </nav>

                {/* Доп. ссылки */}
                <div className="flex space-x-4">
                    <Link to="/incident" className="text-gray-600 hover:text-blue-600">Страховой случай</Link>
                    <Link to={ABOUT_ROUTE} className="text-gray-600 hover:text-blue-600">О компании</Link>
                </div>
            </div>
    );
};

export default MainNav;
