var readlineSync = require("readline-sync");
var playername = readlineSync.question("may I have your name, please? ")

var intromessage = `${playername}, Welcome to the Escape Room Simulation.`;
console.log(intromessage);

var isAlive = true;
var hasKey = false;

while(isAlive == true){
    const menuId = readlineSync.keyIn('Press 1 to put hand in hole \n Press 2 to find the key, or \n Press 3 to open the door', {limit: '$<1-3>'});
    if(menuId == 1){
        console.log("You are DEAD! Game over.");
        isAlive = false;
    }
    else if(menuId == 2 && hasKey == false){
        console.log(`${playername}, you have found the key, please proceed to menu option 3 next`)
        hasKey = true;
    }
    else if(menuId == 2 && hasKey == true){
        console.log(`${playername}, you already found the key, don't waste anymore time, please proceed to menu option 3 next`);
    }
    else if(menuId == 3 && hasKey == false){
        console.log(`${playername}, you need to find the key first.`)
    }
    else if(menuId == 3 && hasKey == true){
        console.log(`${playername}, you found the key and you opened the door. Congradulations, you escaped the simulation successfully.`)
    isAlive = false;
    }
}