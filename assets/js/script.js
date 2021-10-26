let nome = window.document.getElementById('nome')
let email = document.querySelector('#email')
let assunto = document.querySelector('#assunto')
let nomeOK = false
let emailOK = false
let assuntoOK = false
nome.style.width = '50%'
email.style.width = '50%'

function validaNome() {
    let txtNome = document.querySelector('#txtNome')
    if (nome.value.length < 3) {
        nome.style.backgroundColor = "#FF0000";
    } else {
        nome.style.backgroundColor = "#32CD32";
        nomeOK = true

    }
}

function validaEmail() {
    let txtEmail = document.querySelector('#txtEmail')
    if (email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1) {
        email.style.backgroundColor = "#FF0000";

        email.color = "green"
    } else {
        email.style.backgroundColor = "#32CD32	";
        emailOK = true


    }
}
function validaAssunto() {
    let txtAssunto = document.querySelector('#txtAssunto')
    if (assunto.value.length >= 100) {
        assunto.style.backgroundColor = "#FF0000";


    } else {

        assuntoOK = true


    }
}

function enviar() {
    if (nomeOK == true && emailOK == true && assuntoOK == true) {
        alert('Formulário enviado com sucesso!')
    } else {
        alert('Preencha o formulário corretamente antes de enviar!')
    }
}

