
var MMC;
var Number1 = window.prompt("numero 1")
var Number2 = window.prompt("numero 2")

ReturnMMC();

function ReturnMMC(){

    var loop = true;
    var i = 2;

    while(loop){

        var CheckMMCn1;
        var CheckMMCn2;
        CheckMMCn1 = i%Number1;
        CheckMMCn2 = i%Number2;

        if((CheckMMCn1 == 0) && (CheckMMCn2 == 0)){

            loop = false;
            MMC = i;
            break;

        }
        else{
          
            i++;
        }}

        alert(MMC);
    }