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
        value: 11,
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
        value: 11,
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
        value: 11,
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
        value: 11,
        suit: 'Hearts',
        src: 'img/cards/hearts/A.png'
    },
];

// Objects for the Player and House
let player = {
    handValue: 0,
    handArr: []
}

let house = {
    handValue: 0,
    handArr: []
}

// Creating Scorecards
const playerScore = player.handValue
const houseScore = house.handValue

let playerHeading = document.getElementById('player-heading')
playerHeading.innerHTML = `Player: ${playerScore}`

let houseHeading = document.getElementById('house-heading')
houseHeading.innerHTML = `House: ${houseScore}`

// Switching Aces
const switchAces = (array) => {
    for( let i = 0; i < player.handArr.length; i++) {
        if(player.handArr[i].value === 11) {
            // console.log(player.handArr[i].value)
            player.handArr[i].value = 1
            oneAce = player.handArr[i]
            console.log(oneAce)
            calPlayerHand(oneAce)
            console.log(player.handArr)
            console.log('tripped')
        }
    }
}

const calPlayerHand = (keyValue) => {
    let newVal = keyValue.value + player.handValue
    player.handValue = newVal
    playerHeading.innerHTML = `Player: ${player.handValue}`
}

// Creating Hit
let hit = () => {
    let topCard = deck.pop()
    
    if(player.handValue < 21) {
        calPlayerHand(topCard, player.handValue)
    } else {
        // alert('Player Loses')
        switchAces(player.handArr)
    }
    player.handArr.push(topCard)
    // console.log(player.handValue)
    
    // Placing the Card in the UI
    let card = document.createElement('img')
    card.setAttribute("src", topCard.src)
    card.setAttribute("class", "card")
    const hand = document.getElementsByClassName('player-hand')[0]
    hand.append(card)

    if(player.handValue > 21) {
        setTimeout(() => {alert("Player Loses")}, 500
    )
    }
    console.log('player', player)
}

// Dealer's Hit
let houseHit = () => {
    let topCard = deck.pop()
    let newVal = topCard.value + house.handValue
    house.handValue = newVal
    houseHeading.innerHTML = `House: ${house.handValue}`
    house.handArr.push(topCard)
    // console.log(house.handValue)
    
    // Placing the card in the UI
    let card = document.createElement('img')
    card.setAttribute("src", topCard.src)
    card.setAttribute("class", "card")
    const hand = document.getElementsByClassName('house-hand')[0]
    hand.append(card)
    console.log('house', house)

}

// Creating stand
const stand = () => {

    for(let i = 0; i < 10; i++) {
        // if house.handValue > 21 ---> alert Player wins!
        if(house.handValue > 21) {
            setTimeout(() => {alert('The Player Wins!')}, 500)
            return
        } 
        // else if house.handValue === 21 ---> compare to player.handValue 
        else if(house.handValue === 21) {
            if(house.handValue > player.handValue) {
                setTimeout(() => {alert('The House Wins')}, 500)
            } else if(house.handValue === player.handValue) {
                setTimeout(() => {alert("Draw Game")}, 500)
            }
        } 
        // otherwise hit again
        else if(house.handValue < 18) {
            houseHit()
        } else {
            if(house.handValue > player.handValue) {
                alert('The House wins')
                return
            } else if(house.handValue === player.handValue) {
                alert('Draw Game')
                return
            } else if (house.handValue < player.handValue) {
                alert('The Player Wins')
                return
            }
        }
    }
}

// Creating deal
const deal = () => {
    // check if playerHand and houseHand have a .length of more than 0
    let z = player.handArr.length
    for(let i = 0; i < z; i++) {
        if(player.handArr.length > 0) {
            let returnToDeck = player.handArr.pop()
            let removeImage = document.getElementsByClassName('player-hand')[0]
            deck.push(returnToDeck)
            removeImage.removeChild(removeImage.lastChild)
            player.handValue = 0
            // console.log(returnToDeck)
        }
    }
    let x = house.handArr.length
    for( let i = 0; i < x; i++){
        if(house.handArr.length > 0){
            let returnToDeckHouse = house.handArr.pop()
            let removeHouseImage = document.getElementsByClassName('house-hand')[0]
            removeHouseImage.removeChild(removeHouseImage.lastChild)
            house.handValue = 0
            deck.push(returnToDeckHouse)
            // console.log(returnToDeckHouse)
        }
    }
    // once playerHand and houseHand are empty run shuffle
    shuffle(deck)

    // hit player twice
    for(let i = 0; i < 2; i++) {
        hit()
    }
    // hit dealer twice
    for(let i = 0; i < 2; i++) {
        houseHit()
    }
}

// Event listeners
const dealButton = document.getElementById('deal')
dealButton.addEventListener('click', deal)

const standButton = document.getElementById('stand')
standButton.addEventListener('click', stand)

const hitButton = document.getElementById('hit')
hitButton.addEventListener('click', hit)

// Shuffling the deck
const shuffle = (deck) => {
    for(let i = 0; i < 100; i++) {
        let locationOne = Math.floor((Math.random() * deck.length))
        let locationTwo = Math.floor((Math.random() * deck.length))
        let tmp = deck[locationOne]
        deck[locationOne] = deck[locationTwo]
        deck[locationTwo] = tmp
    }
    // console.log(deck)
}