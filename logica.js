const btnEncriptar = document.querySelector(".btn-encriptar");
const btnDesencriptar = document.querySelector(".btn-desencriptar");
const imagen = document.querySelector(".contenedor-img");
const h3= document.querySelector(".contenedor-h3");
const parrafo = document.querySelector(".contenedor-parrafo");
const textoResultado = document.querySelector(".texto-resultado")
const btnCopiar= document.querySelector(".btn-copiar");



function encriptar() {
   ocultarArea();
   let area = textoArea();
   textoResultado.textContent= encriptador(area);
}

function desencriptar() {
    ocultarArea();
    let area=textoArea();
    textoResultado.textContent= desencriptador(area);
}

function textoArea(){
    let area = document.querySelector(".area");
    return area.value;
}
function ocultarArea(){
    imagen.classList.add("ocultar");
    h3.classList.add("ocultar");
    parrafo.classList.add("ocultar");
}
function encriptador(mensaje){
    var texto = mensaje;
    var textoFinal = "";

    for(var i = 0; i < texto.length; i++){
        if(texto[i]=="a"){
            textoFinal= textoFinal+"ai";
        }
        else if(texto[i]=="e"){
            textoFinal= textoFinal +"enter";
        }
        else if(texto[i]=="i"){
            textoFinal= textoFinal +"imes";
        }
        else if(texto[i]=="o"){
            textoFinal= textoFinal+"ober";
        }
        else if(texto[i]=="u"){
            textoFinal= textoFinal+"ufat";
        }
        else{
            textoFinal = textoFinal + texto[i];
        }
    }
    return textoFinal;
}
function desencriptador(mensaje){
    var texto = mensaje;
    var textoFinal = "";

    for(var i = 0; i < texto.length; i++){
        if(texto[i]=="a"){
            textoFinal= textoFinal+"a";
            i= i+1;
        }
        else if(texto[i]=="e"){
            textoFinal= textoFinal +"e";
            i=i+4;
        }
        else if(texto[i]=="i"){
            textoFinal= textoFinal +"i";
            i=i+3;
        }
        else if(texto[i]=="o"){
            textoFinal= textoFinal+"o";
            i=i+3;
        }
        else if(texto[i]=="u"){
            textoFinal= textoFinal+"u";
            i=i+3;
        }
        else{
            textoFinal = textoFinal + texto[i];
        }
    }
    return textoFinal;
}
function copiarArea(){   
        var paraCopiar = document.getElementById("resultado");    
        paraCopiar.select();
        document.execCommand("copy");
        alert("Copiado con éxito");
}

btnEncriptar.onclick = encriptar;
btnDesencriptar.onclick= desencriptar;
btnCopiar.onclick = copiarArea;