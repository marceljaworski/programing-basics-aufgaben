
function countdownSekunden(){
    let counter = 3;
    const interval = setInterval(function(){
        console.clear();
        
        console.log(counter)
        if(counter == 0){
            
            console.log(counter)
            console.clear();
            console.log(`End`);
            clearInterval(interval);
        }
        counter --;
        
    },1000);
    
};
if (process.argv[2]== "countdownSekunden") countdownSekunden();

function countdownMinuten(){
    let counter = 1;
    return setInterval(function(){
        console.clear();
        
        console.log(counter)
        if(counter == 0){
            console.clear();
            return console.log('End');
            
        }
        counter --;
        
    },60000);
    // minute: 60000;
    // stunde: 360000;

};
if (process.argv[2]== "countdownMinuten") console.log(countdownMinuten());