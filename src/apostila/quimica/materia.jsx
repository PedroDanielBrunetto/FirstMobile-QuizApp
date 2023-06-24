import Footer from "../../components/Footer";
import Header from "../../components/Header";
import materiaa from "../../img/scatter_plot_FILL0_wght400_GRAD0_opsz48.svg";
import balao from "../../img/balao.png";
import ButtonNavigate from "../../components/ButtonNavigate";

export default function materia(){
    return(
        <main className="absolute inset-0">
            <Header/>
            <section className="p-6 flex gap-2 items-center">
                <img src={materiaa} alt="" />
                <h1 className="font-medium text-xl pl-3">Matéria </h1>
            </section>
            <section className="p-6 flex flex-col gap-2 items-center">
                <img src={balao} alt="" />
                
                <p>
                As ligações químicas correspondem à união dos átomos para a formação das substâncias químicas.
                </p>
                <p>
                De acordo com Demócrito, a matéria é formada por pequenas partículas menores, chamadas de átomo, e cada tipo de matéria se distingue pela natureza e forma de organização dos átomos, o que nos leva aos diferentes estados físicos:
                </p>
                        <li>gasoso;</li>
                        <li>líquido;</li>
                        <li>sólido.</li>
                <p className="mt-3">
                O ar atmosférico que respiramos, por exemplo, também é matéria. Apesar de não conseguirmos ver, o ar tem peso e ocupa espaço. Prova disso é que, quando enchemos um balão, ele ganha volume e, se colocarmos um balão vazio e um cheio em uma balança, poderemos ver que o balão cheio de ar é um pouco mais pesado.
                </p>
            </section>
            <div className="flex flex-col items-center">
                <ButtonNavigate content={"materia"} discipline={"quimica"}/>
            </div>
            <Footer/>
        </main>
    )
}