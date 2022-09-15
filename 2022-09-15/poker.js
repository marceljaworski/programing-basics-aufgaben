const holeCardsPlayerOne = [
    {suit: "hearts",name: "7"},
    {suit: "clubs",name: "Ass"}
]

const holeCardsPlayerTwo = [
{suit: "hearts",name: "10"},
{suit: "hearts",name: "Queen"}
]

const communityCards = [
{suit: "checker",name: "King"},
{suit: "checker",name: "Ass"},
{suit: "clubs",name: "Queen"},
{suit: "spades",name: "8"},
{suit: "spades",name: "6"},
]
function getWinnerCards(holeCards, communityCards){
    holeCards1 = holeCards[0];
    holeCards2 = holeCards[1];

    count1= [];
    count2=[];
   
    for(obj of holeCards1){
        console.log("obj " + obj.name)
        for(item of communityCards){
            console.log("item" + item.name)
            if (obj.name == item.name) count1.push(item); 
        }
    }
    for(obj of holeCards2){
        console.log("obj " + obj.name)
        for(item of communityCards){
            console.log("item" + item.name)
            if (obj.name == item.name) count2.push(item); 
        }
    }
    console.log(count1.length)
    console.log(count2.length)
    return ;
}


console.log(getWinnerCards([holeCardsPlayerOne, holeCardsPlayerTwo], communityCards));// -> 1