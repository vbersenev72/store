import { Button } from "@mui/material"
import { Link } from "react-router-dom"
import "./styles/header.css"



const Header = () => {

    return (
        <header className="header">
            <div className="header-logo">Dildo Shop</div>
            <div className="header-links">
                <Button variant="outline"><Link className="header-about" to={"/"}>About</Link></Button>
                <Button variant="outline"><Link className="header-cart" to={"/cart"}>Cart</Link></Button>
                <Button variant="outline"><Link className="header-products" to={"/products"}>Products</Link></Button>
            </div>
        </header>
    )
}

export default Header