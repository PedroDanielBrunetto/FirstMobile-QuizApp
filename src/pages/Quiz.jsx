import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Progress from "../components/Progress";
import { useNavigate, useParams } from "react-router-dom";

const questions =
{
	matematica: {
		grandezas: [
			{
				text: "Uma empresa de telefonia oferece dois tipos de planos: Plano Plus: 3,5 GB de internet, mais ligações ilimitadas para telefones fixos e celulares. Plano Econômico: 3,5 GB de internet, mais 50 min de ligações para telefones fixos e celulares. O plano Plus custa por mês R$ 65,90, já o plano Econômico custa R$ 10,80, sendo que é cobrado R$ 1,90 por minuto quando o cliente exceder os 50 min incluídos no plano. Considerando esses dois planos, usando quantos minutos de ligações por mês, o plano Plus passa a ser mais econômico?",
				options: ["30 min", "50 min", "60 min", "80 min"],
				rightOption: 3
			},
			{
				text: "Um carro percorre 400 km com 50 litros de combustível. Se ele continuar a mesma velocidade, quantos litros de combustível serão necessários para percorrer 800 km?",
				options: ["50 litros", "80 litros", "100 litros", "160 litros"],
				rightOption: 2
			},
			{
				text: "Uma empresa de entrega cobra R$ 25,00 por uma distância de 10 km percorridos. Qual seria o valor cobrado para percorrer uma distância de 30 km?",
				options: ["R$ 25,00", "R$ 35,00", "R$ 75,00", "R$ 90,00"],
				rightOption: 3
			}
		],
		probabilidade: [
			{
				text: "Uma urna contém 4 bolas vermelhas, 3 bolas azuis e 5 bolas verdes. Qual é a probabilidade de escolher aleatoriamente uma bola verde?",
				options: ["1/2", "3/12", "5/12", "1/3"],
				rightOption: 2
			},
			{
				text: "Um dado honesto de seis faces é lançado. Qual é a probabilidade de obter um número par?",
				options: ["1/2", "1/3", "1/6", "2/3"],
				rightOption: 0
			},
			{
				text: "Uma caixa contém 10 chocolates, dos quais 3 são amargos e 7 são doces. Se você escolher aleatoriamente um chocolate, qual é a probabilidade de ser amargo?",
				options: ["1/2", "3/10", "7/10", "3/7"],
				rightOption: 1
			},
		],
		funcoes: [
			{
				text: "Dada a função f(x) = 2x + 3, qual é o valor de f(4)?",
				options: ["5", "8", "11", "14"],
				rightOption: 2
			},
			{
				text: "Considere a função g(x) = x² - 4x + 3. Qual é o valor de g(2)?",
				options: ["-1", "0", "1", "2"],
				rightOption: 0
			},
			{
				text: "A função h(x) = 3x - 2 é uma função linear ou quadrática?",
				options: ["Linear", "Quadrática"],
				rightOption: 0
			},
		]
	},
	literatura: {
		barroco: [
			{
				text: "Qual foi o período predominante do estilo Barroco?",
				options: ["Renascimento", "Idade Média", "Idade Moderna", "Século XVII"],
				rightOption: 3
			},
			{
				text: "Quais são algumas características comuns da arquitetura Barroca?",
				options: ["Linhas retas e simetria perfeita", "Simplicidade e minimalismo", "Detalhes ornamentados e grandiosos", "Uso predominante de vidro e aço"],
				rightOption: 2
			},
			{
				text: "Quais são alguns dos artistas famosos do período Barroco?",
				options: ["Leonardo da Vinci e Michelangelo", "Rembrandt e Vermeer", "Pablo Picasso e Salvador Dalí", "Vincent van Gogh e Claude Monet"],
				rightOption: 1
			},
			{
				text: "Qual foi o nome do principal pintor brasileiro do período Barroco, conhecido por suas obras religiosas e influência no estilo barroco mineiro?",
				options: ["Candido Portinari", "Victor Meirelles", "Aleijadinho", "Anita Malfatti"],
				rightOption: 2
			}
		],
		// figuras de linguagem
		figuras: [
			{
				text: "Qual figura de linguagem está presente na frase: 'A noite estava tão escura que parecia engolir tudo ao seu redor'?",
				options: ["Metáfora", "Metonímia", "Personificação", "Hipérbole"],
				rightOption: 2
			},
			{
				text: "Identifique a figura de linguagem na seguinte frase: 'O sorriso dela iluminava a sala inteira'.",
				options: ["Metonímia", "Comparação", "Personificação", "Ironia"],
				rightOption: 0
			},
			{
				text: "Qual figura de linguagem está presente na seguinte expressão: 'Aquele carro é uma máquina devoradora de asfalto'?",
				options: ["Metáfora", "Metonímia", "Catacrese", "Ironia"],
				rightOption: 0
			},
		],
		trovadorismo: [
			{
				text: "O trovadorismo foi um movimento literário que se desenvolveu na Idade Média, durante os séculos XII e XIII. Caracterizado pela produção poética e musical, o trovadorismo teve grande influência na cultura medieval. Suas composições geralmente abordavam temas como o amor cortês e as relações entre cavaleiros e damas. Qual das opções a seguir melhor descreve a linguagem utilizada pelos trovadores?",
				options: ["Linguagem popular e coloquial", "Linguagem técnica e científica", "Linguagem erudita e culta", "Linguagem estrangeira e exótica"],
				rightOption: 2
			},
			{
				text: "Um dos principais gêneros literários do trovadorismo é a cantiga de amor, que expressa o amor idealizado do trovador por uma dama inatingível. Qual é a principal característica da cantiga de amor?",
				options: ["Apresenta um tom sarcástico e irônico", "Valoriza a independência e autonomia feminina", "Demonstra um amor platônico e idealizado", "Promove a igualdade de gênero"],
				rightOption: 2
			},
			{
				text: "Durante o trovadorismo, o trovador desempenhava um papel importante na sociedade medieval. Qual era a função do trovador?",
				options: ["Era responsável por declamar poesias religiosas nas igrejas", "Atuava como poeta da corte, compondo para os nobres", "Era um artista ambulante que se apresentava nas ruas", "Desenvolvia pesquisas acadêmicas na área da literatura"],
				rightOption: 1
			},
		]
	},
	quimica: {
		tabela: [
			{
				text: "A tabela periódica é uma disposição sistemática dos elementos químicos, organizados de acordo com suas propriedades e estrutura atômica. Qual das opções a seguir descreve corretamente a distribuição dos elementos na tabela periódica?",
				options: ["Dispostos em ordem alfabética", "Dispostos em ordem crescente de massa atômica", "Dispostos em ordem decrescente de eletronegatividade", "Dispostos em ordem crescente de número atômico"],
				rightOption: 3
			},
			{
				text: "Os elementos na tabela periódica são agrupados em diferentes blocos e períodos. O bloco s é composto por elementos que possuem os elétrons mais externos localizados em orbitais s. Qual das opções a seguir representa um elemento do bloco s?",
				options: ["Oxigênio (O)", "Magnésio (Mg)", "Nitrogênio (N)", "Cloro (Cl)"],
				rightOption: 1
			},
			{
				text: "A tabela periódica também apresenta grupos ou famílias de elementos que possuem propriedades químicas semelhantes. O grupo 17 é conhecido como halogênios e é composto por elementos altamente reativos. Qual dos elementos a seguir pertence ao grupo dos halogênios?",
				options: ["Hidrogênio (H)", "Oxigênio (O)", "Flúor (F)", "Cálcio (Ca)"],
				rightOption: 2
			},
		],
		ligacoes: [
			{
				text: "As ligações químicas são formas de união entre átomos para formar moléculas ou compostos. Qual das opções a seguir descreve corretamente a ligação iônica?",
				options: ["Compartilhamento de elétrons entre átomos", "Transferência de elétrons de um átomo para outro", "Ligação por forças de van der Waals", "Ligação por forças dipolo-dipolo"],
				rightOption: 1
			},
			{
				text: "A ligação covalente ocorre quando dois átomos compartilham elétrons para formar uma molécula. Qual das opções a seguir representa uma ligação covalente não polar?",
				options: ["HCl", "NaCl", "H2O", "NH3"],
				rightOption: 2
			},
			{
				text: "As ligações metálicas são caracterizadas pelo compartilhamento de elétrons entre átomos metálicos. Essa ligação resulta em propriedades específicas, como a condução de eletricidade e a maleabilidade. Qual das opções a seguir é um exemplo de ligação metálica?",
				options: ["NaCl", "H2O", "Fe", "CO2"],
				rightOption: 2
			},
		],
		materia: [
			{
				text: "A matéria é tudo que possui massa e ocupa espaço. Qual das opções a seguir melhor descreve a diferença entre substância e mistura?",
				options: ["Substância é uma forma de matéria pura, enquanto mistura é a combinação de duas ou mais substâncias", "Substância é uma mistura homogênea, enquanto mistura é uma substância pura", "Substância é composta por átomos, enquanto mistura é composta por moléculas", "Substância é sólida, enquanto mistura é líquida"],
				rightOption: 0
			},
			{
				text: "A matéria pode ser encontrada em diferentes estados físicos: sólido, líquido e gasoso. Qual das opções a seguir representa um exemplo de mudança de estado físico?",
				options: ["Ebulição da água", "Combustão da madeira", "Decomposição de um composto químico", "Reação ácido-base"],
				rightOption: 0
			},
			{
				text: "A matéria é composta por partículas subatômicas. Qual das opções a seguir representa uma partícula subatômica com carga negativa?",
				options: ["Próton", "Nêutron", "Elétron", "Íon"],
				rightOption: 2
			},
		]
	},
	geografia: {
		climatologia: [
			{
				text: "A climatologia é o ramo da ciência que estuda o clima e seus padrões de variação ao longo do tempo. Qual das opções a seguir melhor descreve a diferença entre clima e tempo?",
				options: ["Clima refere-se às condições atmosféricas em um curto período de tempo, enquanto tempo refere-se às médias das condições atmosféricas ao longo do ano", "Clima refere-se às condições atmosféricas em uma região específica, enquanto tempo refere-se às condições atmosféricas em um curto período de tempo", "Clima refere-se às condições atmosféricas em um curto período de tempo, enquanto tempo refere-se às médias das condições atmosféricas em uma região específica", "Clima refere-se às condições atmosféricas em uma região específica, enquanto tempo refere-se às condições atmosféricas em um curto período de tempo"],
				rightOption: 2
			},
			{
				text: "Um dos fatores determinantes do clima de uma região é a latitude. Qual das opções a seguir representa uma característica climática associada a regiões de baixa latitude?",
				options: ["Baixa amplitude térmica", "Elevada precipitação pluviométrica", "Longos períodos de frio intenso", "Presença de estações bem definidas"],
				rightOption: 1
			},
			{
				text: "A climatologia estuda também os fenômenos climáticos extremos. Qual das opções a seguir representa um exemplo de fenômeno climático extremo?",
				options: ["Chuvas regulares no outono", "Temperaturas amenas na primavera", "Seca prolongada em uma região", "Ventos suaves durante o verão"],
				rightOption: 2
			}
		],
		recursosHidricos: [
			{
				text: "A região Norte do Brasil é conhecida por sua abundância de recursos hídricos, abrigando uma grande quantidade de rios e bacias hidrográficas. De acordo com dados do Instituto Brasileiro de Geografia e Estatística (IBGE), qual é o principal rio da região Norte?",
				options: ["Rio São Francisco", "Rio Tietê", "Rio Amazonas", "Rio Paraná"],
				rightOption: 2
			},
			{
				text: "Além do Rio Amazonas, a região Norte possui outros importantes rios e sistemas de água doce. Qual das opções a seguir representa um dos principais rios da região?",
				options: ["Rio Negro", "Rio de Janeiro", "Rio Sena", "Rio Mississipi"],
				rightOption: 0
			},
			{
				text: "Os recursos hídricos na região Norte desempenham um papel fundamental na economia e ecossistemas locais. Além dos rios, a região é caracterizada por outros tipos de recursos hídricos. Qual das opções a seguir é um exemplo de recurso hídrico comum na região Norte?",
				options: ["Lagos", "Vulcões", "Desertos", "Montanhas"],
				rightOption: 0
			},
		],
		geoBrasil: [
			{
				text: "O Brasil é o maior país da América do Sul em área territorial. Qual é a extensão territorial aproximada do Brasil?",
				options: ["2 milhões de km²", "5 milhões de km²", "8 milhões de km²", "11 milhões de km²"],
				rightOption: 2
			},
			{
				text: "O Brasil possui uma diversidade de biomas, com destaque para a Amazônia. Qual é o bioma que predomina na região sul do país?",
				options: ["Cerrado", "Pantanal", "Mata Atlântica", "Pampa"],
				rightOption: 3
			},
			{
				text: "O Brasil faz fronteira com diversos países sul-americanos. Qual dos países a seguir NÃO faz fronteira com o Brasil?",
				options: ["Argentina", "Bolívia", "Uruguai", "Colômbia"],
				rightOption: 3
			},
		]
	}

}

