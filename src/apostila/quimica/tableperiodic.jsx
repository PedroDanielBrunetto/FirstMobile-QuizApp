import ButtonNavigate from "../../components/ButtonNavigate";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import co2 from "../../img/co2_FILL0_wght400_GRAD0_opsz48.svg";
import table from "../../img/licensed-image.jpg";

export default function tabelaperiodica(){
    return(
        <main className="absolute inset-0">
            <Header/>
            <section className="p-6 flex gap-2 items-center">
                <img src={co2} alt="" />
                <h1 className="font-medium text-xl pl-3">Tabela periódica </h1>
            </section>
            <section className="p-6 flex flex-col gap-2 items-center">
                <img src={table} alt="" />
                <p>
                <p className="text-xl mt-2">Organização da Tabela Periódica</p><br/>
                Os chamados períodos são as linhas horizontais numeradas, que apresentam elementos com o mesmo número de camadas eletrônicas, totalizando sete períodos:
                 
                        <li className="mt-3">1º Período: 2 elementos</li>
                        <li>2º Período: 8 elementos</li>
                        <li>3º Período: 8 elementos</li>
                        <li>4º Período: 18 elementos</li>
                        <li>5º Período: 18 elementos</li>
                        <li>6º Período: 32 elementos</li>
                  
                    <p className="mt-3">Com a organização dos períodos da tabela, algumas linhas horizontais se tornariam muito extensas, por isso, é comum representar a série dos lantanídeos e a série dos actinídeos à parte dos demais.

                    </p>
                    <p>
                    Os grupos, anteriormente chamados de famílias, são as colunas verticais, onde os elementos possuem o mesmo número de elétrons na camada mais externa, ou seja, na camada de valência.
                    </p>
                </p>
            </section>
            <div className="flex flex-col items-center">
                <ButtonNavigate content={"tabela"} discipline={"quimica"}/>
            </div>
            <Footer/>
        </main>
    )
}