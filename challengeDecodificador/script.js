

/* Regras Codificador: 
"e" é convertido para "enter" 
"i" é convertido para "imes"
"a" é convertido para "ai"
"o" é convertido para "ober"
"u" é convertido para "ufat"
Apenas letras minúsculas
Não permite acentuação   
*/

/* Regras Decodificador: 
"enter" é convertido para "e" 
"imes" é convertido para "i"
"ai" é convertido para "a"
"ober" é convertido para "o"
"ufat" é convertido para "u"
Apenas letras minúsculas
Não permite acentuação     
*/
var inputTexto = document.querySelector(".text-input");
var botaoCripto = document.querySelector("#btn-cripto");
var botaoDescrito = document.querySelector("#btn-descripto");
var botaoCopiar = document.querySelector("#btn-copy");
var mensagem = document.querySelector("#msg");
//var configTexto = inputTexto.value.toLowerCase();

botaoCripto.addEventListener("click", function(event){
    event.preventDefault();
    mensagem.value = criptografar(inputTexto.value);
    inputTexto.value = '';

    });
botaoDescrito.addEventListener("click", function(event){
	event.preventDefault();
	mensagem.value = descriptografar(inputTexto.value);
	inputTexto.value = '';
    })
botaoCopiar.addEventListener('click', function() {
    navigator.clipboard.writeText(document.querySelector('#msg').value);
            mensagem.value = '';
    })

function criptografar(texto) {
    var codificar = texto.replace(/[i\í]/gi, 'imes')
    .replace(/[e\é\ê]/gi, 'enter')
    .replace(/[a\á\ã\â]/gi, 'ai')
    .replace(/[o\ó\ô]/gi, 'ober')
    .replace(/[u\ú]/gi, 'ufat');
    

    return codificar.toUpperCase();
}
function descriptografar(texto) {
	var decodificar = texto.replace(/enter/gi, 'e')
    .replace(/imes/gi, 'i')
    .replace(/ai/gi, 'a')
    .replace(/ober/gi, 'o')
    .replace(/ufat/gi, 'u');
    

    return decodificar.toUpperCase();
}
