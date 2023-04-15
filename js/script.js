var wordencrypt;

function encrypt(){
    var texto = document.getElementById('texto-area').value.toString();
    textUser = texto.split("");
    for (var i = 0; i < textUser.length; i++) {
        if (textUser[i] == "e") { textUser[i] = "enter" }
        if (textUser[i] == "i") { textUser[i] = "imes" }
        if (textUser[i] == "a") { textUser[i] = "ai" }
        if (textUser[i] == "o") { textUser[i] = "ober" }
        if (textUser[i] == "u") { textUser[i] = "ufat" }
    }


    
    var textServer = [...textUser].join("");
    // var p = document.createElement("p");
    // p.setAttribute("id", "ciphertext");
    // var ciphertext = document.createTextNode(textServer);
    // p.appendChild(ciphertext);
    // document.getElementById("not-display").appendChild(p);
    // user = true;
    console.log("ENCRIPTADO", textServer)
    wordencrypt = textServer;
}


function decryptor() {
    var textServer = wordencrypt;
    if (textServer.includes("enter")) { textServer = textServer.replace(/enter/gi, "e"); }
    if (textServer.includes("imes")) { textServer = textServer.replace(/imes/gi, "i"); }
    if (textServer.includes("ai")) { textServer = textServer.replace(/ai/gi, "a"); }
    if (textServer.includes("ober")) { textServer = textServer.replace(/ober/gi, "o"); }
    if (textServer.includes("ufat")) { textServer = textServer.replace(/ufat/gi, "u"); }
    // var p = document.createElement("p");
    // p.setAttribute("id", "ciphertext");
    // var ciphertext = document.createTextNode(textServer);
    // p.appendChild(ciphertext);
    // document.getElementById("not-display").appendChild(p);
    // user = true;
    console.log("DECRIPTADO", textServer)
}
