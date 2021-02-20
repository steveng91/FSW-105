//section A
//part 1
function fiveAndGreaterOnly(arr){
    const result = arr.filter(function(num){
        if(num >= 5)
            return num;
    });
    return result;
}
console.log(fiveAndGreaterOnly([3, 6, 8, 2]))
//part 2
function evensOnly(arr){
    const result = arr.filter(function(num){
        if(num % 2 == 0)
            return num;
    });
    return result
}
console.log(evensOnly([3, 6, 8, 2]))

//section B
//Part 1
function doubleNumbers(arr){
    const result = arr.map(function(num){
        return num * 2
    });
    return result
}
console.log(doubleNumbers([2, 5, 100]))

//part 2
function stringItUp(arr){
    const result = arr.map(function(num){
        return num.toString()
    });
    return result
}

console.log(stringItUp([2, 5, 100]))

//part 3
function capitalizeNames(arr){
    const result = arr.map(function(str){
       for(var i = 0; arr.length; i++)
        return str[i].toUpperCase() + str.slice(1).toLowerCase()
    })
    return result
}
console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"]))

//section c
//part 1

function total(arr){
    const result = arr.reduce(function(num, finalAddition){
        finalAddition = finalAddition + num;
        return finalAddition
    },0)
    return result
}
console.log(total([1, 2, 3]))

//part 2
function stringConcat(arr){
    const result = arr.reduce(function(num, finalString){
        finalString = num + finalString;
        return finalString
    },"")
    return result
}
console.log(stringConcat([1, 2, 3]))

//part 3
function totalVotes(arr){
    const result = arr.reduce(function(count, voters){
        return count + voters.voted
    },0);
    return result
}
var voters =[
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age: 55, voted: true},
    {name:'Tami' , age: 54, voted: true},
    {name:'Mary' , age: 31, voted: false},
    {name:'Becky' , age: 43, voted: false},
    {name:'Joey' , age: 41, voted: true},
    {name:'Jeff' , age: 30, voted: true},
    {name:'Zack' , age: 19, voted: false},
];
console.log(totalVotes(voters));

//section d
//part 1

function leastToGreatest(arr){
    const result = arr.sort(function(num1, num2){
        return num1 - num2
    });
    return result
}
console.log(leastToGreatest([1, 3, 5, 2, 90, 20]))

//part 2
function greatestToLeast(arr){
    const result = arr.sort(function(num1, num2){
        return num2 - num1
    });
    return result
}
console.log(greatestToLeast([1, 3, 5, 2, 90, 20]))

//part 3
function lengthSort(arr){
    const result = arr.sort(function(num1, num2){
        return num1.length - num2.length
    })
    return result
}
console.log(lengthSort(["dog","wolf","by","family","eaten"]))