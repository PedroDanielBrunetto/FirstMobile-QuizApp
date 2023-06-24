import Footer from "../../components/Footer";
import Header from "../../components/Header";
import probabilidades from "../../img/probabilidade.svg";
import equacao from "../../img/probabilidade.png";
import evento from "../../img/evento.png";
import ButtonNavigate from "../../components/ButtonNavigate";

export default function probabilidade() {
    return (
        <main className="absolute inset-0">
            <Header />
            <section className="p-6 flex gap-2 items-center">
                <img src={probabilidades} alt="" />
                <h1 className="font-medium text-xl pl-3">Probabilidade</h1>
            </section>
            <section className="p-6 flex flex-col gap-2 items-center pb-16">
                <p>
                    Uma grandeza é definida como algo que pode ser medido ou calculado, seja velocidade, área ou volume de um material, e é útil para comparar com outras medidas, muitas vezes de mesma unidade, representando uma razão.
                </p>
                <p>
                    A proporção é uma relação de igualdade entre razões e, assim, apresenta a comparação de duas grandezas em diferentes situações.
                </p>

                <p>
                    <p className="text-xl mt-2">Cálculo da probabilidade:</p><br />
                    Seja E um evento qualquer no espaço amostral Ω. A probabilidade do evento A ocorrer é a razão entre o número de resultados favoráveis e o número de resultados possíveis. Em outras palavras, é o número de elementos do evento dividido pelo número de elementos do espaço amostral a que ele pertence.
                </p>
                <img src={equacao} alt="" />
                <p>
                    <p className="text-xl mt-2">Observações:</p><br />

                    <li>O número de elementos do evento sempre é menor ou igual ao número de elementos do espaço amostral e maior ou igual a zero. Por isso, o resultado dessa divisão sempre está no intervalo<br /> 0 ≤ P(A) ≤ 1;</li>
                    <li>Quando é necessário usar porcentagem, devemos multiplicar o resultado dessa divisão por 100 ou usar regra de três;</li>
                    <li>A probabilidade de um evento não acontecer é determinada por:</li>

                </p>
                <img src={evento} alt="" />
                <div className="flex flex-col items-center">
                    <ButtonNavigate content={"probabilidade"} discipline={"matematica"} />
                </div>
            </section>
            <Footer />
        </main>
    )
}