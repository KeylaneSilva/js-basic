/* 2) Analise os algoritmos abaixo e diga o que será impresso na tela ao serem executados: */ 

function caso1(){
    var A = 10;
    var B = 20;
    console.log(B);
    B = 5;
    console.log(A,B);
}

function caso2(){
    var A = 30;
    var B = 20;
    var C  = A + B;
    console.log(C);
    B = 10;
    console.log(B,C);
    C = A + B;
    console.log(A,B,C);
}

function caso3(){
    var A = 10;
    var B = 20;
    var C = A;
    B = C;
    A = B;
    console.log(A,B,C);
}

function caso4(){
    var A = 10;
    var B = A + 1;
    A = B + 1;
    B = A + 1;
    console.log(A);
    A = B + 1;
    console.log(A,B);
}

function caso5(){
    var A = 10;
    var B = 5;
    var C = A + B;
    B = 20;A = 10;
    console.log(A,B,C);
}

function caso6(){
    var X = 1;
    var Y = 2;
    var Z = Y - X;
    console.log(Z);
    X = 5;
    Y = X + Z;
    console.log(X,Y,Z);
}

console.log(caso1());
console.log(caso2());
console.log(caso3());
console.log(caso4());
console.log(caso5());
console.log(caso6());

