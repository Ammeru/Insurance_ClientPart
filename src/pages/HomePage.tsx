import Navbar from "../components/layouts/Navbar/NavBar.tsx";
import Footer from "../components/layouts/Footer/Footer.tsx";
import HomePageSlider from "../components/layouts/HomePage/HomePageSlider.tsx";
import MainHomePage from "../components/layouts/HomePage/MainHomePage.tsx";
import TextHomePage from "../components/layouts/HomePage/TextHomePage.tsx";
import ClaimHomePage from "../components/layouts/HomePage/ClaimHomePage.tsx";

const HomePage = () => {
    return (
        <>
            <Navbar />
            <div className="pt-[160px] min-h-screen">
                <HomePageSlider />
                <MainHomePage />
                <TextHomePage />
                <ClaimHomePage />
            </div>
            <Footer />
        </>
    );
};

export default HomePage;