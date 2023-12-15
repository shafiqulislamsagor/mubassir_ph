//  String type variable
var bottle = 'water';
var bottleColor = 'yellow';
var perColor = 'blue';
// Number type variable 
var SunglassPrice = 120;
// Boolean type variable
var isExpensive = true;

var tableItems = ['bottle', 'pen', 'mouse', 'sunglass', 'pepar'];
// array ar index 3 k call korlam
var item3 = tableItems[3];
tableItems[4] = 'notebook';
var penIndex = tableItems.indexOf('pen');

// push pop

tableItems.pop();
tableItems.push('nai');

//conditional


if(tableItems.length > 4){
    // code exicute
}
else if(tableItems[3] == 'pen'){
    //code exicute
}
else{
    // code exicute
}