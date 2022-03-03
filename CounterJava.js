// Variáveis

const optionList = document.querySelector("#playingTo");
const b1 = document.querySelector('#button1');
const b2 = document.querySelector('#button2');
const b3 = document.querySelector('#button3');
const p1 = document.querySelector('#p1');
const p2 = document.querySelector('#p2');
var p1Num = 0;
var p2Num = 0;
p1.innerText = p1Num;
p2.innerText = p2Num;

// Função utilizada para resetar o placar ao pressionar 'reset' ou mudar a pontuação máxima

function updateScores (player , opponent){
    
}

function reset(){
    p1Num = 0;
    p2Num = 0;
    p1.innerHTML = p1Num;
    p2.innerHTML = p2Num;
    b1.disabled = false;
    b2.disabled = false;
    p1.classList.remove('winner' , 'loser');
    p2.classList.remove('winner' , 'loser');

}


// Loop Utilizado para definir as opções de pontuação máxima

for (let i = 1; i <= 50; i++) {
    const option = document.createElement('option');
    option.value = i;
    option.innerHTML = i;
    optionList.appendChild(option);
}


// Eventos do Javascript

// Botão 1

b1.addEventListener('click', function(){
    
    p1Num++;
    p1.innerHTML = p1Num;

    if (p1Num == optionList.value){
        b1.disabled = !Element.disabled;
        b2.disabled = !Element.disabled;
        p1.classList.add('winner');
        p2.classList.add('loser');
        setTimeout(function() {
            alert('Congratulations, Player 1!');}, 200);   
    }
    
    } 
)

// Botão 2

b2.addEventListener('click', function(){
    p2Num++;
    p2.innerHTML = p2Num;
     

    if (p2Num == optionList.value){
        b1.disabled = !Element.disabled;
        b2.disabled = !Element.disabled;
        p1.classList.add('loser');
        p2.classList.add('winner');
        setTimeout(function() {
            alert('Congratulations, Player 2!');}, 200);   
    }
}
)

// Botão 3

b3.addEventListener('click' , reset);


// Mudança de pontuação máxima pelo select

optionList.addEventListener('change' , reset);
