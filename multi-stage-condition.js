var myMoney = 100 ;
var cream = 400 ;
var chocolate = 400 ;
var headphone = 700 ;

if (cream <= myMoney){
    console.log('ami kinlam cream akhone..');
    return myMoney = myMoney - cream;
}
else if (chocolate <= myMoney){
    console.log('ami chocolate kinlam akhon');
    return myMoney = myMoney - chocolate;
}
else if(headphone <= myMoney){
    console.log('ami headphone oo kinlam..');
    return myMoney = myMoney - headphone;
}
else{
    console.log('ar kinte parbo na');
}