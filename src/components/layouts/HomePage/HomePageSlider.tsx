import { useState, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import insurance from "../../../assets/insurance.jpg";
import cargo from "../../../assets/cargo.jpg";
import responsibility from "../../../assets/responsibility.jpg";
import multiple from "../../../assets/multiple.jpg";

const images = [insurance, cargo, responsibility, multiple];

const HomePageSlider = () => {
    const [current, setCurrent] = useState(0);
    const [startX, setStartX] = useState(0);
    // @ts-ignore
    const [isDragging, setIsDragging] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    const prevSlide = () =>
        setCurrent((prev) => (prev - 1 + images.length) % images.length);
    const nextSlide = () => setCurrent((prev) => (prev + 1) % images.length);
    const goToSlide = (index: number) => setCurrent(index);

    const handleTouchStart = (e: React.TouchEvent) => {
        setStartX(e.touches[0].clientX);
        setIsDragging(true);
    };

    const handleTouchEnd = (e: React.TouchEvent) => {
        const deltaX = e.changedTouches[0].clientX - startX;
        if (deltaX > 50) prevSlide();
        else if (deltaX < -50) nextSlide();
        setIsDragging(false);
    };

    const handleMouseDown = (e: React.MouseEvent) => {
        setStartX(e.clientX);
        setIsDragging(true);
    };

    const handleMouseUp = (e: React.MouseEvent) => {
        const deltaX = e.clientX - startX;
        if (deltaX > 50) prevSlide();
        else if (deltaX < -50) nextSlide();
        setIsDragging(false);
    };

    return (
        <div
            ref={ref}
            className="relative w-full h-[520px] overflow-hidden select-none"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
        >
            {/* Slide image */}
            <img
                src={images[current]}
                alt={`slide-${current}`}
                className="w-full h-full object-cover transition-transform duration-500 ease-in-out"
            />

            {/* Arrows */}
            <button
                onClick={prevSlide}
                className="absolute top-1/2 left-8 lg:left-12 transform -translate-y-1/2 bg-white bg-opacity-60 hover:bg-opacity-90 active:scale-95 transition p-3 rounded-md shadow-md"
            >
                <ChevronLeft size={24} />
            </button>

            <button
                onClick={nextSlide}
                className="absolute top-1/2 right-8 lg:right-12 transform -translate-y-1/2 bg-white bg-opacity-60 hover:bg-opacity-90 active:scale-95 transition p-3 rounded-md shadow-md"
            >
                <ChevronRight size={24} />
            </button>

            {/* Slide indicators */}
            <div className="absolute bottom-6 w-full flex justify-center space-x-3">
                {images.map((_, index) => (
                    <button
                        key={index}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                            current === index
                                ? "bg-blue-800 scale-110"
                                : "bg-blue-300 hover:bg-blue-500"
                        }`}
                        onClick={() => goToSlide(index)}
                    />
                ))}
            </div>
        </div>
    );
};

export default HomePageSlider;
