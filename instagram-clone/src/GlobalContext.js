import React from 'react';
import { POST_USERLOGIN, POST_LoginWithToken, POST_CADASTRO } from "./Services/Api"

export const Context = React.createContext()

function GlobalContext({ children }) {
    const [login, setLogin] = React.useState(false)
    const [erro, setErro] = React.useState(false)
    const [Loading, setLoading] = React.useState(false)
    const [data, setData] = React.useState(false)


    React.useEffect(() => {
        async function UserLoginToken() {
            const token = localStorage.getItem("TOKEN")
            if (!!token === false) return
            let request;
            let response;
            try {
                setLoading(true)
                setErro(false)
                const { url, options } = POST_LoginWithToken(token)
                request = await fetch(url, options)
                response = await request.json()
                if (response.TOKEN === undefined) throw new Error(response.message)

                localStorage.removeItem("TOKEN")
                localStorage.setItem("TOKEN", response.TOKEN)
                setLogin(true)
            }
            catch (e) {
                setErro(`${e}`)
                setLoading(false)
                setLogin(false)
            } finally {
                setLoading(false)
                setData(response)
            }
        }
        UserLoginToken()
    }, [])

    function Logout() {
        setLogin(false)
        setErro(null)
        setLoading(null)
        localStorage.removeItem("TOKEN")
    }

    async function Login(Email, Senha) {
        let request;
        let response;
        try {
            setLoading(true)
            setErro(false)
            const { url, options } = POST_USERLOGIN({ Email, Senha })
            request = await fetch(url, options)
            response = await request.json()
            if (response.TOKEN === undefined) throw new Error(response.message)

            localStorage.removeItem("TOKEN")
            localStorage.setItem("TOKEN", response.TOKEN)
            setLogin(true)


        } catch (e) {
            setErro(`${e}`)
            setLoading(false)
            setLogin(false)
        } finally {
            setLoading(false)
            setData(response)
        }
    }

    async function CADASTRO(FormData) {
        try {
            const { url, options } = POST_CADASTRO(FormData)
            setLoading(true)
            setErro(false)

            let request = await fetch(url, options)
            let response = await request.json()

            if (request.status !== 200) throw new Error("Algo deu errado na requisição")
            setData(response)
        }
        catch (e) {
            setErro(e)
        } finally {
            setLoading(false)
        }
    }

    return (
        <Context.Provider value={{ login, Login, erro, Loading, data, CADASTRO, setErro, Logout }}>
            {
                children
            }

        </Context.Provider>
    );
}

export default GlobalContext;
