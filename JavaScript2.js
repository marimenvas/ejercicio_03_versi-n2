
while (true) {
var n1 = prompt("¿Qual é seu nome?");
var n2 = prompt("¿Qual é seu sobrenome?");
var n3 = Number(prompt("¿Qual é sua edade?"));
let repetir = prompt("Quieres ingresar otro nombre sim / não:");

    document .write (".Ben-vindo" + " " + n1 + " "+ n2 + " de " + n3 + " "  + " " + "anos"+ " "+ "de" + " " + "edade"+ ", " );
    console.log (".Ben-vindo" + " " + n1 + " "+ n2 + " de " + n3 + " "  + " " + "anos"+ " "+ "de" + " " + "edade"+ "," );

if(n3 >= 18){
    document.write("eres mayor de edade");
    console.log("eres mayor de edade");
}else{
    document.write("eres menor de edade.");
    console.log("eres menor de edade.");
} 

if ('não' == repetir){
    break;
}  
}


