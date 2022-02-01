import React from 'react';
import Style from "./LoginCreate.module.css"
import Logo from "../assets/logo.png"
import { POST_CADASTRO } from '../Services/Api';
import useFetch from '../Hooks/useFetch';
import { Context } from "../GlobalContext"
import { useNavigate } from 'react-router-dom';

function LoginCreate() {
    const [Nome, setNome] = React.useState("")
    const [Email, setEmail] = React.useState("")
    const [Senha, setSenha] = React.useState("")
    const [Avatar, setAvatar] = React.useState({})
    const [UserName, setUserName] = React.useState("")

    const { request, Loading, erro } = useFetch()
    const { Login, data } = React.useContext(Context)
    const navigate = useNavigate()

    async function handleSubmit(e) {
        e.preventDefault()
        const formData = new FormData()
        formData.append("Nome", Nome)
        formData.append("Email", Email)
        formData.append("Senha", Senha)
        formData.append("Avatar", Avatar.raw)
        formData.append("UserName", UserName)

        const { url, options } = POST_CADASTRO(formData)
        request(url, options)
        if (!erro) {
            setTimeout(() => {
                Login(Email, Senha)
                navigate("/conta")
            }, 1000)
        }
    }

    function handleImgChange({ target }) {
        setAvatar({
            preview: URL.createObjectURL(target.files[0]),
            raw: target.files[0]
        })
    }

    return (
        <div className={`ContainerForm ${Style.ContainerFormu}`}>
            <img src={Logo} alt="Logo" />
            <form onSubmit={handleSubmit} >
                <input type="text" onChange={(e) => setNome(e.target.value)} placeholder='Nome' />
                <input type="email" onChange={(e) => setEmail(e.target.value)} placeholder='Email' />
                <input type="password" onChange={(e) => setSenha(e.target.value)} placeholder='Senha' />
                <input type="file" onChange={handleImgChange} />
                <input type="text" onChange={(e) => setUserName(e.target.value)} placeholder='Node De Usuario' />
                {Loading ? <button type='submit' disabled className='button'>Cadastrar</button> : <button type='submit' className='button'>Cadastrar</button>}
                {erro && <p>algo deu Errado</p>}
            </form>
        </div>
    );
}

export default LoginCreate;
