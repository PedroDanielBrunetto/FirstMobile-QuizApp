import ButtonNavigate from "../../components/ButtonNavigate";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import trovadorismos from "../../img/stylus_laser_pointer_FILL0_wght400_GRAD0_opsz48.svg";
import trovao from "../../img/trovao.png"

export default function trovadorismo() {
    return (
        <main className="absolute inset-0">
            <Header />
            <section className="p-6 flex gap-2 items-center">
                <img src={trovadorismos} alt="" />
                <h1 className="font-medium text-xl pl-3">O Trovadorismo e suas cantigas</h1>
            </section>
            <section className="p-6 flex flex-col gap-2 items-center">
                <p>
                    <p className="text-xl mt-2">Cantigas de Amor</p><br />
                    A metáfora é, provavelmente, a figura de linguagem que mais utilizamos no nosso dia a dia. Ela se baseia em uma comparação implícita, sem o elemento comparativo (“como” ou “tal qual”, por exemplo), em que uma característica de determinada coisa é atribuída ao elemento metaforizado.

                </p>
                <p>
                    A influência do lirismo provençal foi intensificada com a chegada de colonos franceses na Península Ibérica e que foram lutar contra os mouros ligados a Provença. Além disso, destaca-se o intenso comércio entre a França e a região ocidental da Península Ibérica, alcançando o Atlântico Norte.
                </p>
                <p>
                    <p className="text-xl mt-2">Cantigas de Amigo</p><br />
                    As cantigas de amigo originam-se do sentimento popular e na própria Península Ibérica. Nelas, o eu poético é feminino, no entanto, seus autores são homens.
                </p>
                <p>
                    <p className="text-xl mt-2">Cantigas de Maldizer</p><br />
                    As cantigas de maldizer são canções cuja estrutura comporta críticas mais diretas e grosseiras. Nelas, são usadas termos de baixo calão, como palavrões, pois o intuito é mesmo agredir alguém verbalmente.
                </p>
                <p>
                    <p className="text-xl mt-2">Trovadorismo</p><br />
                    O Trovadorismo, também chamado de Primeira Época Medieval, é o período que se estende de 1189 (ou 1198) até 1434.
                </p>
                <img src={trovao} alt="" />
                <p>
                    Em Portugal, esse movimento literário tem início com a Canção Ribeirinha, escrita por Paio Soares de Taveirós. Ele termina com a nomeação de Fernão Lopes para o cargo de cronista da Torre do Tombo.
                </p>
                <p>
                    A cultura trovadoresca, surgida entre os séculos XI e XII, reflete bem o momento histórico que caracteriza o período. Nele, temos a Europa cristã e a organização das Cruzadas em direção ao Oriente.
                </p>
            </section>
            <div className="flex flex-col items-center">
                <ButtonNavigate content={"trovadorismo"} discipline={"literatura"}/>
            </div>
            <Footer />
        </main>
    )
}