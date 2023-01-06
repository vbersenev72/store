import { Link } from "react-router-dom"


const Header = () => {

    return (
        <header className="flex justify-between bg-black mb-20">
            <div className="header-logo">Logo</div>
            <div className="header-links">
                <Link to={"/"}>About</Link>
                <Link to={"/cart"}>Cart</Link>
                <Link to={"/products"}>Products</Link>
            </div>

        </header>
    )
}

export default Header