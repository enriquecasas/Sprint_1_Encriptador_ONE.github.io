var wordencrypt;
var encriptado = false;
function encrypt() {
    var texto = document.getElementById('texto-area').value.toString();

    if (texto.length == 0 && !encriptado) {
        document.getElementById("display-imagen").style.display = "";
        document.getElementById("mensaje-dos").style.display = "";
        document.getElementById("mensaje-uno").style.display = "";
    }
    else if ((texto != texto.toLowerCase() || texto != texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "")) && !encriptado) {
        alert("Se permite sólo letras minúsculas y sin tílde")
    } else if (!encriptado) {
        encriptado = true;
        document.getElementById("display-imagen").style.display = "none";
        document.getElementById("mensaje-dos").style.display = "none";
        document.getElementById("mensaje-uno").style.display = "none";
        document.getElementById("resultado-encontrado").style.display = "";
        wordencrypt = ""
        textUser = texto.split("");
        for (var i = 0; i < textUser.length; i++) {
            if (textUser[i] == "e") { textUser[i] = "enter" }
            if (textUser[i] == "i") { textUser[i] = "imes" }
            if (textUser[i] == "a") { textUser[i] = "ai" }
            if (textUser[i] == "o") { textUser[i] = "ober" }
            if (textUser[i] == "u") { textUser[i] = "ufat" }
        }
        wordencrypt = [...textUser].join("");
        document.getElementById("textencript").innerHTML = "";
        document.getElementById("textencript").innerHTML = wordencrypt;
    }
}


function decryptor() {
    var texto = document.getElementById('texto-area').value.toString();

    if (texto != "") {
        document.getElementById("display-imagen").style.display = "none";
        document.getElementById("mensaje-dos").style.display = "none";
        document.getElementById("mensaje-uno").style.display = "none";
        document.getElementById("resultado-encontrado").style.display = "";
        
        if (wordencrypt.includes("enter")) { wordencrypt = wordencrypt.replace(/enter/gi, "e"); }
        if (wordencrypt.includes("imes")) { wordencrypt = wordencrypt.replace(/imes/gi, "i"); }
        if (wordencrypt.includes("ai")) { wordencrypt = wordencrypt.replace(/ai/gi, "a"); }
        if (wordencrypt.includes("ober")) { wordencrypt = wordencrypt.replace(/ober/gi, "o"); }
        if (wordencrypt.includes("ufat")) { wordencrypt = wordencrypt.replace(/ufat/gi, "u"); }
        
        console.log(wordencrypt);
        document.getElementById("textencript").innerHTML = "";
        document.getElementById("textencript").innerHTML = wordencrypt;
        encriptado = false;
    }
}


function limpiar() {
    document.getElementById("display-imagen").style.display = "";
    document.getElementById("mensaje-dos").style.display = "";
    document.getElementById("mensaje-uno").style.display = "";
    document.getElementById("resultado-encontrado").style.display = "none";
    document.getElementById("textencript").value = "";
    document.getElementById("texto-area").value = "";
    encriptado = false;
    wordencrypt = "";
}

function copy() {
    let textoexriptado = document.getElementById('textencript');
    navigator.clipboard.writeText(textoexriptado.innerHTML);
}
