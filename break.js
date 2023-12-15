var point = [23,25,25,45,84,45,55];

for(var i = 0 ; i < point.length; i++){
    var points = point[i];
    console.log(points);
    if(i < 1){
        break;
    }
}

var roastGiven = 0;

while(roastGiven < 7){
    console.log('ar koto dibo ami');
    roastGiven++;
    if(roastGiven > 4){
        break;
    }
}

var names = ['sagor','habiba','safa','sidratul'];

for(var i = 0 ; i < names.length ; i++){
    var named = names[i];
    console.log(named);
    if (named == 'habiba'){
        break;
    }
}