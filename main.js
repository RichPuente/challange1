let textoEncriptado=[];
let letter="";
let validar = false;
//let nuevoTexto = "";


function encriptar(){
    var encriptarText = document.getElementById('encriptarText').value;
    if(validarTexto(encriptarText)==false){
        for(var i=0; i<encriptarText.length; i++){
         letter = encriptarText.charAt(i)
         if(letter == "e"){
                textoEncriptado.splice(i, 1, "enter");
            }else{
                if(letter == "i"){
                    textoEncriptado.splice(i, 1, "imes");
                }else{
                    if(letter == "a"){
                        textoEncriptado.splice(i, 1, "ai");
                    }else{
                        if(letter == "o"){
                            textoEncriptado.splice(i, 1, "ober");
                        }else{
                            if(letter == "u"){
                                textoEncriptado.splice(i, 1, "ufat");
                            }else{
                                textoEncriptado.splice(i, 1, letter);
                            }
                        }
                    }
                }
            }
        }
    }
    var destino = document.getElementById('textoEncriptado');
    var contenido = textoEncriptado.join('');
    //console.log(contenido);
    destino.innerHTML = contenido;
    //destino.value = contenido;
    textoEncriptado =[];
    document.getElementById("muñeco").setAttribute("hidden", "");
    document.getElementById("mensajeinicial").style.display = 'none';
    return;
}

function desencriptar(){
    var encriptarText = document.getElementById('encriptarText').value;
    if(validarTexto(encriptarText)==false){
        for(var i=0; i<encriptarText.length; i++){
            letter = encriptarText.charAt(i)
            if(letter == "e"){
                textoEncriptado.splice(i, 1, "e");
                i=i+4;
            }else{
                if(letter == "i"){
                    textoEncriptado.splice(i, 1, "i");
                    i=i+3;
                }else{
                    if(letter == "a"){
                        textoEncriptado.splice(i, 1, "a");
                        i=i+1;
                    }else{
                        if(letter == "o"){
                            textoEncriptado.splice(i, 1, "o");
                            i=i+3;
                        }else{
                            if(letter == "u"){
                                textoEncriptado.splice(i, 1, "u");
                                i=i+3;
                            }else{
                                textoEncriptado.splice(i, 1, letter);
                            }
                        }
                    }
                }
            }
        }
        var destino = document.getElementById('textoEncriptado');
        var contenido = textoEncriptado.join('');
        //console.log(contenido);
        destino.innerHTML = contenido;
        //destino.value = contenido;
        textoEncriptado =[];
        document.getElementById("muñeco").setAttribute("hidden", "");
        document.getElementById("mensajeinicial").style.display = 'none';
        return;
    }
}

function validarTexto(texto){
     let text = texto;
    console.log(text);
    if(text =! ""){
        for (var i = 0; i < texto.length; i++) {
            var letra = texto.charAt(i);
            //console.log(letra);
            if(caracterEspecial(letra)){
                alert(`No se permite caracteres especiales -- ${letra} --`);
                validar = true;
                window.location.reload();
                break;
            }else{
                if (mayusculas(letra)) {
                    alert(`No se permite mayusculas -- ${letra} --`);
                    validar = true;
                    window.location.reload();
                    break;
                }
            }   
        }
        return validar;
    }else{
        alert("campo vacio");
        window.location.reload();
    }
}

function caracterEspecial(caracter) {
    var char=/[áéíóúý!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
    if (char.test(caracter)) {
        return true;
    } else {
        return false;
    }
}

function mayusculas(caracter) {
    var char= /[ABCDEFGHIJKLMNÑOPQRSTWXYZ]+/;
    if (char.test(caracter)) {
        return true;
    } else {
        return false;
    } 
}

/*function inicio() {
    var encriptarText = document.getElementById('encriptarText').value;
    if (encriptarText == ""){
        alert("Campo vacio");
        window.location.reload();
    } else {
        if(validarTexto(encriptarText)){
            //break;
        }else{
            //window.location.replace("pagina2.html");
        }
    }
    return;
}*/

//letra == letra.toUpperCase()
