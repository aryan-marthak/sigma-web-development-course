console.log("hello myself Aryan")
console.log("hello myself Harsh")

setTimeout(() => {
    console.log("i am inside settimeout0") 
}, 2000);

setTimeout(() => {
    console.log("i am inside settimeout1") 
}, 2000);

console.log("hello myself monkey")

const loadScript = (src, callback) => {
  let sc = document.createElement("script");
  sc.src = src;
  sc.onload = (params) => {
    
  }
  
}

