var numbers = [78,834,83,39];
var num = [55,44,55,22,88]
//use push to add element to an array as the array as the last Element array
numbers.push(20);
numbers.pop();
numbers.splice(0,0,550);
var newNumbers = numbers.concat(num)
console.log(newNumbers);

// same string ar jonnow
var friend = ["Sagor","Habiba"];
friend.push("Safa");
friend.push('Sidratul');
var element = friend.pop();
friend.unshift('k ami');
friend.splice(2,0,'tui');
var newFriend = friend.concat('rahim','mubassir','rima')
console.log(newFriend);