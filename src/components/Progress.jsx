import { useEffect, useState } from "react";

export default function Progress({timer}) {
	const [tempoRestante, setTempoRestante] = useState(300);

	useEffect(() => {
		const cronometro = setInterval(() => {
			setTempoRestante((tempoAnterior) => {
			  if (tempoAnterior > 0) {
				return tempoAnterior - 1;
			  } else {
				clearInterval(cronometro);
				timer(false)
				return 0;
			  }
			});
		}, 1000);
		return () => {
			clearInterval(cronometro);
		};
	}, []);

	let porcentage = (100 * tempoRestante) / 300

	const minutos = Math.floor(tempoRestante / 60);
	const segundos = tempoRestante % 60;

	return (
		<div className="flex flex-col items-end gap-1">
			<div className="w-full h-4 rounded-full bg-[#EBEBEB] ">
				<div className={`h-4 bg-primary rounded-full transition-all`} style={{width: `${porcentage}%`}}/>
			</div>
			<span className="text-gray-500">
				<div>
					{minutos.toString().padStart(2, '0')}:
					{segundos.toString().padStart(2, '0')}
					{/* {porcentage} */}
				</div>
			</span>
		</div>
	);
}
