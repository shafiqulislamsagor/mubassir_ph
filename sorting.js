const fruits = ["Banana","Apple","Mango","Lemon","Orange"];
const sorting = fruits.sort();
console.log(sorting);
const reversing = fruits.reverse();
console.log(reversing);

const point = [40,100,1,5,25,10];
const sam = point.sort(pointer);

function pointer(a,b){
    return a - b ;
}
console.log(sam);
const same = point.sort(pointt);
function pointt(a,b){
    return b - a;
}
console.log(same)