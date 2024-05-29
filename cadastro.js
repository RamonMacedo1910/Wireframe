function contar_caracteres(){
    const limiteCaracteres = 3;

    var campo_CodigoEtec = document.getElementById("campo_CodigoEtec")

    var campo_CodigoEtecConteudo = campo_CodigoEtec.value;
    
    console.log(campo_CodigoEtecConteudo);

    if(campo_CodigoEtecConteudo.length > limiteCaracteres){

       campo_CodigoEtec.value = campo_CodigoEtecConteudo.slice(0, limiteCaracteres);
    }

}

function mostrarSenha(){
    var inputPass = document.getElementById('campo_senha2')
    var btnShowPass = document.getElementById('btn-senha')

    if(inputPass.type === 'password'){
        inputPass.setAttribute('type', 'text')
        btnShowPass.classList.replace('bi-eye-fill', 'bi-eye-slash-fill')
    }else{
        inputPass.setAttribute('type', 'password')
        btnShowPass.classList.replace('bi-eye-slash-fill', 'bi-eye-fill')
    }
}