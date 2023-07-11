const camposDoFormulario = document.querySelectorAll("[required]"); //chamei todos os elementos que tinham a condição required
const formulario = document.querySelector("[data-formulario]");

formulario.addEventListener("submit", (e) => {
    e.preventDefault();

    const listaRespostas = {
        "nome": e.target.elements["nome"].value,
        "email": e.target.elements["email"].value,
        "assunto": e.target.elements["assunto"].value,
        "mensagem": e.target.elements["mensagem"].value
    }

    localStorage.setItem("contatos", JSON.stringify(listaRespostas));

    window.location.href = "index.html";
})

camposDoFormulario.forEach((campo) => {
    campo.addEventListener("blur", () => verificaCampo(campo)); //pq criou uma arrow function ao inves de só chamar a funçao?
    campo.addEventListener("invalid", evento => evento.preventDefault()); //mesmo que qualquer elemento seja inválido ele não vai apresentar a mensagem de erro automática
})

const tipoDeErros = [ //criei um array com os tipos de erros que podem aparecer no nosso formulário
    "valueMissing",
    "patternMismatch",
    "typeMismatch",
    "tooShort",
    "tooLong"
]

const mensagens = { //depois foram criadas mensagens personalizadas para cada tipo de erro em cada campo
    nome: {
        valueMissing: "O campo do nome não deve ficar em branco ou vazio.",
        patternMismatch: "Por favor, preencha um nome válido.",
        tooShort: "Por favor, preencha um nome válido."
    },
    email: {
        valueMissing: "O campo de e-mail não pode estar vazio.",
        typeMismatch: "Por favor, preencha um email válido.",
        tooShort: "Por favor, preencha um e-mail válido."
    },
    assunto: {
        valueMissing: "O campo de assunto não pode estar vazio.",
        patternMismatch: "Por favor, preencha um assunto válido.",
        tooShort: "O campo de assunto não tem caracteres suficientes.",
        tooLong: "O campo de assunto deve conter no máximo 50 caracteres."
    },
    mensagem: {
        valueMissing: 'O campo da mensagem não deve ficar em branco ou vazio.',
        patternMismatch: "Por favor, preencha uma mensagem válida.",
        tooLong: "O campo de mensagem deve conter no máximo 300 caracteres."
    }
}

function verificaCampo(campo){
    let mensagem = " ";

    tipoDeErros.forEach(erro => {
        if (campo.validity[erro]) {
            mensagem = mensagens[campo.name][erro];
        }
    })
    const mensagemErro = campo.parentNode.querySelector('.mensagem-erro'); //o parentNode serve para que busque só a class que ta no input do escopo da função
    const validadorDoInput = campo.checkValidity(); //checar se está valido ou não

    
    if (!validadorDoInput) {//se a validação for false vai retornar a mensagem do erro
        mensagemErro.textContent = mensagem;
    } else {
        mensagemErro.textContent = "";
    }
}