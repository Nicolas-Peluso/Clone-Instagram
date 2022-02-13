import React from 'react'
import Style from "./UserPhotoPost.module.css"
import { Context } from "../GlobalContext.js"
import { POST_PostarPostegem } from "../Services/Api"
import { Navigate } from "react-router-dom"

function UserPhotoPost() {
  const [Descricao, setDescricao] = React.useState("")
  const [Avatar, setAvatar] = React.useState("")
  const { data, login } = React.useContext(Context)

  async function handleSubmit(e) {
    e.preventDefault()
    const Form = new FormData()
    Form.append("foto", Avatar.raw)
    Form.append("Descricao", Descricao)
    Form.append("Id", data.Id)

    const { url, options } = POST_PostarPostegem(Form, data.TOKEN)
    try {
      let request = await fetch(url, options)
      let response = await request.json()

      if (response.sucess === undefined) throw new Error(response.message)

    } catch (e) {
      console.log(e)
    }
  }

  function handleImgChange({ target }) {
    setAvatar({
      raw: target.files[0]
    })
  }

  if (login === false) return <Navigate to="/login" />

  return (
    <div className={`ContainerForm ${Style.Form}`}>
      <form onSubmit={handleSubmit}>
        <input type='file' onChange={handleImgChange} />
        <input type='text' onChange={({ target }) => setDescricao(target.value)} placeholder="Descirção" />
        <button type='submit' className='button'>Postar</button>
      </form>
    </div>
  )
}

export default UserPhotoPost