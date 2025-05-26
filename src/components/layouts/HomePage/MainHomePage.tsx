import { Link } from "react-router-dom";
import { useUserStore } from "../../../store/UserStore";

import CargoCard from "../../../assets/CargoCard.jpg";
import ResponsibilityCard from "../../../assets/ResponsibilityCard.jpg";
import MultipleCard from "../../../assets/MultipleCard.jpg";

import { PROFILE_ROUTE, ABOUT_ROUTE, AUTH_ROUTE,
    INFO_CARGO_ROUTE, INFO_RESPONSIBILITY_ROUTE, INFO_MULTIPLE_ROUTE
} from "../../../utils/consts.ts";


const MainHomePage = () => {
    const isAuth = useUserStore((state) => state.isAuth);

    return (
        <div className="mt-[70px] px-[120px]">
            {/* Верхний блок с кнопками */}
            <div className="flex justify-between gap-4 mb-8">
                {[
                    { text: "Личный кабинет", link: isAuth ? PROFILE_ROUTE : AUTH_ROUTE},
                    { text: "Страхование грузов", link: INFO_CARGO_ROUTE },
                    { text: "О компании", link: ABOUT_ROUTE },
                ].map(({ text, link }, idx) => (
                    <Link
                        key={idx}
                        to={link}
                        className="flex items-center border border-gray-300 rounded-xl px-6 py-4 w-full text-left text-base text-gray-800 hover:bg-gray-100 transition"
                    >
                        {text}
                    </Link>
                ))}
            </div>

            {/* Заголовок */}
            <h2 className="text-3xl font-semibold mb-10">Страховые услуги</h2>

            {/* Карточки */}
            <div className="grid grid-cols-3 gap-8">
                {[
                    {
                        title: "Страхование грузов",
                        description: "Надёжная защита ваших грузов при транспортировке.",
                        image: CargoCard,
                        link: INFO_CARGO_ROUTE
                    },
                    {
                        title: "Страхование ответственности",
                        description: "Обеспечьте покрытие в случае непредвиденных ситуаций.",
                        image: ResponsibilityCard,
                        link: INFO_RESPONSIBILITY_ROUTE
                    },
                    {
                        title: "Многоразовое страхование",
                        description: "Удобство и экономия при частых перевозках.",
                        image: MultipleCard,
                        link: INFO_MULTIPLE_ROUTE
                    }
                ].map((card, index) => (
                    <div
                        key={index}
                        className="bg-white shadow-md rounded-2xl overflow-hidden flex flex-col transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg"
                    >
                        <img src={card.image} alt={card.title} className="h-[280px] w-full object-cover" />
                        <div className="p-4 flex flex-col flex-grow">
                            <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
                            <p className="text-gray-600 mb-4 flex-grow">{card.description}</p>
                            <Link
                                to={card.link}
                                className="inline-block border border-gray-300 rounded-lg px-4 py-2 mt-auto text-gray-800 hover:bg-gray-100 transition text-sm"
                            >
                                Подробнее
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MainHomePage;
