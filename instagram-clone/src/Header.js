import React from 'react';
import Style from "./Header.module.css"
import LoGO from "./assets/logo.png"
import Home from "./assets/home.svg"
import USer from "./assets/user.svg"
import { Link } from "react-router-dom"
import { Context } from "../src/GlobalContext"

function Header() {
    const { login, data } = React.useContext(Context)

    return (
        <header className={Style.header}>
            <section className={Style.Container}>
                <div className={Style.Logo}>
                    <img src={LoGO} alt='Logo instagram' />
                </div>
                <div className={Style.SearchBar}>
                    <input type="text" placeholder='Pesquisar' />
                </div>
                <div className={Style.NavBar}>
                    <Link to={"/"}>
                        <img src={Home} alt='Home' />
                    </Link>
                    <Link to={login ? "/conta" : "/login"}>
                        {login ? <img src={data.Avatar} alt='USer' className={Style.USerImg} /> : <img src={USer} alt='USer' />}
                    </Link>

                </div>
            </section>
        </header>
    );
}

export default Header;
