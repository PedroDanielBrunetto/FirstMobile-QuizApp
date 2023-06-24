import Icon  from "../img/icon.svg";
import Curva from "../img/Curva.png";
import ImageStudentPage  from "../img/imageStudentPage.png";
import { useEffect } from "react";


export default function StudentPage() {

    useEffect(() => {
        const isAuthenticated = localStorage.getItem('isAuthenticated');
        if (isAuthenticated) {; 
            // vai pra página logada
        }
    }, [])

    function Entrar() {
        const rm = document.getElementById('rm').value
        const pw = document.getElementById('pw').value
        console.log(rm)

        if (rm === '1234' && pw === '123') {
            localStorage.setItem('isAuthenticated', true)
            window.location.href = './home';
            return true;
        }
        
        else {
            const errorElement = document.getElementById('error');
            errorElement.textContent = "RM ou senha incorreta";
        }

        return false;
    }

    return (
        <main className="bg-secundary absolute inset-0 flex flex-col items-center gap-14 font-Sora">
            <div className="mt-16">
                <img className="" src={Icon} alt="Icon" />
            </div>
            <p className="font-bold text-white">ALUNO</p>
            <div className="flex justify-center flex-col gap-5 z-20">
                <input id="rm" className="rounded-lg w-[300px] h-10 pl-2" type="number" placeholder="RM"/>
                <input id="pw" className="rounded-lg w-[300px] h-10 pl-2" type="password" placeholder="Senha"/>
            </div>
            <span id="error" className="text-white text-sm"></span>
            <button onClick={Entrar} className="bg-third w-[266px] z-20 text-white h-10 rounded-lg">ENTRAR</button>
            <img className="absolute bottom-0" src={ImageStudentPage} alt="Icon" />
            <img className="absolute bottom-0" src={Curva} alt="Curva" />
        </main>
    )
}