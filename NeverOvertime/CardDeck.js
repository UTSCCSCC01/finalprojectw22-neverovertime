const SUITS = ["club", "heart", "spade", "diamond"]
const RANKS = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]

/*
Defines the Card class.

Represents a card with rank and suit.
*/
class Card{
    /* Constructor for Card. */
    constructor(rank, suit){
        this.rank = rank
        this.suit = suit
    }
}

/* Defines the Deck class.

Represents a full deck of cards.
*/
export class Deck {
    /* Constructor for Deck. */
    constructor (cards = newDeck()) {
        this.cards = cards
    }

    /* Returns the number of cards in the deck. */
    get cardNumber(){
        return this.cards.length
    }

    /* Shuffles all the cards used in the deck, randomizing the order of all cards. */
    shuffle(){
        for (let i = 0; i < this.cardNumber; i++){
            const newIndex = Math.floor(Math.random() * (i+1))
            const oldRank = this.cards[newIndex]
            this.cards[newIndex] = this.cards[i]
            this.cards[i] = oldRank

        }
    }

    /* Draws a card from the top of the deck. */
    dealCard(){
        return this.cards.pop();

    }
}

/* Function to create a new full Deck of Cards. */
function newDeck() {
    return SUITS.flatMap(suit => {
        return RANKS.map(rank => {
            return new Card(rank, suit)
        })
    })
}
