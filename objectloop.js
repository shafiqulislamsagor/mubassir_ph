var shoppingCart = {
    book: 3,
    sunglass:1,
    keyboard:5,
    mouse:1,
    pen:25,
    shoes:2
}
console.log('hudai respons korlam ar ki kisu mone koro na')

console.log(shoppingCart['book'])

const keys = Object.keys(shoppingCart);
console.log(keys);

const values = Object.values(shoppingCart);
console.log(values);
console.log('Aj theke course srt');
console.log('aj amnei korlam ar ki')


for (var i = 0; i < keys.length; i++){
    let add = keys[i];
    let poperty = shoppingCart[add];
    console.log(add,poperty)

}

for(var some in shoppingCart){
    const value = shoppingCart[some]
    console.log(some,value)
}