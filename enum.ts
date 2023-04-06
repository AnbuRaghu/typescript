enum cardType{Hearts,diamond,club}
let myCard:cardType=cardType.Hearts
console.log(myCard)//0
enum cardType_1{Hearts=1,diamond,club}
let myCard_1:cardType_1=cardType_1.Hearts
console.log(myCard_1)//1 we can modify the position of the index for an enum 
let cardName:string=cardType_1[2]
console.log(cardName)// diamond as we set hearts as 1 the nxt position automatically becomes 2