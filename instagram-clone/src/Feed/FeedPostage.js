import React from 'react';
import Style from './FeedPOstage.module.css';
import { Get_Postages } from "../Services/Api"

function FeedPostage() {
    const [Postagens, SetPostagens] = React.useState()

    React.useEffect(() => {
        async function GETPostage() {
            const { url, options } = Get_Postages()
            const request = await fetch(url, options);
            const response = await request.json()
            SetPostagens(response.Postagem)
        }
        GETPostage()
    }, [])

    return (
        <>
            {
                Postagens && Postagens.map(postagem => (
                    <div className={Style.Container} key={postagem.UserPoster[0]["avatar"]}>
                        <div className={Style.ContainerAvatar}>
                            <img src={postagem.UserPoster[0]["avatar"]} alt='Avatar' className={Style.Avatar} />
                            <p>{postagem.UserPoster[0]["Nome"]}</p>
                        </div>
                        <img src={postagem.Foto} alt='FOto' />
                        <p>{postagem.UserPoster[0]["Nome"]} {postagem.Descrição}</p>
                    </div>
                ))
            }
        </>
    );
}

export default FeedPostage;
