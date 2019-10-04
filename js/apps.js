// Using https://www.thatsoftwaredude.com/content/6196/coding-a-card-deck-in-javascript as a base
// Deck creation
const deck = [];
const suits = ['spades', 'diamonds', 'clubs', 'hearts']
const values = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'A', 'J', 'Q', 'K']

const getDeck = () => {
    for(let i = 0; i < suits.length; i++) {
        for(let j = 0; j < values.length; j++) {
            let card = {Values: values[j], Suites: suits[i]}
            deck.push(card)
            //console.log(deck) 
        }
    }
    // Checking to see if an unshuffled deck is generated
    console.log(deck)
}

// Shuffling the deck
const shuffle = (deck) => {
    for(let i = 0; i < 100; i++) {
        let locationOne = Math.floor((Math.random() * deck.length))
        let locationTwo = Math.floor((Math.random() * deck.length))
        let tmp = deck[locationOne]
        deck[locationOne] = deck[locationTwo]
        deck[locationTwo] = tmp
    }
    console.log(deck)
}

