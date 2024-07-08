const but = document.getElementById('submit')
but.addEventListener('click', calcIMC)

function calcIMC(){
    console.log("Chegou AQUI")
    var altura = Number(document.getElementById('altura').value)
    var peso = Number(document.getElementById('peso').value)
    var imc = peso/(altura**2)
    
    var tabelaIMC

    if (imc < 18,5 ){
        tabelaIMC = "Peso Insuficiente"
    }
    else if (imc < 24,9){
        tabelaIMC = "Peso normal"
    }
    else if (imc < 29,9){
        tabelaIMC = "Sobrepeso"
    }
    else if (imc < 34,9) {
        tabelaIMC = "Obeso"
    }
    else if (imc < 39,9){
        tabelaIMC = "Obsidade GRAVE"
    }
    else {
        tabelaIMC = "Obesidade mórbida"
    }

    var enviarValue = document.getElementById('valueIMC')
    var enviarResp = document.getElementById('resultado');
    enviarResp.innerText = imc.toFixed(2)
    enviarValue.innerText = tabelaIMC;

}