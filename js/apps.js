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

// Objects for the player and house
let player = {
    handValue: 0,
    handArr: []
}

let house = {
    handValue: 0,
    handArr: []
}

// Creating the cards
let hit = () => {
    let topCard = deck.pop()
    let newVal = topCard.value + player.handValue
    player.handValue = newVal
    player.handArr.push(topCard)
    console.log(player.handValue)
    
    // Placing the card in the UI
    let card = document.createElement('img')
    card.setAttribute("src", topCard.src)
    card.setAttribute("class", "card")
    const hand = document.getElementsByClassName('player-hand')[0]
    hand.append(card)
}

// Event listener for hit 
const hitButton = document.getElementById('hit')
hitButton.addEventListener('click', hit)

// Creating stand
const stand = () => {

    let houseHit = () => {
        let topCard = deck.pop()
        let newVal = topCard.value + house.handValue
        house.handValue = newVal
        house.handArr.push(topCard)
        console.log(house.handValue)
        
        // Placing the card in the UI
        let card = document.createElement('img')
        card.setAttribute("src", topCard.src)
        card.setAttribute("class", "card")
        const hand = document.getElementsByClassName('dealer-hand')[0]
        hand.append(card)
    }

    for(let i = 0; i < 10; i++) {
        // if house.handValue > 21 ---> alert Player wins!
        if(house.handValue > 21) {
            alert('The player wins!')
            console.log('first case runs')
            return
        } 
        // else if house.handValue === 21 ---> compare to player.handValue 
        else if(house.handValue === 21) {
            if(house.handValue > player.handValue) {
                alert('The house wins')
                console.log('2.1 runs')
            } else if(house.handValue === player.handValue) {
                alert("Draw Game")
                console.log('2.2 runs')
            }
            console.log('Second case runs')
        } 
        // otherwise hit again
        else if(house.handValue < 18) {
            houseHit()
            console.log('Third case runs')
        }
    }
}
const standButton = document.getElementById('stand')
standButton.addEventListener('click', stand)

// Creating deal
const deal = () => {
    // check if playerHand and houseHand have a .length of more than 0
    for(let i = 0; i < player.handArr.length; i++) {
        if(player.handArr.length > 0) {
        let returnToDeck = player.handArr.pop()
        deck.push(returnToDeck)
        }
    }
    for( let i = 0; i < player.handArr.length; i++){
        if(player.handArr.length > 0){
            let returnToDeckHouse = house.handArr.pop()
            deck.push(returnToDeckHouse)
        }
    }
    // if more than 0, pop() both arrays and push() both cards back into the deck
    // once playerHand and houseHand are empty run shuffle
    shuffle(deck)
    // hit player twice
    for(let i = 0; i = 2; i++) {
        hit()
    }
    // hit dealer twice
}

const dealButton = document.getElementById('deal')
dealButton.addEventListener('click', deal)

// Win condition
// house.handValue < player.handValue <= 21  

// Aces

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

// if player has no cards or winner declared, deal 2 cards on hit. Otherwise, deal one