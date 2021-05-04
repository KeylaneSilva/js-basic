// funcition - verbo + substantivo
//sem parametros

var game = "Playstation5";
var preferido;

function videoGame(){
    preferido = game;
}
videoGame(); //chamada de função
console.log(preferido); //print do resultado

//com paramentros
function novoGamer(console, modelo){
   certo = console + modelo;
}
novoGamer("videoGame ", "Playtation - Sony");
console.log(certo);

// Tipos de funções
// Realizar uma tarefa, não devolve nada 

function dizerNome(){
    console.log("Keylane");
}
dizerNome();

function multiplicarPorDois(valor){
    return valor * 2;
}
console.log(multiplicarPorDois(19));
var resultado = multiplicarPorDois(10);
console.log(resultado);

