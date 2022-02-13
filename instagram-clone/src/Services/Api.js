const Url = "http://localhost:4000"

export function Get_Postages() {
    return {
        url: Url + "/postagem/get",
        options: {
            method: "GET"
        }
    }
}

export function POST_USERLOGIN(body) {
    return {
        url: Url + "/Login",
        options: {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body)
        }
    }
}

export function POST_LoginWithToken(token) {
    return {
        url: Url + "/get/user",
        options: {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + token,
            },
        }
    }
}

export function POST_CADASTRO(formData) {
    return {
        url: Url + "/user/register",
        options: {
            method: "POST",
            body: formData
        }
    }
}

export function POST_PostagemEsspecifica(body) {
    return {
        url: Url + "/postagem/User",
        options: {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body)
        }
    }
}

export function POST_PostarPostegem(body, token) {
    return {
        url: Url + "/postagem",
        options: {
            method: "POST",
            headers: {
                Authorization: 'Bearer ' + token,
            },
            body: body
        }
    }
}

