import { useEffect, useState } from "react";
import clsx from "clsx";
import TopBar from "./TopBar";
import MainNav from "./MainNav";

const Navbar = () => {
    const [showTopBar, setShowTopBar] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            setShowTopBar(scrollY === 0);
        };

        handleScroll(); // Проверка при монтировании

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className="fixed top-0 left-0 w-full z-50 bg-white transition-all duration-300 shadow-sm">
            <div className="w-full px-4">
                <div
                    className={clsx(
                        "transition-transform duration-300",
                        showTopBar ? "translate-y-0 h-[75px]" : "-translate-y-full h-0 overflow-hidden"
                    )}
                >
                    <TopBar />
                </div>
                <div className="h-[85px]">
                    <MainNav />
                </div>
            </div>
        </header>
    );
};

export default Navbar;
