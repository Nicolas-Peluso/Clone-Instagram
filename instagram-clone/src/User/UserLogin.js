import React from 'react';
import { Context } from "../GlobalContext"
import Style from "./UserLogin.module.css"
import Logo from "../assets/logo.png"
import { Link, useNavigate } from 'react-router-dom';

function UserLogin() {
    const [type, setType] = React.useState(false)
    const [Email, setEmail] = React.useState("")
    const [Senha, setSenha] = React.useState("")
    const { Login, erro, Loading, data, login } = React.useContext(Context)

    const navigate = useNavigate()

    function HandleLogin(e) {
        e.preventDefault()
        Login(Email, Senha)
    }
    if (login) return navigate("/conta")

    return (
        <div className={`ContainerForm ${Style.LoginFormContainer}`}>
            <img src={Logo} alt='Logo' />
            <form onSubmit={HandleLogin}>
                <input type="text" placeholder='Email' onChange={({ target }) => { setEmail(target.value) }} />
                <div>
                    <input type={type === false ? "password" : "text"} placeholder='Senha' onChange={({ target }) => { setSenha(target.value) }} />
                </div>
                {Loading ? <button disabled className='button'>Login</button> : <button type='submit' className='button'>Login</button>}
            </form >
            {login && navigate("/conta")}
            <Link to={"/login/criar"}>
                Criar Conta
            </Link>
        </div >
    );
}

export default UserLogin;
