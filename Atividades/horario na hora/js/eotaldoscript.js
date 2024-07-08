var container = document.getElementsByClassName('container')[0];
var bcorpo = document.body
var titulo = document.getElementById('titulo')
var texto = document.getElementById('textinho')
var img = document.getElementById('img')
var copright = document.getElementsByTagName('p')[0];

async function DefineStart() {
    var data = new Date();
    var horas = data.getHours();
    var minutos = data.getMinutes();
    var segundos = data.getSeconds();
    var diaSemana = data.getDay()
    var diaMes = data.getDate();
    var mes = data.getMonth()
    
    switch (diaSemana){
        case 0:
            diaSemana = "Domingo"
            break;
        case 1:
            diaSemana = "Segunda-feira"
            break;
        case 2:
            diaSemana = "Terça-feira"
            break;
         case 3:
            diaSemana = "Quarta-feira"
            break;
        case 4:
            diaSemana = "Quinta-feira"
            break;
        case 5:
            diaSemana = "Sexta-feira"
            break;
        case 6:
            diaSemana = "Sábado"
            break;
    }

    switch (mes){
        case 0:
            mes = "Janeiro"
            break;
        case 1:
            mes = "Fevereiro"
            break;
        case 2:
            mes = "Maio"
            break;
         case 3:
            mes = "Abril"
            break;
        case 4:
            mes = "Março"
            break;
        case 5:
            mes = "Junho"
            break;
        case 6:
            mes = "Julho"
            break;
        case 7:
            mes = "Agosto"
            break;
        case 8:
            mes = "Setembro"
            break;
        case 9:
            mes = "Outubro"
            break;
        case 10:
            mes = "Novembro"
            break;
        case 11:
            mes = "Dezembro"
            break;

    }
    titulo.innerHTML = (`Hoje é ${diaSemana}, dia ${diaMes} do mês ${mes}`)


    if ((segundos < 10) || (minutos < 10) || (horas < 10)) {
        if ((horas < 10) && (minutos < 10) && (segundos < 10)) {
            document.title = `0${horas}:0${minutos}:0${segundos}`;
        }
        else if ((minutos < 10) && (segundos < 10)) {
            document.title = `${horas}:0${minutos}:0${segundos}`;
        }
        else if ((minutos < 10) && (horas < 10)){
            document.title = `0${horas}:0${minutos}:${segundos}`;
        }
        else if ((segundos < 10) && (horas < 10)){
            document.title = `0${horas}:${minutos}:0${segundos}`;
        }
        else if (segundos < 10) {
            document.title = `${horas}:${minutos}:0${segundos}`;
        }
        else if (minutos < 10) {
            document.title = `${horas}:0${minutos}:${segundos}`;
        }
        else if (horas < 10) {
            document.title = `0${horas}:${minutos}:${segundos}`;
        }

    } else { 
        document.title = `${horas}:${minutos}:${segundos}`;
    }

    // horas = "testei aq pra ver se funciona"
    if((horas >= 4)&&(horas < 12)){
        texto.innerHTML = (`Bom dia!!! <br>São ${horas}hrs da Manhã`)
        img.setAttribute('src', '../manha.png')
        bcorpo.style.backgroundColor = "#FFF3C5"

    }else if ((horas >= 12)&&(horas < 17)){
        texto.innerHTML = (`Boa tarde!!! <br>São ${horas}hrs da Tarde`)
        img.setAttribute('src', '../tarde.png')
        bcorpo.style.backgroundColor = "#D2FCFE"
    }
    else if ((horas >= 0)&&(horas < 4)){
        texto.innerHTML = (`Boa noite!!! <br>São ${horas}hrs da Madrugada`)
        img.setAttribute('src', '../noite.png')
        titulo.style.color = "white"
        copright.style.color = "white"
        bcorpo.style.backgroundColor = "#060270"
    }
    else{
        texto.innerHTML = (`Boa noite!!! <br>São ${horas}hrs da Noite`)
        img.setAttribute('src', '../noite.png')
        titulo.style.color = "white"
        bcorpo.style.backgroundColor = "#060270"
        copright.style.color = "white"

    }

}

    setInterval(DefineStart, 1000);
