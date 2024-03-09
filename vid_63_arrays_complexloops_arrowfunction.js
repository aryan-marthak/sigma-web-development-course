// let arr = [1, 2, 3, 4, 5, 6 ]

// console.log(arr);
// console.log(arr.length);
// console.log(arr[0]);


// foreach Loop

let a = [1, 2, 3, 4, 5, 6];

// a.forEach((value, index, arr)=>{
//     console.log(value, index, arr)
// })

// for in loop

// let obj = {
//     a: 2,
//     b: 3,
//     c: 4
// }

// for (const key in obj) {
//     if (Object.hasOwnProperty.call(obj, key)) {
//         const element = obj[key];
//         console.log(key, element)
//     }
// }

// for of loop

// for (const iterator of a) {

//     console.log(iterator)
    
// }
// for (const value of a) {

//     console.log(value)
    
// }



// map filter reduce 

let arr = [1, 3, 5, 7, 9]
// let newarr = []
// for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];
//     newarr.push(element**2)
//     }

let newarr = arr.map((e)=>{
    return e**2;
})
// console.log(newarr)

const greaterThanSeven = ((e)=>{
    if(e>3){
        return true
    }
    return false
})

console.log(newarr.filter(greaterThanSeven))

let arr2 = [1, 2, 3, 4, 5, 6]

const red = (a,b) => {
    return a*b
}
console.log(arr2.reduce(red))


// array.from ::::::::: this is a good function to use in projects as well
