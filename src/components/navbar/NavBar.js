import logo from "./logo.png";
import cart from "./cart.png";
import hamburger from "./hamburger.svg";
import "./navbar.css";
import close from "./close.svg";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

export default function NavBar() {

    let [menuExpanded, setMenuExpand] = useState(false);
    let {cartItems} = useContext(CartContext); //cartItems is a Map object

    function menuOpenClose() {
        setMenuExpand(state => !state);
    }

    return (
        <div className="navbar-lg navbar">
            <img src={menuExpanded ? close : hamburger} className="hamburger" onClick={menuOpenClose}></img>
            <Link to="/"><img src={logo} className="logo"></img></Link>
            <div className="flex">
                <ul className={`menubar-lg menubar ${menuExpanded ? "visible" : "invisible"}`}>
                    <li className="menu-item-lg menu-item"><Link to="/menu">Menu</Link></li>
                    <li className="menu-item-lg menu-item"><Link to="/orders">Offers</Link></li>
                    <li className="menu-item-lg menu-item">Register</li>
                    <li className="menu-item-lg menu-item">Login</li>
                </ul>

                <Link to="/cart" className="cart">
                    <span>{cartItems.size}</span>
                    <img src={cart}></img>
                </Link>

            </div>
        </div>
    );
}