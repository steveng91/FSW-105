const readlineSync = require('readline-sync');
const name = readlineSync.question('What is your name traveller? ');
readlineSync.question('Hello ' + name + ' welcome to elfheim. You are the final hope against the darkness. Press enter to begin');

const foes = ['Frost Giant', 'Yeti', 'Hobgoblin', 'Bugbear'];
const treasure = [' a sword', ' armor', ' a shield', ' a helmet'];
var prize = [];
let userHealth = 60;
const options =['Exit','Print','Walk'];
let pickUp = treasure[Math.floor(Math.random()*treasure.length)];

function game(){
    const attackPower = Math.floor(Math.random() / 2 + 5 * 3 - 3);
    const foe = foes[Math.floor(Math.random() * foes.length)];
    let foesHealth = 50;
    const foesPower = Math.floor(Math.random() / 2 + 5 * 3 - 5);

    const index = readlineSync.keyInSelect(options, "What would you like to do next?");

    if(options[index] == 'Exit'){
        return userHealth = 0;
    }else if(options[index] == 'Print'){
        console.log(name + ': \n' + userHealth + '\ntreasure:' + pickUp);
    }else if(options[index] === 'Walk'){
        let key = Math.random();
        if(key <= .3){
            console.log('Walking');
        }else if(key >= .3){
            console.log(foe + ' appeared in a flash of light');

            while(foesHealth > 0 && userHealth > 0){
                const user = readlineSync.question('Choose your actions wisely. enter "r" to run or "a" to attack ');
                switch(user){
                    case 'r':
                        const run = Math.random();
                        if(run < .5){
                            console.log('As you try to run away, ' + foe + ' sends you flying. You recieve ' + foesPower + 'damage.');
                        }else{
                            console.log('You managed to escape... this  time');
                            break;
                        }
                    case 'a':
                        foesHealth -= attackPower;
                        console.log('You launched an attack against ' + foe + ' dealing ' + attackPower + ' damage'); 
                        userHealth -= foesPower;
                        console.log(foe + ' attacks you dealing ' + foesPower + ' damage.');
                    if(foesHealth <= 0){
                        console.log('You have defeated ' + foe + '\n' + foe + ' dropped' + pickUp);
                        let loot = Math.random();
                        if(loot <= 3){
                            prize.push(pickUp);
                        }
                        }else if(userHealth <= 0){
                            console.log('You have been defeated by ' + foe + ', accept it with dignity.')
                        }
                }
            }
        }
    }
}
while(userHealth > 0){
    userRestore = function(){
        userActive = true;
        userHealth = 60;
    };
    userRestore();
    game();
}