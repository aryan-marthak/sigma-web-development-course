var num = prompt("enter the number you want factorial of : ")
let arr = [];
// var flag = 1
// for(num ; num>0 ; num--){
//     flag = flag * num
// }
// console.log(flag)


for(num ; num>0 ; num--){
    temp = num
    arr.push(temp)
}
// console.log(arr);
const redu = (a,b) =>{
    return a*b;
}
console.log(arr.reduce(redu));

// let arr2 = [1, 2, 3, 4, 5, 6]

// const red = (a,b) => {
//     return a*b
// }
// console.log(arr2.reduce(red))
