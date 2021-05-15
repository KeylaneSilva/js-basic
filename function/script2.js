//Calculadora 
var num1 = '';
var num2 = '';
var valor1 = 0;
var operador ='';

function PegarId(id){ //pegando os valores
    valor1 = id;
    //console.log(valor1);
    while(num1=='' && num2==''){

        if(num1 == ''){
            if(valor1 == 1){
                num1 = 1;
                console.log("numero1" + num1);
                return false;
            }else if(valor1 == 2){
                num1 = 2;
                console.log("numero1" + num1);
                return false;
            }  
        }
        if (operador == ''){
            if(valor1 == '+'){
                console.log("entrou no +");
                if(num1!=0 && num2!=0){
                    soma(num1,num2);
                    break;
                }
            }   
        }
        
        if (num2 == ''){

            if(valor1 == 1){
                num2 = 1;
                console.log("numero2" + num2);
                return false;
            }else if(valor1 == 2){
                num2 = 2;
                console.log("numero2" + num2);
                return false;
            }
        }
    }

}

function soma(x1,x2){
    totSoma = x1+x2;
    console.log(totSoma);
}