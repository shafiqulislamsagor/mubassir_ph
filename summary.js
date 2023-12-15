// Practice Problem 1:

var fruits = ['Apple','Banana','Orange'];
var indexNum = fruits.indexOf('Banana');
console.log(indexNum); 

fruits[1] = 'Mango';
console.log(fruits);
fruits.pop();
console.log(fruits);
fruits.push('Watermelon');
console.log(fruits);

// Practice Problem 2:

var me = 85;
var tom = 66;
var jane = 95;
var peter = 56;
var john = 40;

if (me <= 100){
    if(me >= 80){
        console.log('me position Grade A');
    }
    else if(me >= 60){
        console.log('me position Grade B')
    }
    else if(me >= 50){
        console.log('me position Grade C')
    }
    else if(me >= 40){
        console.log('me position Grade D')
    }
    else if(me <= 39 ){
        console.log('me position Grade F')
    }
}
if (tom <= 100){
    if(tom >= 80){
        console.log('tom position Grade A');
    }
    else if(tom >= 60){
        console.log('tom position Grade B')
    }
    else if(tom >= 50){
        console.log('tom position Grade C')
    }
    else if(tom >= 40){
        console.log('me position Grade D')
    }
    else if(tom <= 39 ){
        console.log('tom position Grade F')
    }
}
if (jane <= 100){
    if(jane >= 80){
        console.log('jane position Grade A');
    }
    else if(jane >= 60){
        console.log('jane position Grade B')
    }
    else if(jane >= 50){
        console.log('jane position Grade C')
    }
    else if(jane >= 40){
        console.log('jane position Grade D')
    }
    else if(jane <= 39 ){
        console.log('jane position Grade F')
    }
}
if (peter <= 100){
    if(peter >= 80){
        console.log('peter position Grade A');
    }
    else if(peter >= 60){
        console.log('peter position Grade B')
    }
    else if(peter >= 50){
        console.log('peter position Grade C')
    }
    else if(peter >= 40){
        console.log('peter position Grade D')
    }
    else if(peter <= 39 ){
        console.log('peter position Grade F')
    }
}
if (john <= 100){
    if(john >= 80){
        console.log('john position Grade A');
    }
    else if(john >= 60){
        console.log('john position Grade B')
    }
    else if(me >= 50){
        console.log('john position Grade C')
    }
    else if(john >= 40){
        console.log('john position Grade D')
    }
    else if(john <= 39 ){
        console.log('john position Grade F')
    }
}

// Practice Problem 3:

var num1 = 13 ;
var num2 = 79;
var num3 = 45;
let largest;

if(num1 >= num2 && num1 >= num3){
    largest = num1;
}
else if(num2 >= num1 && num2 >= num3){
    largest = num2;
}
else if(num3 >= num2 && num3 >= num1){
    largest = num3
}
console.log(largest);