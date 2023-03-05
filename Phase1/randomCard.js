// Write a function called randomCard that generates a random card from a standard deck of playing cards (52 cards). A card is represented as a string in the format "Rank of Suit" (e.g. "Ace of Spades").
// The function should return an object containing the randomly generated card and it's value
function randonCard(){
    var ranks=["2","3","4","5","6","7","8","9","10","Jack","Queen", "King","Ace"]
    var suits = ['clubs','Diamonds', 'Hearts','Spades']
    var rankIndex= Math.floor(Math.random()*ranks.length)
    var rankval = ranks[rankIndex]
    var suitsIndex = Math.floor(Math.random()*suits.length)
    var suitVal = suits[suitsIndex]
    console.log(`${rankval} of ${suitVal}`)
    value = rankIndex+1
    console.log({card: `${rankval}`, value: `${value}`})
}

randonCard()
