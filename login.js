function logar(){
    var login = document.getElementById('login').value;
    var senha = document.getElementById('campo_senha').value;
     if (login == "Ramon@gmail.com" && senha == "12345678"){
        location.href = "registro.html"
     }
     else{
        alert('usuario ou senha incorretos');
     }
}

function mostrarSenha(){
   var inputPass = document.getElementById('campo_senha')
   var btnShowPass = document.getElementById('btn-senha')

   if(inputPass.type === 'password'){
       inputPass.setAttribute('type', 'text')
       btnShowPass.classList.replace('bi-eye-fill', 'bi-eye-slash-fill')
   }else{
       inputPass.setAttribute('type', 'password')
       btnShowPass.classList.replace('bi-eye-slash-fill', 'bi-eye-fill')
   }
}