import Footer from "../components/Footer";
import Header from "../components/Header";
import co2 from "../img/co2_FILL0_wght400_GRAD0_opsz48.svg";
import ligacao from "../img/schema_FILL0_wght400_GRAD0_opsz48.svg";
import materiaa from "../img/scatter_plot_FILL0_wght400_GRAD0_opsz48.svg";
import { useNavigate } from "react-router-dom";

export default function Quimica() {
    const navigate = useNavigate()
    return (
        <main className="absolute inset-0">
            <Header />
            <section className="p-6 flex flex-col gap-4">
                <h1 className="text-xl font-Sora mb-5 font-semibold">Química</h1>
                <button onClick={()=> navigate("/tabelaperiodica")}>
                    <div className="flex w-full p-5 bg-[#E6ECFF] rounded-md items-center">
                        <img src={co2} alt="" />
                        <p className="font-medium pl-3">Tabela periódica </p>
                    </div>
                </button>
                <button onClick={()=> navigate("/ligacoesquimicas")}>
                    <div className="flex w-full p-5 bg-[#E6ECFF] rounded-md items-center">
                        <img src={ligacao} alt="" />
                        <p className="font-medium pl-3">Ligações químicas </p>
                    </div>
                </button>
                <button onClick={()=> navigate("/materia")}>
                    <div className="flex w-full p-5 bg-[#E6ECFF] rounded-md items-center">
                        <img src={materiaa} alt="" />
                        <p className="font-medium pl-3">Matéria </p>
                    </div>
                </button>
            </section>
            <Footer />
        </main>
    )
}