import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import barroco from "../img/change_history_FILL0_wght400_GRAD0_opsz48.svg";
import Figurass from "../img/favorite_FILL0_wght400_GRAD0_opsz48.svg";
import trovadorismos from "../img/stylus_laser_pointer_FILL0_wght400_GRAD0_opsz48.svg";

export default function Literatura() {
    const navigate = useNavigate()
    return (
        <main className="absolute inset-0">
            <Header />
            <section className="p-6 flex flex-col gap-4">
                <h1 className="text-xl font-Sora mb-5 font-semibold">Literatura</h1>
                <button onClick={()=>navigate("/barroco")}>
                    <div className="flex w-full p-5 bg-[#E6ECFF] rounded-md items-center">
                        <img src={barroco} alt="" />
                        <p className="font-medium pl-3">Barroco</p>
                    </div>
                </button>
                <button onClick={()=>navigate("/figuras")}>
                    <div className="flex w-full p-5 bg-[#E6ECFF] rounded-md items-center">
                        <img src={Figurass} alt="" />
                        <p className="font-medium pl-3">Figuras de linguagem</p>
                    </div>
                </button>
                <button onClick={()=>navigate("/trovadorismo")}>
                    <div className="flex w-full p-5 bg-[#E6ECFF] rounded-md items-center">
                        <img src={trovadorismos} alt="" />
                        <p className="font-medium pl-3">O Trovadorismo e suas cantigas</p>
                    </div>
                </button>
            </section>
            <Footer />
        </main>
    )
}