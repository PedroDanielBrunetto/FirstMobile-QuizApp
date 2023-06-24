import Logo  from "../img/logo.svg"

export default function Header(){
    return(
        <header className="w-full py-5 flex justify-center bg-primary">
            <img src={Logo} alt="Logo" />
        </header>
    )
}