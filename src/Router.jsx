import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Quiz from "./pages/Quiz"
import StudentPage from "./pages/StudentPage";
import Geografia from "./pages/Geografia";
import Matematica from "./pages/Matematica";
import Literatura from "./pages/Literatura";
import Quimica from "./pages/Quimica";
import Grandezas from "./apostila/matematica/grandezas";
import Probabilidade from "./apostila/matematica/probabilidade";
import Funcao from "./apostila/matematica/funcao";
import Barroco from "./apostila/literatura/barroco";
import Figuras from "./apostila/literatura/figuras";
import Trovadorismo from "./apostila/literatura/trovadorismo";
import Tabelaperiodica from "./apostila/quimica/tableperiodic";
import Ligacoesquimicas from "./apostila/quimica/ligacoesqui";
import Materia from "./apostila/quimica/materia";
import Climatologia from "./apostila/geografia/climatologia";
import Recursos from "./apostila/geografia/recursos";
import Geobr from "./apostila/geografia/geobr";


export default function Router(){
    return(
        <Routes>
            <Route path="/quiz/:discipline/content/:content" element={<Quiz/>}/>
            <Route path="/home" element={<Home/>}/>
            <Route path="/" element={<StudentPage/>}/>
            <Route path="/geografia" element={<Geografia/>}/>
            <Route path="/matematica" element={<Matematica/>}/>
            <Route path="/quimica" element={<Quimica/>}/>
            <Route path="/literatura" element={<Literatura/>}/>
            <Route path="/grandezas" element={<Grandezas/>}/>
            <Route path="/probabilidade" element={<Probabilidade/>}/>
            <Route path="/funcao" element={<Funcao/>}/>
            <Route path="/barroco" element={<Barroco/>}/>
            <Route path="/figuras" element={<Figuras/>}/>
            <Route path="/trovadorismo" element={<Trovadorismo/>}/>
            <Route path="/tabelaperiodica" element={<Tabelaperiodica/>}/>
            <Route path="/ligacoesquimicas" element={<Ligacoesquimicas/>}/>
            <Route path="/materia" element={<Materia/>}/>
            <Route path="/climatologia" element={<Climatologia/>}/>
            <Route path="/recursos" element={<Recursos/>}/>
            <Route path="/geobr" element={<Geobr/>}/>
        </Routes>
    )
}