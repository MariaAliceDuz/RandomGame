/* Criar um sistema, onde o usuário devera inserir um numero inteiro.
O sistema ira executar uma função que gerara um numero randômico, e apresentar em 
quantas tentativas o sistema precisou para o numero randômico ser igual ao numero 
que foi inserido pelo usuário.
Os números deverão aparecer no console.log e a quantidade de vezes executado devera 
ser apresentado para o usuário.
Criar 2 cenários, o primeiro onde a aposta devera ser entre os números de 0 ate 9 
(0,1,2,3,4,5,6,7,8,9) e o segundo onde a aposta devera ser entre os números 0 ate 
99 (0,1,2,3,4,5...96,97,98,99).
*/

const numUsuario = document.getElementById("entry-number");
const intervalo = document.getElementsByName("interval");

function getInterval(numInterval){
    let max = 0;
    for(i = 0; i < numInterval.length; i++){
        if(intervalo[i].checked)
        max = Number(intervalo[i].value)
    }
    return max;
}

function guessNumber(){
    let tentativas = 0;
    let randomNum = 0;
    let max = getInterval(intervalo);

    if(!Number.isInteger(Number(numUsuario.value)) || Number(numUsuario.value) < 0 || Number(numUsuario.value) > max || Number(numUsuario.value) === ''){
        alert(`Insira um número inteiro entre 0 e ${max}!`);
    }
    else{
      do{
            randomNum = getRndInteger(0,max);
            console.log(`Número gerado: ${randomNum}`);
            tentativas++;
        }while(randomNum != numUsuario.value)
        alert(`Foram necessárias ${tentativas} tentativas para acertar o número.`);
    }
    numUsuario.value = null;
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

