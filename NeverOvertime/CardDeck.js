const SUITS = ["club", "heart", "spade", "diamond"]
const RANKS = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]

class Card{
    constructor(rank, suit){
        this.rank = rank
        this.suit = suit
    }
}

export class Deck {
    constructor (cards = newDeck()) {
        this.cards = cards
    }

    get cardNumber(){
        return this.cards.length
    }

    shuffle(){
        for (let i = 0; i < this.cardNumber; i++){
            const newIndex = Math.floor(Math.random() * (i+1))
            const oldRank = this.cards[newIndex]
            this.cards[newIndex] = this.cards[i]
            this.cards[i] = oldRank

        }
    }

    dealCard(){
        return this.cards.pop();

    }
}

function newDeck() {
    return SUITS.flatMap(suit => {
        return RANKS.map(rank => {
            return new Card(rank, suit)
        })
    })
}
