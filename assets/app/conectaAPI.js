const endpointDaApi = "https://64b8efab79b7c9def6c04883.mockapi.io/api/v1/Portifolio__Forms-email";

export default async function enviaEmail (nome, email, assunto, mensagem) {
    const resposta = await fetch(endpointDaApi,{
        method: "POST",
        headers: {
            "Content-type":"application/json"
        },
        body: JSON.stringify({
            nome: nome,
            email: email,
            assunto: assunto,
            mensagem: mensagem,
        })  
    })

    if(!resposta.ok) {
        throw new Error ("Não foi possível cadastrar esse produto.")
    }

    email = await resposta.json ();
}
