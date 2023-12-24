let text1 = ' ';
let padded = text1.padStart(5 , "a");
let padd = text1.padEnd(4,"github")
console.log(padded);
console.log(padd)
console.log(padded.length)
let some = 'Shafiqul Islam sagor';
let char = some.charAt(7);
console.log(char);
let codeat = some.charCodeAt(2)
console.log(codeat);
let text = "Hello World";
text[0] = "A";
console.log(text)

let textt = "Hello World";
const myArray = textt.split("");
textt = "";
for (let i = 0; i<myArray.length;i++){
    text += myArray[i] 
}
console.log(textt)