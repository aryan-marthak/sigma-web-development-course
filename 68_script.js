console.log("aryan")

// let iron = document.getElementsByClassName("box")

// console.log(iron)
// iron[2].style.backgroundColor="red"

// document.getElementById("red").style.backgroundColor="green"

// document.querySelector(".box").style.backgroundColor ="red"
console.log(document.querySelectorAll(".box"))

document.querySelectorAll(".box").forEach(e=>{
    e.style.backgroundColor="magenta"
})