const cards = document.querySelectorAll(".card");
let cardOne, cardTwo;
let disableDeck = false;
let matchedCount = 0;
const totalPairs = cards.length / 2;

function flipCard(e) {
    let clickedCard = e.target;
    if(clickedCard !== cardOne && !disableDeck) {
        clickedCard.classList.add("flip");
        if(!cardOne) {
            cardOne = clickedCard;
        } else {
            cardTwo = clickedCard;
            disableDeck = true;
            let cardOneImg = cardOne.querySelector("img").src;
            let cardTwoImg = cardTwo.querySelector("img").src;
            matchCards(cardOneImg, cardTwoImg);
        }
    }
}

function matchCards(img1, img2) {
    if(img1 === img2) {
        matchedCount++;
        cardOne.removeEventListener("click", flipCard);
        cardTwo.removeEventListener("click", flipCard);
        cardOne = cardTwo = "";
        disableDeck = false;

        // Check if all pairs are matched
        if(matchedCount === totalPairs) {
            celebrateWin();
        }
    } else {
        setTimeout(() => {
            cardOne.classList.add("shake");
            cardTwo.classList.add("shake");
        }, 400);

        setTimeout(() => {
            cardOne.classList.remove("shake", "flip");
            cardTwo.classList.remove("shake", "flip");
            cardOne = cardTwo = "";
            disableDeck = false;
        }, 1200);
    }
}

function celebrateWin() {
    disableDeck = true;
    let delay = 0;
    
    // First flip all cards face down
    cards.forEach(card => {
        setTimeout(() => {
            card.classList.remove("flip");
        }, delay);
        delay += 100;
    });

    // Then flip them all face up
    setTimeout(() => {
        delay = 0;
        cards.forEach(card => {
            setTimeout(() => {
                card.classList.add("flip");
            }, delay);
            delay += 100;
        });
    }, cards.length * 100 + 500);

    // Optional: Repeat the animation
    setTimeout(() => {
        delay = 0;
        cards.forEach(card => {
            setTimeout(() => {
                card.classList.remove("flip");
            }, delay);
            delay += 100;
        });

        setTimeout(() => {
            delay = 0;
            cards.forEach(card => {
                setTimeout(() => {
                    card.classList.add("flip");
                }, delay);
                delay += 100;
            });
        }, cards.length * 100 + 500);
    }, (cards.length * 100 + 1000) * 2);
}

cards.forEach(card => {
    card.addEventListener("click", flipCard);
});
