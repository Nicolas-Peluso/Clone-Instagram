import React from 'react';
import { Context } from "../GlobalContext"
import Style from "./UserLogin.module.css"
import Logo from "../assets/logo.png"

function UserLogin() {
    const [type, setType] = React.useState(false)
    const [Email, setEmail] = React.useState("")
    const [Senha, setSenha] = React.useState("")
    const { Login } = React.useContext(Context)

    function HandleLogin(e) {
        e.preventDefault()
        Login(Email, Senha)
    }

    return (
        <div className={Style.LoginFormContainer}>
            <img src={Logo} alt='Logo' />
            <form onSubmit={HandleLogin}>
                <input type="text" placeholder='Email' onChange={({ target }) => { setEmail(target.value) }} />
                <div>
                    <input type={type === false ? "password" : "text"} placeholder='Senha' onChange={({ target }) => { setSenha(target.value) }} />
                </div>
                <button type='submit'>Login</button>
            </form >
        </div >
    );
}

export default UserLogin;
