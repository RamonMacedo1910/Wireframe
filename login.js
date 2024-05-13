function logar(){
    var login = document.getElementById('login').value;
    var senha = document.getElementById('campo_senha').value;
     if (login == "Ramon@gmail.com" && senha == "12345678"){
        alert('sucesso');
        location.href = "registro.html"
     }
     else{
        alert('usuario ou senha incorretos');
     }
}