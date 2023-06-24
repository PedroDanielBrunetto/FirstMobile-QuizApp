import Footer from "../components/Footer";
import Matematica from "../img/Matematica.svg";
import Geografia from "../img/Geografia.svg";
import Quimica from "../img/Quimica.svg";
import Literatura from "../img/Literatura.svg";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";

export default function Home() {
    const navigate = useNavigate()

    return (
        <main className='absolute inset-0'>
            <Header />

            <section className="p-6 ga">
                <p className="font-bold text-2xl">Bem-vindo, Matheus</p>
                <p className="mt-6 font-medium">Disciplinas</p>
            </section>
            <section className="grid grid-cols-2 grid-rows-2 gap-7 justify-items-center px-6">
                <button 
                    onClick={()=> navigate("/matematica")}
                >
                    <div className="p-3 flex flex-col justify-between w-40 h-40 rounded-lg bg-[#BEE0FF]">
                        <img className="w-20" src={Matematica} alt="" />
                        <p className="font-bold">Matemática</p>
                    </div>
                </button>
                <button 
                    onClick={()=> navigate("/literatura")}
                >
                    <div className="p-3 flex flex-col justify-between w-40 h-40 rounded-lg bg-[#EEBDFF]">
                        <img className="w-20" src={Literatura} alt="" />
                        <p className="font-bold">Literatura</p>
                    </div>
                </button>
                <button 
                    onClick={()=> navigate("/quimica")}
                >
                    <div className="p-3 flex flex-col justify-between w-40 h-40 rounded-lg bg-[#FFB682]">
                        <img className="w-20" src={Quimica} alt="" />
                        <p className="font-bold">Quimica</p>
                    </div>
                </button>
                <button 
                    onClick={()=> navigate("/geografia")}
                >
                    <div className="p-3 flex flex-col justify-between w-40 h-40 rounded-lg bg-[#BDFFCC]">
                        <img className="w-20" src={Geografia} alt="" />
                        <p className="font-bold">Geografia</p>
                    </div>
                </button>
            </section>

            <Footer />
        </main>
    )
}