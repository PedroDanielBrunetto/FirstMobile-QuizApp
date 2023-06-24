import ButtonNavigate from "../../components/ButtonNavigate";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import chuva from "../../img/weather_hail_FILL0_wght400_GRAD0_opsz48.svg";

export default function Climatologia(){
    return(
        <main className="absolute inset-0">
            <Header/>
            <section className="p-6 flex gap-2 items-center">
                <img src={chuva} alt="" />
                <h1 className="font-medium text-xl pl-3">Climatologia</h1>
            </section>
            <section className="p-6 flex flex-col gap-2 items-center">
                <p>
                Climatologia é a ciência que estuda o clima. Surgida com o Renascimento (antes disso os eventos atmosféricos eram tidos como obra de Deus, embora tenham sido publicados dois trabalhos a respeito antes disso: um por Hipócrates em 400 a.C. e outro por Aristóteles em 450a.C., respectivamente “Ares, Águas e Lugares” e “Meteorológica e Escrita”). Com a invenção do termômetro, em 1593, por Galileu e do barômetro de mercúrio, em, por Torricelli, finalmente os eventos da atmosfera puderam ser medidos e estudados. Mais tarde o estudo dos fenômenos atmosféricos se dividiria em dois ramos: a climatologia e a meteorologia, cada qual com uma abordagem diferente para os mesmos fenômenos.
                </p>
                <p>
                Mas, para saber exatamente do que se trata é necessário antes compreender a diferença entre “tempo” e “clima”: “tempo” é a característica, ou o comportamento da atmosfera num dado momento (período curto, como um dia, uma semana...) com relação à umidade, temperatura, nebulosidade, precipitação, e outros fatores; já “clima” reflete o comportamento geral da atmosfera, para os mesmos fatores, de determinada região só que em um período longo de tempo, geralmente de 30 a 35 anos (é necessário um período longo de estudos sobre determinada região para determinar qual o clima). Por esse motivo, o estudo do clima é bastante complexo, envolvendo diversos fatores e, até mesmo, a influência humana.
                </p>
                <p>
                Assim a Climatologia tenta entender o funcionamento do clima, tal qual a Meteorologia o faz com os fenômenos da atmosfera (estado físico, químico e dinâmico da atmosfera). Mas o climatólogo também se ocupa do estudo do tempo, dependendo da área específica. Veja a seguir:
                </p>
                <li className="mt-3">Climatologia sinótica: nesta área específica, o objetivo é estudar o tempo e o clima de determinada área com relação ao padrão circulatório predominante da atmosfera;</li>
                <li>Climatologia regional: tem como objetivo estudar apenas o clima em determinadas regiões;</li>
                <li>Climatologia física: tem como objetivo investigar o comportamento dos processos atmosféricos através de princípios físicos que englobam o regime de balanço hídrico da terra e da atmosfera e a energia global;</li>
                <li>Climatologia dinâmica: estuda o clima e o tempo com destaque para os movimentos atmosféricos;</li>
                <li>Climatologia histórica: é o estudo do clima através do tempo (aqui, no sentido histórico). Sua evolução, variações, padrões e interações;</li>
                <li>Climatologia aplicada: é a utilização dos conhecimentos climatológicos para a solução de problemas diários, ou práticos, da sociedade.</li>
            </section>
            <div className="flex flex-col items-center">
                <ButtonNavigate content={"climatologia"} discipline={"geografia"}/>
            </div>
            <Footer/>
        </main>
    )
}