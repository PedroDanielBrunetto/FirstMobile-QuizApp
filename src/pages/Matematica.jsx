import Footer from "../components/Footer";
import Header from "../components/Header";
import grandezas from "../img/grandezas.svg";
import funcao from "../img/funcao.svg";
import probabilidade from "../img/probabilidade.svg";
import { useNavigate } from "react-router-dom";

export default function Matematica() {
    const navigate = useNavigate()
    return (
        <main className="absolute inset-0">
            <Header />
            <section className="p-6 flex flex-col gap-4">
                <h1 className="text-xl font-Sora mb-5 font-semibold">Matemática</h1>
                <button onClick={()=> navigate("/grandezas")}>
                    <div className="flex w-full p-5 bg-[#E6ECFF] rounded-md items-center">
                        <img src={grandezas} alt="" />
                        <p className="font-medium pl-3">Grandezas proporcionais</p>
                    </div>
                </button>
                <button onClick={()=> navigate("/probabilidade")}>
                    <div className="flex w-full p-5 bg-[#E6ECFF] rounded-md items-center">
                        <img src={probabilidade} alt="" />
                        <p className="font-medium pl-3">Probabilidade</p>
                    </div>
                </button>
                <button onClick={()=> navigate("/funcao")}>
                    <div className="flex w-full p-5 bg-[#E6ECFF] rounded-md items-center">
                        <img src={funcao} alt="" />
                        <p className="font-medium pl-3">Função</p>
                    </div>
                </button>
            </section>
            <Footer />
        </main>
    )
}