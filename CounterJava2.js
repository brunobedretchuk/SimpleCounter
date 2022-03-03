//Objetos

const player1 = {
    name : 'Player 1',
    score : 0,
    button : document.querySelector('#button1'),
    display : document.querySelector('#p1')
}
const player2 = {
    name : 'Player 2',
    score : 0,
    button : document.querySelector('#button2'),
    display : document.querySelector('#p2')
}
// Variáveis

const optionList = document.querySelector("#playingTo");
const b3 = document.querySelector('#button3');
player1.display.textContent = 0;
player2.display.textContent = 0;



// Funções utilizadas para: atualizar o placar ao clicar em um dos dois primeiros botões;
// resetar o placar ao pressionar 'reset' ou mudar a pontuação máxima

function updateScores (player , opponent){
    player.score += 1;
    player.display.textContent = player.score;
    
    
    if (player.score == optionList.value){
        player.button.disabled = !Element.disabled;
        opponent.button.disabled = !Element.disabled;
        player.display.classList.add('winner');
        opponent.display.classList.add('loser');
        setTimeout(function() {
            alert(`Congratulations, ${player.name}!`);}, 200);   
    }
}

function reset(){
    for (let p of [player1 , player2]){
    p.score = 0;
    p.display.textContent = 0;
    p.button.disabled = false;
    p.display.classList.remove('winner' , 'loser');
    }
}


// Loop Utilizado para definir as opções de pontuação máxima

for (let i = 1; i <= 21; i++) {
    const option = document.createElement('option');
    option.value = i;
    option.innerHTML = i;
    optionList.appendChild(option);
}


// Eventos do Javascript

// Botão 1

player1.button.addEventListener('click', function(){
    updateScores(player1 , player2)} 
)

// Botão 2

player2.button.addEventListener('click', function(){
    updateScores(player2 , player1)}
)

// Botão 3 e Mudança de pontuação máxima pelo select

b3.addEventListener('click' , reset);
optionList.addEventListener('change' , reset);
