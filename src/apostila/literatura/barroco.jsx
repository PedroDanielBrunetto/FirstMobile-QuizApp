import ButtonNavigate from "../../components/ButtonNavigate";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import barrocos from "../../img/change_history_FILL0_wght400_GRAD0_opsz48.svg";
import pintura from "../../img/pintubarroco.png";

export default function barroco(){
    return(
        <main className="absolute inset-0">
            <Header/>
            <section className="p-6 flex gap-2 items-center">
                <img src={barrocos} alt="" />
                <h1 className="font-medium text-xl pl-3">Barroco</h1>
            </section>
            <section className="p-6 flex flex-col gap-2 items-center">
                <p>
                Barroco é o estilo artístico que floresceu entre o final do século XVI e meados do século XVIII, inicialmente na Itália, difundindo-se em seguida pelos países católicos da Europa e da América, antes de atingir, em uma forma modificada, as áreas protestantes e alguns pontos do Oriente.
                </p>
                <p>
                Essa época surgiu no final do Renascimento e manifestava-se através de grande ostentação e extravagância entre os grupos beneficiados pelas riquezas da colonização.
                </p>
                <img src={pintura} alt="" />
            </section>
            <div className="flex flex-col items-center">
                <ButtonNavigate content={"barroco"} discipline={"literatura"}/>
            </div>
            <Footer/>
        </main>
    )
}