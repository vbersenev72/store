import { Button } from "@mui/material"
import { Link } from "react-router-dom"
import "./styles/header.css"



const Header = () => {

    return (
        <header className="header">
            <div className="header-logo">Dildo Shop</div>
            <div className="header-links">
                <Button variant="outline"><Link className="text-white" to={"/"}>About</Link></Button>
                <Button variant="outline"><Link className="text-white" to={"/cart"}>Cart</Link></Button>
                <Button variant="outline"><Link className="text-white" to={"/products"}>Products</Link></Button>
            </div>
        </header>
    )
}

export default Header