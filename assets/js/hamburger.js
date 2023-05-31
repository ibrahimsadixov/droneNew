const menu = document.getElementById("menu")
const hamburger = document.getElementById("hamburger")
const closee = document.getElementById("close")

menu.addEventListener("click",()=>{
    hamburger.style.opacity="1"
    hamburger.style.width="100%"
})
closee.addEventListener("click",()=>{
    hamburger.style.width="0"
    hamburger.style.opacity="0"
})