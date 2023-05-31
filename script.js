const textArea = document.querySelector(".text-area");

const mensaje = document.querySelector(".mensaje");

const comprobarTexto = true;


function verificarTexto(){

    let contador = 0;

    while (contador <= textArea.length){
        if(textArea[contador]==textArea[contador].toLowerCase)
            contador+=1;
            comprobarTexto = true;
         if(textArea[contador]!=textArea[contador].toLowerCase)
            comprobarTexto = false;
            break;
    }

}

function btnEncriptar(){

    if (comprobarTexto == true){
        const textoEncriptado = encriptar(textArea.value);
        mensaje.value = textoEncriptado;
        textArea.value = "";
        mensaje.style.backgroundImage = "none";
    }else{
        location.reload();
        alert('Solo se pueden ingresar mensajes en minúsculas y sin acentos');
    }

}


function encriptar(stringEncriptado){

    if(comprobarTexto == true){
        let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
        /*stringEncriptado = stringEncriptado.toLowerCase();*/
    
        for(let i = 0; i < matrizCodigo.length; i++){
            if(stringEncriptado.includes(matrizCodigo[i][0])){
                stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1]);
            }
        }
        return stringEncriptado
    }if(comprobarTexto==false){
        location.reload();
    }


}

function btnDesencriptar(){
    const textoEncriptado = desencriptar(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value = "";

}

function desencriptar(stringDesencriptado){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    /*stringDesencriptado = stringDesencriptado.toLowerCase();*/

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringDesencriptado.includes(matrizCodigo[i][1])){
            stringDesencriptado = stringDesencriptado.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0]);
        }
    }
    return stringDesencriptado
}


function copiar(){
    mensaje.select();
    navigator.clipboard.writeText(mensaje.value)
    mensaje.value = "";
    alert("Texto Copiado")
}