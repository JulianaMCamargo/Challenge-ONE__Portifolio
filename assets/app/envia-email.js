import enviaEmail from "./assets/app/conectaAPI.js";

const formulario = document.querySelector("[data-formulario]");

 async function enviaDadosDoEmail(e){
    e.preventDefault();

        const nome = e.target.elements["nome"].value;
        const email = e.target.elements["email"].value;
        const assunto = e.target.elements["assunto"].value;
        const mensagem = e.target.elements["mensagem"].value;

    try{
        await enviaEmail(nome, email, assunto, mensagem);

        window.location.href = "index.html";
    }catch (e){
        alert(e);
    }
}

formulario.addEventListener("submit", e => enviaDadosDoEmail (e));