import React from "react";

function ErroComponente({ Erro }) {
    React.useEffect(() => {
        console.log(Erro)
    }, [Erro])
    return <p style={{ color: "red" }}>{Erro}</p>

}

export default ErroComponente