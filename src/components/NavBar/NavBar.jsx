import React from "react";

import Cart from "./Cart/Cart";


const NavBar = () => {
    return (
        <div className= "navbar-container">
            <div className="navbar-top">
                <h1>WGames</h1>

                <ul className= "navbar-ul">
                    <li className= "navbar-ul-li">Rol</li>
                    <li className= "navbar-ul-li">Acción</li>
                    <li className= "navbar-ul-li">Aventura</li>
                    <li className= "navbar-ul-li">Deportes</li>
                </ul>

                <Cart />
            </div>

        </div>
    );
};

export default NavBar;