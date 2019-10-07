// Using https://www.thatsoftwaredude.com/content/6196/coding-a-card-deck-in-javascript as a base

// Creating the deck
const deck = [
    twoSpade = {
        value: 2,
        suit: 'Spade',
        src: 'img/cards/spades/2.png'
    },

    threeSpade = {
        value: 3,
        suit: 'Spade',
        src: 'img/cards/spades/3.png'
    },

    fourSpade = {
        value: 4,
        suit: 'Spade',
        src: 'img/cards/spades/4.png'
    },

    fiveSpade = {
        value: 5,
        suit: 'Spade',
        src: 'img/cards/spades/5.png'
    },

    sixSpade = {
        value: 6,
        suit: 'Spade',
        src: 'img/cards/spades/6.png'
    },

    sevenSpade = {
        value: 7,
        suit: 'Spade',
        src: 'img/cards/spades/7.png'
    },

    eightSpade = {
        value: 8,
        suit: 'Spade',
        src: 'img/cards/spades/8.png'
    },

    nineSpade = {
        value: 9,
        suit: 'Spade',
        src: 'img/cards/spades/9.png'
    },

    tenSpade = {
        value: 10,
        suit: 'Spade',
        src: 'img/cards/spades/10.png'
    },

    jackSpade = {
        value: 10,
        suit: 'Spade',
        src: 'img/cards/spades/J.png'
    },

    queenSpade = {
        value: 10,
        suit: 'Spade',
        src: 'img/cards/spades/Q.png'
    },

    kingSpade = {
        value: 10,
        suit: 'Spade',
        src: 'img/cards/spades/K.png'
    },

    aceSpade = {
        value: '',
        suit: 'Spade',
        src: 'img/cards/spades/A.png'
    },

    twoClub = {
        value: 2,
        suit: 'Club',
        src: 'img/cards/clubs/2.png'
    },

    threeClub = {
        value: 3,
        suit: 'Club',
        src: 'img/cards/clubs/3.png'
    },

    fourClub = {
        value: 4,
        suit: 'Club',
        src: 'img/cards/clubs/4.png'
    },

    fiveClub = {
        value: 5,
        suit: 'Club',
        src: 'img/cards/clubs/5.png'
    },

    sixClub = {
        value: 6,
        suit: 'Club',
        src: 'img/cards/clubs/6.png'
    },

    sevenClub = {
        value: 7,
        suit: 'Club',
        src: 'img/cards/clubs/7.png'
    },

    eightClub = {
        value: 8,
        suit: 'Club',
        src: 'img/cards/clubs/8.png'
    },

    nineClub = {
        value: 9,
        suit: 'Club',
        src: 'img/cards/clubs/9.png'
    },

    tenClub = {
        value: 10,
        suit: 'Club',
        src: 'img/cards/clubs/10.png'
    },

    jackClub = {
        value: 10,
        suit: 'Club',
        src: 'img/cards/clubs/J.png'
    },

    queenClub = {
        value: 10,
        suit: 'Club',
        src: 'img/cards/clubs/Q.png'
    },

    kingClub = {
        value: 10,
        suit: 'Club',
        src: 'img/cards/clubs/K.png'
    },

    aceClub = {
        value: 1 || 11,
        suit: 'Club',
        src: 'img/cards/clubs/A.png'
    },

    twoDiamonds = {
        value: 2,
        suit: 'Diamonds',
        src: 'img/cards/diamonds/2.png'
    },

    threeDiamonds = {
        value: 3,
        suit: 'Diamonds',
        src: 'img/cards/diamonds/3.png'
    },

    fourDiamonds = {
        value: 4,
        suit: 'Diamonds',
        src: 'img/cards/diamonds/4.png'
    },

    fiveDiamonds = {
        value: 5,
        suit: 'Diamonds',
        src: 'img/cards/diamonds/5.png'
    },

    sixDiamonds = {
        value: 6,
        suit: 'Diamonds',
        src: 'img/cards/diamonds/6.png'
    },

    sevenDiamonds = {
        value: 7,
        suit: 'Diamonds',
        src: 'img/cards/diamonds/7.png'
    },

    eightDiamonds = {
        value: 8,
        suit: 'Diamonds',
        src: 'img/cards/diamonds/8.png'
    },

    nineDiamonds = {
        value: 9,
        suit: 'Diamonds',
        src: 'img/cards/diamonds/9.png'
    },

    tenDiamonds = {
        value: 10,
        suit: 'Diamonds',
        src: 'img/cards/diamonds/10.png'
    },

    jackDiamonds = {
        value: 10,
        suit: 'Diamonds',
        src: 'img/cards/diamonds/J.png'
    },

    queenDiamonds = {
        value: 10,
        suit: 'Diamonds',
        src: 'img/cards/diamonds/Q.png'
    },

    kingDiamonds = {
        value: 10,
        suit: 'Diamonds',
        src: 'img/cards/diamonds/K.png'
    },

    aceDiamonds = {
        value: 1 || 11,
        suit: 'Diamonds',
        src: 'img/cards/diamonds/A.png'
    },

    twoHearts = {
        value: 2,
        suit: 'Hearts',
        src: 'img/cards/hearts/2.png'
    },

    threeHearts = {
        value: 3,
        suit: 'Hearts',
        src: 'img/cards/hearts/3.png'
    },

    fourHearts = {
        value: 4,
        suit: 'Hearts',
        src: 'img/cards/hearts/4.png'
    },

    fiveHearts = {
        value: 5,
        suit: 'Hearts',
        src: 'img/cards/hearts/5.png'
    },

    sixHearts = {
        value: 6,
        suit: 'Hearts',
        src: 'img/cards/hearts/6.png'
    },

    sevenHearts = {
        value: 7,
        suit: 'Hearts',
        src: 'img/cards/hearts/7.png'
    },

    eightHearts = {
        value: 8,
        suit: 'Hearts',
        src: 'img/cards/hearts/8.png'
    },

    nineHearts = {
        value: 9,
        suit: 'Hearts',
        src: 'img/cards/hearts/9.png'
    },

    tenHearts = {
        value: 10,
        suit: 'Hearts',
        src: 'img/cards/hearts/10.png'
    },

    jackHearts = {
        value: 10,
        suit: 'Hearts',
        src: 'img/cards/hearts/J.png'
    },

    queenHearts = {
        value: 10,
        suit: 'Hearts',
        src: 'img/cards/hearts/Q.png'
    },

    kingHearts = {
        value: 10,
        suit: 'Hearts',
        src: 'img/cards/hearts/K.png'
    },

    aceHearts = {
        value: 1 || 11,
        suit: 'Hearts',
        src: 'img/cards/hearts/A.png'
    },
];
console.log(deck)

// Creating the cards
let hit = () => {
    let cardInHand = []
    let topCard = deck.pop()
    let cardValue = ''
    cardInHand.push(topCard)
    // console.log(cardInHand[i].value)

    // Adding the values together
    for( let i = 0; i < cardInHand.length; i++) {
        if (cardInHand.length === 0) {
            cardValue = cardInHand[i].value
            console.log(cardValue)
        } //esle cardValue === 21 run victory

        const addTogether = (cardInHand[i].value) => {
        let a = cardInHand[i], b = cardInHand[i-1], temp;
            temp = a
            a = a + b
            b = temp

        }   return b
    }
    
    // Placing the card in the UI
    let card = document.createElement('img')
    card.setAttribute("src", topCard.src)
    const hand = document.getElementsByClassName('player-hand')[0]
    hand.append(card)
}



const hitButton = document.getElementById('hit')
hitButton.addEventListener('click', hit)
// console.log(hitButton)

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

// Moving card from deck to hand

// if player has no cards or winner declared, deal 2 cards on hit. Otherwise, deal one