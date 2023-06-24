import Footer from "../components/Footer";
import Header from "../components/Header";
import chuva from "../img/weather_hail_FILL0_wght400_GRAD0_opsz48.svg";
import agua from "../img/water_drop_FILL0_wght400_GRAD0_opsz48.svg";
import br from "../img/icons8-brazil-64.png";
import { useNavigate } from "react-router-dom";

export default function Geografia() {
    const navigate = useNavigate()

    return (
        <main className="absolute inset-0">
            <Header />
            <section className="p-6 flex flex-col gap-4">
                <h1 className="text-xl font-Sora mb-5 font-semibold">Geografia</h1>
                <button onClick={()=>navigate("/climatologia")}>
                    <div className="flex w-full p-5 bg-[#E6ECFF] rounded-md items-center">
                        <img src={chuva} alt="" />
                        <p className="font-medium pl-3">Climatologia </p>
                    </div>
                </button>
                <button onClick={()=>navigate("/recursos")}>
                    <div className="flex w-full p-5 bg-[#E6ECFF] rounded-md items-center">
                        <img src={agua} alt="" />
                        <p className="font-medium pl-3">Recursos hídricos </p>
                    </div>
                </button>
                <button onClick={()=>navigate("/geobr")}>
                    <div className="flex w-full p-5 bg-[#E6ECFF] rounded-md items-center">
                        <img src={br} alt="" />
                        <p className="font-medium pl-3">Geografia do Brasil </p>
                    </div>
                </button>
            </section>
            <Footer />
        </main>
    )
}