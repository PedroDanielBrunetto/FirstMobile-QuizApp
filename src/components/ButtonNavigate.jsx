import { useNavigate } from "react-router-dom";

export default function ButtonNavigate({discipline, content}) {
    const navigate = useNavigate()
    return (
        <button 
            className="bg-primary mt-6 text-white p-2 w-64 text-center font-semibold rounded-xl uppercase mb-20" 
            onClick={() => navigate(`/quiz/${discipline}/content/${content}`)}
        >
            Faça os exercícios!
        </button>
    )
}