export default function Quiz() {
	let [hits, setHits] = useState(0)
	let [errors, setErrors] = useState(0)
	const [questionNumber, setQuestionNumber] = useState(0)
	const { discipline, content } = useParams()
	const [timer, setTimer] = useState(true)

	function handleOption(option) {
		console.log(questions[discipline][content][questionNumber]);
		console.log(option == questions[discipline][content][questionNumber].rightOption);
		option == questions[discipline][content][questionNumber].rightOption
			? setHits(++hits)
			: setErrors(++errors)

		if (questionNumber == 2) {
			console.log(`FIM: acertos: ${hits}, erros: ${errors}`);
			setTimer(false)
			return
		}
		setQuestionNumber(questionNumber + 1)

	}

	const navigate = useNavigate()

	return (
		<main className="absolute inset-0">
			<Header />

			<section className="p-6">
				{
					timer
						? (
							<>
								<Progress timer={setTimer} />

								<section className="flex flex-col gap-6">
									<h3 className="text-2xl font-semibold">Questão {questionNumber + 1}</h3>
									{
										<>
											<div>
												<p className="leading-relaxed">
													{questions[discipline][content][questionNumber].text}
												</p>
											</div>
											<div className="grid grid-cols-2 grid-rows-2 gap-3 mb-20">
												{
													questions[discipline][content][questionNumber].options.map((option, i) => {
														//console.log(questions[discipline][content][0])
														return (
															<>
																{/* <input type="radio" name="option" id={`op${i}`} className="hidden input-option" /> */}
																<label
																	htmlFor={`op${i}`}
																	key={i}
																	className="border border-primary rounded-lg p-2 flex justify-center items-center text-center focus:bg-purple-300 hover:bg-purple-300"
																	onClick={() => handleOption(i)}
																>
																	{option}
																</label>
															</>
														)
													})
												}
											</div>
										</>
									}

								</section>
							</>
						)
						: (
							<div>
								<h3 className="text-2xl font-semibold mb-4">Resultado</h3>

								<div className="flex w-full justify-center gap-6">
									<div className="border border-primary rounded-lg bg-[#F1EFFF] px-3 py-1">Acertos: {hits}</div>
									<div className="border border-primary rounded-lg bg-[#F1EFFF] px-3 py-1">Erros: {errors}</div>
								</div>

								<div className="flex w-full justify-between gap-6 mt-10 md:justify-center">
									<button className="bg-[#6050DE] text-white rounded-lg py-1 px-3" onClick={() => window.location.reload()}>Tentar novamente</button>
									<button className="bg-[#6050DE] text-white rounded-lg py-1 px-3" onClick={() => navigate("/home")}>Menu principal</button>
								</div>
							</div>
						)
				}
			</section>

			<Footer />
		</main>
	);
}
