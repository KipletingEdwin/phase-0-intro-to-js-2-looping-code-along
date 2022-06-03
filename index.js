// Code your solutions in this file
function writeCards(arrayName, event){
    let thankCard = []
    for(let i = 0; i < arrayName.length; i++){
         let message =`Thank you, ${arrayName[i]}, for the wonderful ${event} gift!`
         thankCard.push(message)
    }
    return thankCard
}
function countDown(count){
    while(count >= 0){
        console.log(count--)
    }
}