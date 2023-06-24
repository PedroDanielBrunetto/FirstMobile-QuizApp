import Footer from "../../components/Footer";
import Header from "../../components/Header";
import agua from "../../img/water_drop_FILL0_wght400_GRAD0_opsz48.svg";
import hidrico from "../../img/hidrico.png"
import ButtonNavigate from "../../components/ButtonNavigate";

export default function Recursos(){
    return(
        <main className="absolute inset-0">
            <Header/>
            <section className="p-6 flex gap-2 items-center">
                <img src={agua} alt="" />
                <h1 className="font-medium text-xl pl-3">Recursos hídricos</h1>
            </section>
            <section className="p-6 flex flex-col gap-2 items-center">
                <img src={hidrico} alt="" />
                <p>
                Os recursos hídricos são as águas que estão disponíveis para o uso humano, tanto para o consumo próprio quanto para fins econômicos. São reservas de água disponíveis na superfície, como rios e lagos, e no subterrâneo, a exemplo dos aquíferos. 
                </p>
                <p>De acordo com o Ministério das Relações Exteriores, os recursos hídricos vêm ganhando cada vez mais importância no cenário internacional devido à relevância crescente do manejo sustentável da água para o bem-estar das populações e para o desenvolvimento dos países.</p>
                <p>O Brasil detém 12% das reservas de água doce do Planeta. Mais da metade dos recursos hídricos da América do Sul estão no nosso país (53%). Grande parte das nossas fronteiras é definida por corpos d'água – são 83 rios fronteiriços e transfronteiriços, além de bacias hidrográficas e de aquíferos. As bacias de rios transfronteiriços ocupam 60% do território brasileiro. 

                </p>
                <p>
                A Constituição Federal (CF) de 1988 estabeleceu que a água é um bem público. Por isso, todas as águas pertencem à União ou aos Estados – incluído o Distrito Federal. Esse ponto da CF foi regulamentado pela chamada “Lei das Águas” Lei nº 9.433, de 1997, que criou a Política Nacional de Recursos Hídricos e instituiu o Sistema Nacional de Gerenciamento de Recursos Hídricos, baseando-se nos seguintes princípios:
                </p>
                <div className="mt-3">

                <li>A água é um bem de domínio público;</li>
                <li>A água é um recurso natural limitado, dotado de valor econômico;</li>
                <li>Em situações de escassez, o uso prioritário dos recursos hídricos é o consumo humano e a dessedentação de animais;</li>
                <li>A gestão dos recursos hídricos deve sempre proporcionar o uso múltiplo das águas;</li>
                <li>A bacia hidrográfica é a unidade territorial para implementação da Política Nacional de Recursos Hídricos e atuação do Sistema Nacional de Gerenciamento de Recursos Hídricos;</li>
                <li>A gestão dos recursos hídricos deve ser descentralizada e contar com a participação do Poder Público, dos usuários e das comunidades. </li>
                </div>
            </section>
            <div className="flex flex-col items-center">
                <ButtonNavigate content={"recursosHidricos"} discipline={"geografia"} />
            </div>
            <Footer/>
        </main>
    )
}