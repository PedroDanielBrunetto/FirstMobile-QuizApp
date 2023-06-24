import ButtonNavigate from "../../components/ButtonNavigate";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Figurass from "../../img/favorite_FILL0_wght400_GRAD0_opsz48.svg";

export default function figuras() {
    return (
        <main className="absolute inset-0">
            <Header />
            <section className="p-6 flex gap-2 items-center">
                <img src={Figurass} alt="" />
                <h1 className="font-medium text-xl pl-3">Figuras de linguagem </h1>
            </section>
            <section className="p-6 flex flex-col gap-2 items-center">
                <p>
                    <p className="text-xl mt-2">1. Metáfora</p><br />
                    A metáfora é, provavelmente, a figura de linguagem que mais utilizamos no nosso dia a dia. Ela se baseia em uma comparação implícita, sem o elemento comparativo (“como” ou “tal qual”, por exemplo), em que uma característica de determinada coisa é atribuída ao elemento metaforizado.
                </p>
                <p>
                    <p className="text-xl mt-2">2. Símile ou Comparação</p><br />
                    A metáfora é, provavelmente, a figura de linguagem que mais utilizamos no nosso dia a dia. Ela se baseia em uma comparação implícita, sem o elemento comparativo (“como” ou “tal qual”, por exemplo), em que uma característica de determinada coisa é atribuída ao elemento metaforizado.

                </p>
                <p>
                    <p className="text-xl mt-2">3. Analogia</p><br />
                    A metáfora é, provavelmente, a figura de linguagem que mais utilizamos no nosso dia a dia. Ela se baseia em uma comparação implícita, sem o elemento comparativo (“como” ou “tal qual”, por exemplo), em que uma característica de determinada coisa é atribuída ao elemento metaforizado.

                </p>
                <p>
                    <p className="text-xl mt-2">4. Metonímia</p><br />
                    A metáfora é, provavelmente, a figura de linguagem que mais utilizamos no nosso dia a dia. Ela se baseia em uma comparação implícita, sem o elemento comparativo (“como” ou “tal qual”, por exemplo), em que uma característica de determinada coisa é atribuída ao elemento metaforizado.

                </p>
                <p>
                    <p className="text-xl mt-2">5. Perífrase</p><br />
                    A metáfora é, provavelmente, a figura de linguagem que mais utilizamos no nosso dia a dia. Ela se baseia em uma comparação implícita, sem o elemento comparativo (“como” ou “tal qual”, por exemplo), em que uma característica de determinada coisa é atribuída ao elemento metaforizado.
                </p>
                <p>Por exemplo, quando falamos no “rei da selva”, estamos falando do leão. Da mesma forma, podemos nos referir à capital francesa como “Cidade Luz” e ao Rio São Francisco como “Velho Chico”. Já no caso de pessoas, essa substituição tem o nome de antonomásia (para saber mais, veja o item 13).</p>
                <p>
                    <p className="text-xl mt-2">6. Sinestesia</p><br />
                    É uma figura de linguagem bastante utilizada na arte, principalmente em músicas e poesias, uma vez que ela trabalha com a mistura de dois ou mais sentidos humanos (olfato, paladar, audição, visão e tato).
                </p>
                <p>
                    <p className="text-xl mt-2">7. Hipérbole</p><br />
                    A metáfora é, provavelmente, a figura de linguagem que mais utilizamos no nosso dia a dia. Ela se baseia em uma comparação implícita, sem o elemento comparativo (“como” ou “tal qual”, por exemplo), em que uma característica de determinada coisa é atribuída ao elemento metaforizado.

                </p>
            </section>
            <div className="flex flex-col items-center">
                <ButtonNavigate content={"figuras"} discipline={"literatura"} />
            </div>
            <Footer />
        </main>
    )
}