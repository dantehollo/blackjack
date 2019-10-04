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

let parent = document.createElement('div')
let child = document.createElement('p')
parent.append(child)
console.log(parent.childNodes)

// Moving card from deck to hand
const hit = () => {
    let cardContainer = document.createElement('div')
    let card = deck.pop()
    // console.log(deck)
    document.getElementsByClassName('player-hand')[0].append(card)
}
// document.getElementById('hit').addEventListener('click', hit())


// if player has no cards or winner declared, deal 2 cards on hit. Otherwise, deal one
// 