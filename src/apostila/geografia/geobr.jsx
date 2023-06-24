import Footer from "../../components/Footer";
import Header from "../../components/Header";
import br from "../../img/icons8-brazil-64.png";
import geobr from "../../img/geobr.png"
import ButtonNavigate from "../../components/ButtonNavigate";

export default function Geobr() {
    return (
        <main className="absolute inset-0">
            <Header />
            <section className="p-6 flex gap-2 items-center">
                <img src={br} alt="" />
                <h1 className="font-medium text-xl pl-3">Geografia do Brasil</h1>
            </section>
            <section className="p-6 flex flex-col gap-2 items-center">
                <p>
                    A Geografia do Brasil compreende os estudos regionais, humanos e naturais do território brasileiro sob a perspectiva do espaço geográfico e suas nuances.
                </p>
                <img src={geobr} alt="" />
                <p>
                    A Geografia do Brasil é a área especializada em compreender os aspectos físicos e humanos do espaço brasileiro, envolvendo o seu território, suas regiões, paisagens e lugares. É, portanto, através da Geografia do Brasil que compreendemos melhor a dinâmica de funcionamento das composições territoriais nacionais.
                </p>
                <p>
                    O Brasil é considerado um país com dimensões continentais, pois possui uma ampla área territorial, que totaliza 8.514.976 km², o que o torna o quinto maior país existente, atrás de Rússia, Canadá, China e Estados Unidos. A título de comparação, a área da Europa (menos a Rússia) é de aproximadamente 6.220.000 km².
                </p>
                <p>
                    Apesar de suas amplas dimensões continentais, a população do Brasil historicamente concentrou-se nas áreas litorâneas, sobretudo na região Sudeste, que, desde o período da economia cafeeira, transformou-se no centro econômico do país. Mesmo com as sucessivas “marchas para o oeste”, ainda a maior parte dos mais de 200 milhões de habitantes do país é de áreas relativamente próximas aos litorais.
                </p>
                <p>
                    A economia do Brasil é considerada emergente, ou seja, a de um país historicamente subdesenvolvido que apresenta padrões relativamente avançados em comparação com boa parte das demais economias periféricas. O PIB de US$2,25 trilhões é o sétimo maior do mundo, podendo subir algumas posições nos próximos anos.
                </p>
                <p>
                    O Brasil está localizado na América do Sul, integrando também o conjunto de países latino-americanos. No geral, o território nacional encontra-se em três hemisférios diferentes: oeste, uma pequena parte no norte e a maior parte no sul. Faz fronteira com todos os países sul-americanos, com exceção do Chile e Equador.
                </p>
            </section>
            <div className="flex flex-col items-center">
                <ButtonNavigate content={"geoBrasil"} discipline={"geografia"} />
            </div>
            <Footer />
        </main>
    )
}