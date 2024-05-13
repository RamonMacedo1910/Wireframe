function contar_caracteres(){
    const limiteCaracteres = 3;

    var campo_CodigoEtec = document.getElementById("campo_CodigoEtec")

    var campo_CodigoEtecConteudo = campo_CodigoEtec.value;
    
    console.log(campo_CodigoEtecConteudo);

    if(campo_CodigoEtecConteudo.length > limiteCaracteres){

       campo_CodigoEtec.value = campo_CodigoEtecConteudo.slice(0, limiteCaracteres);
    }

}




const formulario = document.getElementById("form");
const CodigoEtec = document.getElementById("campo_CodigoEtec");
const email = document.getElementById("campo_email");
const senha = document.getElementById("campo_senha");
const senhaConfirmacao = document.getElementById("campo_senha2");


