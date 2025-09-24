let score = JSON.parse(localStorage.getItem('score')) || { wins: 0, loses: 0, ties: 0 };

        function update() {
            document.querySelector('.para').innerHTML = `Wins: ${score.wins}, Losses: ${score.loses}, Ties: ${score.ties}`;
        }

        let isautoplaying = false;
        let id;

        function autoplay(){
            if(!isautoplaying){
                document.querySelector('.js-auto').innerText='Stop playing';
                document.querySelector('.js-auto').classList.add('play');
                 id = setInterval(function() {
                                const userChoice=["rock", "paper", "scissors"][Math.floor(Math.random() * 3)];
                                check(userChoice);
                            },1000);
                isautoplaying = true;
            }
           else{
            clearInterval(id);
            document.querySelector('.js-auto').innerText='Auto play';
            document.querySelector('.js-auto').classList.remove('play');
            isautoplaying = false;
           }
        }
        document.body.addEventListener('keydown',(event)=>{
            const k=event.key;
            if(k==='r'||k==='R'){
                check('rock');
            }
            else if(k=== 'p'||k==='P'){
                check('paper');
            }
            else if(k=== 's'||k==='S'){
                check('scissors');
            }
        });


        function check(value) {
            const userChoice = value;
            const computerChoice = ["rock", "paper", "scissors"][Math.floor(Math.random() * 3)];
            let result;

            if (userChoice === computerChoice) {
                result = "It's a draw!";
                score.ties++;
            } else if (
                (userChoice === "rock" && computerChoice === "scissors") ||
                (userChoice === "paper" && computerChoice === "rock") ||
                (userChoice === "scissors" && computerChoice === "paper")
            ) {
                result = "You win!";
                score.wins++;
            } else {
                result = "Computer wins!";
                score.loses++;
            }

            localStorage.setItem('score', JSON.stringify(score));
            document.querySelector('.txt').innerHTML = result;
            document.querySelector('.moves').innerHTML = `
                You <img src="images/${userChoice}-emoji.png" alt="${userChoice}" class="move-icon"> 
                <img src="images/${computerChoice}-emoji.png" alt="${computerChoice}" class="move-icon"> Computer
            `;
            update();
        }


        function resetScore() {
            score = { wins: 0, loses: 0, ties: 0 };
            localStorage.setItem('score', JSON.stringify(score));
            document.querySelector('.txt').innerHTML = "Scores have been reset!";
            document.querySelector('.moves').innerHTML = '';
            update();
        }

        update();