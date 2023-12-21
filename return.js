function sum(sum1,sum2){
    console.log(sum1,sum2);
    var sum = sum1 + sum2;
    console.log(sum)
    return sum;
}

sum(20,23);

console.log(sum(20,20))
console.log("kisu din rest nitasi.. tumi kunda kow")

function singara(money){
    console.log("My money : ", money);
    var price = 10 ;
    console.log('Singara price :', price);
    var count = money/ price;
    return count;
}


var Taka = 1520;
var countSingara = singara(Taka);
console.log('Eating singaras: ',countSingara);
console.log('Eating singaras: ',countSingara);
