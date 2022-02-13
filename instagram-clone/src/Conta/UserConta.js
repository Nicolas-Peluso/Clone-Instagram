import React from 'react';
import Style from "./UserConta.module.css"
import { POST_PostagemEsspecifica } from '../Services/Api';

import { Context } from '../GlobalContext';

function UserConta() {
    const { login, data } = React.useContext(Context)
    const [Postages, setPostages] = React.useState()

    React.useEffect(() => {
        async function POST_USERPOSTAGES() {
            if (!!data === false) return null
            const { url, options } = POST_PostagemEsspecifica({ Author: data.UserName })
            try {
                let request = await fetch(url, options)
                let response = await request.json()

                if (response.Postagens === undefined) throw new Error(response.message)
                setPostages(response)
            } catch (e) {
                console.log(e)
            }
        } POST_USERPOSTAGES()
    }, [data])

    return (
        <div className={Style.ContainerUser}>
            <div className={Style.UserPainel}>
                <div className={Style.ProfilePhoto}>
                    <img src={data.Avatar} alt="Foto do perfil do usuario" />
                </div>
                <div className={Style.ProfileInformation}>
                    <h1>{data.UserName}</h1>
                </div>
            </div>
            <div className={Style.ContainerGridFotos}>
                {
                    Postages && Postages.Postagens.map(image => (
                        <img src={image.Foto} alt="USerFoto" key={image.IdPostagem} />
                    ))
                }
            </div>
        </div>
    )
}

export default UserConta;
