import { BookBookmark, House } from "@phosphor-icons/react";
import { useNavigate } from "react-router"

export default function Footer(){
    const navigate = useNavigate()
    return(
        <footer className="py-2 w-full flex justify-center gap-16 bg-primary fixed bottom-0">
            <House size={24} color={"#fff"} weight="bold" onClick={()=>navigate("/home")}/>
            <BookBookmark size={24} color={"#fff"} weight="bold"/>
        </footer>
    )
}