console.log('this is promises');

let prom1 = new Promise((resolve, reject)=>{
    let a = Math.random();
    if(a > 0.5){
        reject("NO the random number was not supported.")
    }
    else{
    setTimeout(() => {
        console.log('yes i am done');
        resolve("Aryan")
    }, 3000);}
})

let prom2 = new Promise((resolve, reject)=>{
    let a = Math.random();
    if(a > 0.5){
        reject("NO the random number was not supported 2.")
    }
    else{
    setTimeout(() => {
        console.log('yes i am done 2');
        resolve("Aryan 2")
    }, 1000);}
})

let p3 = Promise.all([prom1, prom2])
p3.then ((a) => {
    console.log(a);
}).catch(err=>{
        console.log(err)
})

// console.log('This is Promises');

// let prom1 = new Promise((resolve, reject) => {
//     let a = Math.random();
//     if (a < 0.5) {
//         reject("No random number was not supporting you")
//     }
//     else {
//         setTimeout(() => {
//             console.log("Yes I am done")
//             resolve("Harry")
//         }, 3000);
//     }
// })

// let prom2 = new Promise((resolve, reject) => {
//     let a = Math.random();
//     if (a < 0.5) {
//         reject("No random number was not supporting you 2")
//     }
//     else {
//         setTimeout(() => {
//             console.log("Yes I am done 2")
//             resolve("Harry 2")
//         }, 1000);
//     }
// })

 
// let p3 = Promise.race([prom1, prom2])
// p3.then((a)=>{
//     console.log(a)
// }).catch(err=>{
//     console.log(err)
// })