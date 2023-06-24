import Footer from "../../components/Footer";
import Header from "../../components/Header";
import ligacao from "../../img/schema_FILL0_wght400_GRAD0_opsz48.svg";
import naci from "../../img/naci.png";
import ButtonNavigate from "../../components/ButtonNavigate";

export default function ligacoesquimicas(){
    return(
        <main className="absolute inset-0">
            <Header/>
            <section className="p-6 flex gap-2 items-center">
                <img src={ligacao} alt="" />
                <h1 className="font-medium text-xl pl-3">Ligações químicas </h1>
            </section>
            <section className="p-6 flex flex-col gap-2 items-center">
                <img src={naci} alt="" />
                
                <p>
                As ligações químicas correspondem à união dos átomos para a formação das substâncias químicas.
                </p>
                <p>
                Em outras palavras, as ligações químicas acontecem quando os átomos dos elementos químicos se combinam uns com os outros e os principais tipos são:
                </p>
                
                        <li><strong>Ligações iônicas:</strong> transferência de elétrons;</li>
                        <li><strong>Ligações covalentes:</strong>compartilhamento de elétrons;</li>
                        <li><strong>Ligações metálicas:</strong>existência de elétrons livres.</li>

            </section>
            <div className="flex flex-col items-center">
                <ButtonNavigate content={"ligacoes"} discipline={"quimica"}/>
            </div>
            <Footer/>
        </main>
    )
}