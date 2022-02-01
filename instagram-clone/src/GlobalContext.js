import React from 'react';
import { POST_USERLOGIN, POST_LoginWithToken, POST_CADASTRO } from "./Services/Api"

export const Context = React.createContext()

function GlobalContext({ children }) {
    const [login, setLogin] = React.useState(false)
    const [erro, setErro] = React.useState(false)
    const [Loading, setLoading] = React.useState(false)
    const [data, setData] = React.useState(false)

    React.useEffect(() => {
        async function UserLoginToke() {
            const token = localStorage.getItem("TOKEN")
            if (!!token === false) return
            try {
                setLoading(true)
                setErro(false)
                const { url, options } = POST_LoginWithToken(token)
                const request = await fetch(url, options)
                const response = await request.json()

                if (response.TOKEN === undefined) {
                    setErro(response.message)
                    setLoading(false)
                } else {
                    setLogin(true)
                    setData(response)
                }
            }
            catch (e) {
                setLoading(false)
                setLogin(false)
            } finally {
                setLoading(true)
            }
        }
        UserLoginToke()
    }, [])

    async function Login(Email, Senha) {
        try {
            setLoading(true)
            setErro(false)
            const { url, options } = POST_USERLOGIN({ Email, Senha })
            const request = await fetch(url, options)
            const response = await request.json()
            if (response.TOKEN === undefined) {
                setErro(response.message)
                setLoading(false)
            } else {
                setLogin(true)
                setData(response)
                localStorage.setItem("TOKEN", response.TOKEN)
            }
        } catch (e) {
            setLoading(false)
            setLogin(false)
        } finally {
            setLoading(false)
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
        <Context.Provider value={{ login, Login, erro, Loading, data, CADASTRO }}>
            {
                children
            }

        </Context.Provider>
    );
}

export default GlobalContext;
