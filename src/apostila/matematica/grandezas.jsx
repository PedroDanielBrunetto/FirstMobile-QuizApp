import ButtonNavigate from "../../components/ButtonNavigate";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import grandeza from "../../img/grandezas.svg";
import equacao from "../../img/image 30.jpg";

export default function grandezas(){
    return(
        <main className="absolute inset-0">
            <Header/>
            <section className="p-6 flex gap-2 items-center">
                <img src={grandeza} alt="" />
                <h1 className="font-medium text-xl pl-3">Grandezas proporcionais</h1>
            </section>
            <section className="p-6 flex flex-col gap-2 items-center">
                <p>
                Uma grandeza é definida como algo que pode ser medido ou calculado, seja velocidade, área ou volume de um material, e é útil para comparar com outras medidas, muitas vezes de mesma unidade, representando uma razão.
                </p>
                <p>
                A proporção é uma relação de igualdade entre razões e, assim, apresenta a comparação de duas grandezas em diferentes situações.
                </p>
                <img src={equacao} alt="" />
                <p>
                A igualdade entre a, b, c e d é lida da seguinte forma: a está para b, assim como c está para d.
A relação entre as grandezas podem ocorrer de maneira diretamente ou inversamente proporcional.
                </p>
            </section>
            <div className="flex flex-col items-center">
                <ButtonNavigate content={"grandezas"} discipline={"matematica"}/>
            </div>
            <Footer/>
        </main>
    )
}