function generator(){
    var rand = Math.random();
    return rand;
}

let first, second, third;

rand  = generator();
if(rand<0.33){
    first = "crazy"
}
else if(rand<0.66 && rand>=0.33){
    first = "amazing"
}  
else{
    first = "fire"
}


rand  = generator();
if(rand<0.33){
    second = "engine"
}
else if(rand<0.66 && rand>=0.33){
    second = "foods"
}  
else{
    second = "garment"
}


rand  = generator();
if(rand<0.33){
    third = "Bros"
}
else if(rand<0.66 && rand>=0.33){
    third = "Limited"
}  
else{
    third = "Hub"
}

console.log(`Your company name is ${first} ${second} ${third}.`);

