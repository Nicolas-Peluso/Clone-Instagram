import React from 'react';
import Style from "./Header.module.css"
import LoGO from "./assets/logo.png"
import Home from "./assets/home.svg"

function Header() {
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
                    <img src={Home} alt='Home' />
                    <img src={Home} alt='Home' />
                    <img src={Home} alt='Home' />
                </div>
            </section>
        </header>
    );
}

export default Header;
