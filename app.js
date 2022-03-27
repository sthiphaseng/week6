class Card {
    constructor(suit, value) {
        this.suit = suit;
        this.value = value;
    }
}

class Deck {
    constructor() {
        this.cards = [];
    }

    createDeck() {
        let suits = ["Spades", "Diamonds", "Clubs", "Hearts"];
        let values = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14"];

        for(let i = 0; i < suits.length; i++) {
            for(let j = 0; j < values.length; j++) {
                    this.cards.push( new Card(suits[i], values[j])); 
            }   
        }     
    }

    shuffleDeck() {
        let randomOne, randomTwo, finalDeck;
        for(let i = 0; i < 100; i++) {
            randomOne = Math.floor((Math.random() * this.cards.length));
            randomTwo = Math.floor((Math.random() * this.cards.length));
            finalDeck = this.cards[randomOne];
            this.cards[randomOne] = this.cards[randomTwo];
            this.cards[randomTwo] = finalDeck;
        }
    }
}

class Player {
    constructor(name){
        this.playerName = name;
        this.playerCards = [];
        this.playerScore = 0;
    }   
}

class PlayWar {
    constructor() {
        this.players = [];
    }
    start() {
        alert("Prepare for battle in the game of War!");
        let playerOneName = prompt("Please enter the name of Player One: ");
        this.players.push(new Player(playerOneName));
        let playerTwoName = prompt("Please enter the name of Player Two: ") ;
        this.players.push(new Player(playerTwoName));
        this.players[0].playerScore = 0;
        this.players[1].playerScore = 0;
    } 

    dealDeck() {
        let newDeck = new Deck();
        newDeck.createDeck();
        newDeck.shuffleDeck();
        this.players[0].playerCards = newDeck.cards.slice(0,26);
        this.players[1].playerCards = newDeck.cards.slice(26,52);
    }

    compareCards() {
        let handOne = this.players[0].playerCards;
        let handTwo = this.players[1].playerCards;
        
        while(this.players[0].playerCards.length > 0) {
            let playerOneCard = handOne.shift();
            let playerTwoCard = handTwo.shift(); 
        
            if(+playerOneCard.value > +playerTwoCard.value) {
                this.players[0].playerScore += 1;
                console.log(this.players[0].playerName, "earns one point with", playerOneCard, "over", `${this.players[1].playerName}s`, playerTwoCard);
    
                } else if(+playerOneCard.value < +playerTwoCard.value) {
                this.players[1].playerScore += 1;
                console.log(this.players[1].playerName, "earns one point with", playerTwoCard, "over", `${this.players[0].playerName}s`, playerOneCard);
                
                } else {
                console.log("Its a tie!", playerOneCard, playerTwoCard);
            }
        }
            if(this.players[0].playerScore > this.players[1].playerScore){
            alert(`${this.players[0].playerName} has won with a score of: ${this.players[0].playerScore} 
             ${this.players[1].playerName} had a score of: ${this.players[1].playerScore}`)

            } else
            alert(`${this.players[1].playerName} won with a score of: ${this.players[1].playerScore}  
            ${this.players[0].playerName} had a score of: ${this.players[0].playerScore}`)

            alert("Thank you for playing!")
           
    }

}

let playGame = new PlayWar();
playGame.start();
playGame.dealDeck();
playGame.compareCards();