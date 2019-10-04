// Using https://www.thatsoftwaredude.com/content/6196/coding-a-card-deck-in-javascript as a base

const deck = new Array();
const suits = ['spades', 'diamonds', 'clubs', 'hearts']
const values = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'A', 'J', 'Q', 'K']

const getDeck = () => {
    let deck = new Array() 
    for(let i = 0; i < suits.length; i++) {
        for(let x = 0; x < values.length; i++) {
            let card = {Values: values[x], Suites: suits[i]}
            deck.push(card)
        }
    }
    return deck
}

const shuffle = () => {
    for(let i = 0; i < 1000; i++) {
        let locationOne = Math.floor((Math.random() * deck.length))
        let locationTwo = Math.floor((Math.random() * deck.length))
        let tmp = deck[locationOne]

        deck[locationOne] = deck[locationTwo]
        deck[locationTwo] = tmp
    }
}