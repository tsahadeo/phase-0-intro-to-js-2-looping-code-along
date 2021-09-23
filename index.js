const thankYouCards = ["Ada", "Brendan", "Ali"];

function writeCards(thankYouCards){
    let message = []
for (let i = 0; i < thankYouCards.length; i++){
    message.push( `Thank you, ${thankYouCards[i]}, for the wonderful surprise gift!`)
    }
    return message
}

function countDown(){
    let countDown = 10
    while (countDown > -1) {
        console.log(countDown--)
    } 
}
