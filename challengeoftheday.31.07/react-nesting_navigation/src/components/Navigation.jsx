import { Link } from "./Link";
import {Header} from "../components/Header"
import { Logo } from "./Logo";


export function Navigation(){
    return(
        <Header>
        <Logo/>
        <Navigation>
            <Link href="#home">Home</Link>
            <Link href="#about">About</Link>
            <Link href="#impressum">Impressum</Link>
        </Navigation>
        </Header>
    )
        
    
}

