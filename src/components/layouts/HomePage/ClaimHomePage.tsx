import { Link } from 'react-router-dom';

const ClaimHomePage = () => {
    return (
        <section className="bg-blue-800 py-12">
            <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
                <div className="mb-6 md:mb-0">
                    <h2 className="text-2xl font-semibold text-white mb-2">Заявить о страховом случае</h2>
                    <p className="text-blue-100">Вы можете подать заявление о страховом случае, посетив один из наших офисов.</p>
                </div>
                <div>
                    <Link
                        to="/case/claim"
                        className="border border-white text-white hover:bg-white hover:text-blue-800 transition px-6 py-3 rounded-xl shadow-sm"
                    >
                        Найти удобный для вас офис
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default ClaimHomePage;