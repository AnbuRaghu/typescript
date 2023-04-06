var cardType;
(function (cardType) {
    cardType[cardType["Hearts"] = 0] = "Hearts";
    cardType[cardType["diamond"] = 1] = "diamond";
    cardType[cardType["club"] = 2] = "club";
})(cardType || (cardType = {}));
var myCard = cardType.Hearts;
console.log(myCard); //0
var cardType_1;
(function (cardType_1) {
    cardType_1[cardType_1["Hearts"] = 1] = "Hearts";
    cardType_1[cardType_1["diamond"] = 2] = "diamond";
    cardType_1[cardType_1["club"] = 3] = "club";
})(cardType_1 || (cardType_1 = {}));
var myCard_1 = cardType_1.Hearts;
console.log(myCard_1); //1 we can modify the position of the index for an enum 
var cardName = cardType_1[2];
console.log(cardName);
