// //let firstCard = 10
// let secondCard = 4
// let cards = [firstCard, secondCard]//arry - ordered list of items
// let sum = firstCard + secondCard
// let hasBlackJack = false
// let isAlive = true
// let message = ""


// let messageEl = document.getElementById("message-el")
// let sumEl  = document.getElementById("sum-el")
// let cardsEl  = document.getElementById("cards-el")

// function startGame(){
//      renderGame()
// }

// function renderGame(){
//     sumEl.textContent = "Sum: " + sum
//     cardsEl.textContent = "Cards: " + cards[0] + " " + cards[1]
//     if (sum <= 20){
//         message = "Do you want to draw a new card?"
//     }else if(sum === 21){
//         message = "Wohoo! You've got Blackjack!"
    
//     }else {
//         message = "you're out of the game!"
//         isAlive = false
//     }
//   messageEl.textContent = message
  
// }

// function newCard(){
//    let card = 7

//    sum += card

//    cards.push(card)
//    console.log(cards)
//    renderGame()

 
// }


//example for my student
            //my array
let cards = [7,9,3,8,6]
                    
for(let i = 0; i < cards.length; i++){
    console.log(cards[i])
}