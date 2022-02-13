import React from 'react';
import { Context } from "../GlobalContext"
import Style from "./UserLogin.module.css"
import Logo from "../assets/logo.png"
import { Link } from 'react-router-dom';
import ErroComponente from '../helper/Erro';

function UserLogin() {
    const [Email, setEmail] = React.useState("")
    const [Senha, setSenha] = React.useState("")
    const { Login, erro, Loading } = React.useContext(Context)

    function HandleLogin(e) {
        e.preventDefault()
        Login(Email, Senha)
    }

    return (
        <div className={`ContainerForm ${Style.LoginFormContainer}`}>
            <img src={Logo} alt='Logo' />
            <form onSubmit={HandleLogin}>
                <input type="text" placeholder='Email' onChange={({ target }) => { setEmail(target.value) }} />
                <div>
                    <input type="password" placeholder='Senha' onChange={({ target }) => { setSenha(target.value) }} />
                </div>
                {Loading ? <button disabled className='button'>Login</button> : <button type='submit' className='button'>Login</button>}
            </form >
            {erro && <ErroComponente Erro={erro} />}
            <Link to={"/login/criar"}>
                Criar Conta
            </Link>
        </div >
    );
}

export default UserLogin;
