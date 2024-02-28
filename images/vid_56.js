var readlineSync = require('readline-sync');

var age = readlineSync.question('May I have your age ');
if(age<18){
    console.log("you cannot drive")
}
else{
    console.log("you can drive")
}