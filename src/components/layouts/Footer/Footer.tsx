import { Link } from "react-router-dom";

import discord from "../../../assets/discord.svg";
import whatsapp from "../../../assets/whatsapp.svg";
import telegram from "../../../assets/telegram.svg";
import KC from "../../../assets/KachestveniyContent.png";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white text-sm mt-10">
            <div className="container mx-auto px-4 py-10 grid grid-cols-4 gap-6 border-b border-gray-700">
                {/* Адрес */}
                <div>
                    <h3 className="font-semibold mb-2">Головной офис</h3>
                    <address className="not-italic leading-relaxed">
                        220069, Республика Беларусь,<br />
                        г. Минск, ул. Якубова, 2-28
                    </address>
                </div>

                {/* Контакты */}
                <div>
                    <h3 className="font-semibold mb-2">Контакты</h3>
                    <p><a href="tel:777" className="hover:underline">777 — инфолиния</a></p>
                    <p><a href="mailto:insurance@bns.by" className="hover:underline">insurance@bngs.by</a></p>
                </div>

                {/* Соцсети */}
                <div>
                    <h3 className="font-semibold mb-2">Мы в соцсетях</h3>
                    <div className="flex space-x-4 items-center">
                        <a href="https://www.discord.com/" target="_blank" rel="noopener noreferrer">
                            <img src={discord} alt="Discord" className="w-6 h-6" />
                        </a>
                        <a href="https://www.whatsapp.com/bnsbel/" target="_blank" rel="noopener noreferrer">
                            <img src={whatsapp} alt="Whatsapp" className="w-6 h-6" />
                        </a>
                        <a href="https://t.me/@TimopheyL" target="_blank" rel="noopener noreferrer">
                            <img src={telegram} alt="Telegram" className="w-6 h-6" />
                        </a>
                    </div>
                </div>

                {/* Знак качества */}
                <div>
                    <a href="https://president.gov.by/ru/documents/ukaz-no-375-ot-27-noyabrya-2023-g" target="_blank" rel="noopener noreferrer">
                        <img src={KC} alt="Знак качества" className="w-16" />
                    </a>
                </div>
            </div>

            {/* Нижняя часть футера */}
            <div className="container mx-auto px-4 py-6 flex justify-between items-start text-xs">
                <div className="flex items-start space-x-4">
                    <img src="logo.svg" alt="БЕЛнеГОССТРАХ" className="w-16" />
                    <div>
                        <div className="mb-1">© 2025, Страховая компания «БЕЛнеГОССТРАХ»</div>
                        <div>Разработка и продвижение сайта — <a href="https://www.escapefromtarkov.com/preorder-page/" className="underline" target="_blank">Скам мамонтов</a></div>
                    </div>
                </div>

                <div className="space-y-1 text-right">
                    <p><a href="#" className="hover:underline">Выбор настроек Cookie</a></p>
                    <p><Link to="/disagreement" className="hover:underline">Отзыв согласия на обработку данных</Link></p>
                    <p><Link to="/map" className="hover:underline">Страница 404</Link></p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
