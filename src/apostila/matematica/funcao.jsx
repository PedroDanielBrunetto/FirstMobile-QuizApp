import Footer from "../../components/Footer";
import Header from "../../components/Header";
import funcaos from "../../img/funcao.svg";
import evento from "../../img/funcaao.png";
import ButtonNavigate from "../../components/ButtonNavigate";

export default function funcao() {
    
    return (
        <main className="absolute inset-0">
            <Header />
            <section className="p-6 flex gap-2 items-center">
                <img src={funcaos} alt="" />
                <h1 className="font-medium text-xl pl-3">Função</h1>
            </section>
            <section className="p-6 flex flex-col gap-2 items-center">
                <p>
                    Na Matemática, função corresponde a uma associação dos elementos de dois conjuntos, ou seja, a função indica como os elementos estão relacionados.
                </p>
                <p>
                    A proporção é uma relação de igualdade entre razões e, assim, apresenta a comparação de duas grandezas em diferentes situações.
                </p>
                <img src={evento} alt="" />
            </section>
            <div className="flex flex-col items-center">
                <ButtonNavigate content={"funcoes"} discipline={"matematica"}/>
            </div>
            <Footer />
        </main>
    )
}