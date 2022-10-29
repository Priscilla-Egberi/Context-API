import {Container} from "react-bootstrap"
import {FaShoppingCart} from "react-icons/fa"
import {Link} from "react-router-dom"
import CreatedContext from "../CardContext"
import {useContext} from "react"

export default function Nav(){
    const {items} = useContext(CreatedContext)
    return(
        <>
            <nav className="navbar bg-info  text-dark">
                <Container>
                    <Link to={"/"} className="navbrand fw-bold h3">Wears</Link>
                    <Link to={"/checkout"} className="nav mx-auto"><FaShoppingCart /> <span className="fw-bold">{items.length}</span></Link>
                </Container>
            </nav>
        </>
    )
}