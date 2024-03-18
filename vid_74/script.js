let button = document.getElementById("btn")

button.addEventListener("dblclick",()=>{
    document.querySelector(".box").innerHTML="<b>yayyyy you were clicked"
})
button.addEventListener("contextmenu",()=>{
    document.querySelector(".box").innerHTML="<b>yayyyy you were clicked"
})

document.addEventListener("keydown",(e)=>{
    console.log(e.key, e.keyCode)
})