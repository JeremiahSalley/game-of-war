class Deck {
    constructor() {
        this.deck = []
       const suit = ["hearts", "spades", "clubs", "diamonds"]
       const rank = [1,2,3,4,5,6,7,8,9,10,11,12,13]
        for (let i of suit) {
           for (let j of rank) {
               this.deck.push([j,i])
           }
       }
   }
}

deck1 = new Deck()

class Deal {
   constructor() {
      this.playerOne = []
      this.playerTwo = []

       for (let i = 0;i < 52;i++) {
           let randIndex = deck1.deck.splice([Math.random()*(deck1.deck.length-1)],1)
           if (i % 2 === 0) {
               this.playerTwo.push(randIndex)
           }
           else {
               this.playerOne.push(randIndex)
           }

       }

   }

   
}



decks = new Deal()


startGame = () => {
    while (decks.playerOne.length > 0 && decks.playerTwo.length > 0) {
        if (decks.playerOne[0][0][0] > decks.playerTwo[0][0][0]) {
            decks.playerOne.push(decks.playerTwo[0],decks.playerOne[0])
            decks.playerOne.shift()
            decks.playerTwo.shift()
        }
        else if (decks.playerOne[0][0][0] < decks.playerTwo[0][0][0]) {
            decks.playerTwo.push(decks.playerOne[0],decks.playerTwo[0])
            decks.playerOne.shift()
            decks.playerTwo.shift()
        }
        else {
            
          if (decks.playerOne.length > 2 && decks.playerTwo.length > 2) {
            
          war = (i = 2) => {  
            console.log("war")
            if (decks.playerOne[i][0][0] > decks.playerTwo[i][0][0]) {
                for (let j=0;j<=i;j++) {
                decks.playerOne.push(decks.playerOne[j],decks.playerTwo[j])
                decks.playerOne.shift()
                decks.playerTwo.shift()
                }
            }
            else if (decks.playerOne[i][0][0] < decks.playerTwo[i][0][0]) {
                for (j=0;j<=i;j++) {
                decks.playerTwo.push(decks.playerOne[j],decks.playerTwo[j])
                decks.playerOne.shift()
                decks.playerTwo.shift()
                }
                    
            }
            else {
            war(i+=2)
            }
            
        }
         
        
        }
        else {
            if (decks.playerOne.length > decks.playerTwo.length ) {
                console.log("player 1 wins")
                break
            }
            else {
                console.log("player 2 wins")
                break
            }
        } 
        war()
        }     
           
        
    
        console.log(`player 1: ${decks.playerOne.length} player 2: ${decks.playerTwo.length}`)
    }
}



startGame()

