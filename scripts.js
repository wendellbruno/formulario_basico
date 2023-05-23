const form = document.getElementById('form');
const username = document.getElementById("username");
const email = document.getElementById('email');
const password = document.getElementById('password');
const passwordConfirmation = document.getElementById('passwordConfirmation')

form.addEventListener('submit', e =>{
    e.preventDefault()
    
    checkInputs();
});

function checkInputs(){
    /* const usernameValue = username.value
    const emailValue = email.value
    const passwordValue = password.value
    const passwordConfirmationValue = passwordConfirmation.value */

    if(username.value === ""){
        setErrorFor(username, 'o nome de usuario é obrigatorio')
    }else{
        setSuccessFor(username)
    }

    if(email.value === ""){
        setErrorFor(email, 'Email invalido')
    }else{
        setSuccessFor(email)
    }

    if(password.value === ""){
        setErrorFor(password, 'Senha')
    }else if(password.value.length < 7){
        setErrorFor(password, ' A senha é muito curta')
    }else{
        setSuccessFor(password)
    }

    if(passwordConfirmation.value === ""){
        setErrorFor(passwordConfirmation, 'a confirmação de senha é Obrigatoria')
    }else if(password.value !== passwordConfirmation.value){
        setErrorFor(passwordConfirmation, 'As senhas não são iguais')
    }else{
        setSuccessFor(passwordConfirmation)
    }
    
    


}

function setErrorFor(input, msg){

    /* Pega o elemento pai do form */
    const formControl = input.parentElement
    const small = formControl.querySelector('small')

    /* adiciona a msg error */
    small.innerText = msg

    /* adicionar a classe de erro */
    formControl.className = 'form-control error'
}

function setSuccessFor(input){
     /* Pega o elemento pai do form */
     const formControl = input.parentElement

     /* adiciona a classe success*/
     formControl.className = "form-control success"
}