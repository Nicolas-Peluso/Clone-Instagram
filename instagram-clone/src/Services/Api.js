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
            Headers: {
                "Content-Type": "Application.json"
            },
            body: JSON.stringify(body)
        }
    }
}

