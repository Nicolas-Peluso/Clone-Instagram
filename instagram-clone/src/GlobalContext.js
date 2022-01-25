import React from 'react';
import { POST_USERLOGIN } from "./Services/Api"

export const Context = React.createContext()

function GlobalContext({ children }) {
    const [login, setLogin] = React.useState(false)

    async function Login(Email, Senha) {
        const { url, options } = POST_USERLOGIN({ Email, Senha })
        const request = await fetch(url, options)
        const response = await request.json()
        console.log(response)
    }

    return (
        <Context.Provider value={{ login, Login }}>
            {
                children
            }

        </Context.Provider>
    );
}

export default GlobalContext;
