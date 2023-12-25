const myGirls = ['Cecilie','Lone'];
const myBoys = ['Emil','Tobias','Linus'];

const mychildren = myGirls.concat(myBoys);

console.log(mychildren);
const arr1 = ['Robin','Morgan'];

const myChildren = myBoys.concat(myGirls,arr1);
console.log(myChildren);

const added = arr1.concat('peter');

console.log(added);

const myArr = [[1,2],[3,4],[5,6]];
const newArr = myArr.flat();
console.log(newArr);

const names = [['sagor','habiba'],['rima','mubassir'],['arif','akhi']];
const nameArr = names.flat();
console.log(nameArr);

nameArr.splice(3,0,"limon","mustakim")
console.log(nameArr);

const rup = ['banana','orange','apple','mango'];
rup.splice(2,2);
console.log(rup)