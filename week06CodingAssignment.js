class Card 
{
    constructor(suit, face, value)
    {
        this.suit = suit, //clubs. spades, etc.
        this.face = face; 
        this.value = value;

    }
    describe()
    {
        return `${this.face} of ${this.suit} worth ${this.value}` //display this when a card is played
    }
}

class Player
{
    constructor(playerName, deck, points)
    {
        this.playerName = playerName;
        this.deck = []
        this.points = 0;
    }
    playACard()
    {
        if(this.deck.length === 0)
        {
            console.log(`${this.playerName} is out of cards! Time to tally the score!`);
            return;
        }
        else
        {
            let playedCard = this.deck.pop(); //player removes card from the top of their deck
            return playedCard;
        }
    }
}

class Deck
{
    constructor(cards)
    {
        this.cards = []; //init as empty list
    }
    shuffleCards()
    {
        for (let i = this.cards.length - 1; i > 0; i--)
        {
            // Shuffle using the Fisher–Yates shuffle method
            let x = Math.floor(Math.random() * (i + 1));
    
            // Swap this.cards[i] with the element
            // at random index
            [this.cards[i], this.cards[x]] = [this.cards[x], this.cards[i]];
        }
    }
    deal(player1, player2) //randomly give cards to players
    {
        this.shuffleCards(); //have to shuffle the deck before you deal
        for (let i = 0; i < this.cards.length; i++)
        {
            let currentCard = this.cards[i];//iterate over the cards array

            if(i%2!=0)//alternate giving cards to player 1 + player 2, i is odd give to P1, i is even give to p2
            {
                player1.deck.push(currentCard);
            }
            else
            {
                player2.deck.push(currentCard);
            }
        }
    }
    createCardsForDeck() //function to create all 52 cards for the deck as objs
    {
        let suits = ["Club", "Spade", "Heart", "Diamond"]
        let faces = ["Ace", 2, 3, 4, 5, 6, 7, 8, 9, 10, "King", "Queen", "Joker"]

        for(let suit of suits)//iterate over each suit
        {
            for(let face of faces)//for each suit create a card object with each of the face values
            {
                let currentCard = new Card(suit,face,face)

                if(currentCard.face == "Ace") //if currentCard's value is a string, reassign it o be the numerical val
                {
                    currentCard.value = 11
                }
                else if (currentCard.face == "King" || currentCard.face == "Queen" || currentCard.face == "Joker")
                {
                    currentCard.value = 10
                }
                this.cards.push(currentCard); //add to deck
            }
        }
    }
}

  //create the players and deck
let deck = new Deck();
deck.createCardsForDeck();
let player1 = new Player("Player1");
let player2 = new Player("Player2");

//deal cards to the players
deck.deal(player1, player2);


//start the game
console.log(`
*******************  Let's Play WAR!  *******************

`)
let numTurns = 26; //26 turns bc each player has 26 cards
for(let i = 0; i < numTurns; i++)
{
    console.log(`-------Turn ${i+1 }-----------`)
    player1Card = player1.playACard()
    console.log(`Player 1 plays a ${player1Card.describe()}`);

    player2Card = player2.playACard()
    console.log(`Player 2 plays a ${player2Card.describe()}`);

    if(player1Card.value > player2Card.value) //assign points based on value
    {
        player1.points +=1;
        console.log(`Player 1 earns 1 point!`);
    }
    else if (player2Card.value > player1Card.value)
    {
        player2.points +=1;
        console.log(`Player 2 earns 1 point!`);
    }
    else if (player2Card.value === player1Card.value)
    {
        console.log(`Tie! No points awarded!`);
    }
}

console.log(`-----------------------------------------------`)

console.log(`Final Scores:
Player 1: ${player1.points}
Player 2: ${player2.points}
`)
console.log(`-----------------------------------------------`)

if(player1.points > player2.points)
{
    console.log(`Player 1 is the winner!`)
}
else if(player2.points > player1.points)
{
    console.log(`Player 2 is the winner!`)
}
else
{
    console.log(`It's a tie!`)
}

