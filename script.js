const game = () =>{
    let playerScore=0;
    let computerScore=0;
    let moves=0;

    const playGame = () =>{
        const rockBtn=document.querySelector('.rock');
        const paperBtn=document.querySelector('.paper');
        const scissorBtn=document.querySelector('.scissor');
        const playerOptions=[rockBtn, paperBtn, scissorBtn];
        const computerOptions=['rock' , 'paper' , 'scissor'];

        playerOptions.forEach(option => {
            option.addEventListener('click' , function(){
                const movesLeft=document.querySelector('.movesleft');
                moves++;
                movesLeft.innerText=`Moves Left: ${5 - moves}`;

                const choiceNumber=Math.floor(Math.random() * 3);
                const computerChoice=computerOptions[choiceNumber];

                winner(this.innerText, computerChoice)

                if(moves == 5){
                    gameOver(playerOptions, movesLeft);

                }
            })
        })
    }
    const winner = (player, computer) => {
        const result=document.querySelector('.result');
        const PlayerScoreBoard=document.querySelector('.p-count');
        const ComputerScoreBoard=document.querySelector('.c-count');
        player=player.toLowerCase();
        computer=computer.toLowerCase();
        if(player===computer){
            result.textContent="Tie!";
        }
        else if(player=='rock'){
            if(computer=='paper'){
                result.textContent="Computer Won..!";
                computerScore++;
                ComputerScoreBoard.textContent=computerScore;
            }else{
                result.textContent="Player Won..!";
                playerScore++;
                PlayerScoreBoard.textContent=playerScore;
            }
        }
        else if(player=='scissor'){
            if(computer=='rock'){
                result.textContent="Computer Won..!";
                computerScore++;
                ComputerScoreBoard.textContent=computerScore;
            }else{
                result.textContent="Player Won..!";
                playerScore++;
                PlayerScoreBoard.textContent=playerScore;
            }   
        }
        else if(player=='paper'){
            if(computer=='scissor'){
                result.textContent="Computer Won..!";
                computerScore++;
                ComputerScoreBoard.textContent=computerScore;
            }else{
                result.textContent="Player Won..!";
                playerScore++;
                PlayerScoreBoard.textContent=playerScore;
            }   
        }
    }
    const gameOver=(playerOptions, movesLeft) => {
        const chooseMove=document.querySelector('.move');
        const result=document.querySelector('.result');
        const reloadBtn=document.querySelector('.reload');

        playerOptions.forEach(option =>{
            option.style.display='none';
        })
        chooseMove.innerText='Game over!';
        movesLeft.style.display='none';

            if(playerScore>computerScore){
                result.style.fontsize="2rem";
                result.innerText="You won the game";
                result.style.color="green";
            }

            else if(playerScore<computerScore){
                result.style.fontsize="2rem";
                result.innerText="You lost the game";
                result.style.color="red";  
            }
            else{
                result.style.fontsize='2rem';
                result.innerText="It's a Tie";
                result.style.color='lightyellow';
            }
            reloadBtn.innerText='Restart';
            reloadBtn.style.display='flex';
            reloadBtn.addEventListener('click' , () => {
                window.location.reload();
            })
        }
            playGame();
}
game();

