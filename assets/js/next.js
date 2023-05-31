const next = document.getElementById("next");
const first = document.querySelector(".first");
const second = document.querySelector(".second");

let clicked = 0

next.addEventListener("click", () => {
    next.classList.toggle("rotated");
    if (clicked==0) {   
  second.classList.add("active");
  second.classList.remove("deactive");
  first.classList.add("deactive");
  clicked = 1
} else if (clicked==1) {
    first.classList.add("active");
    first.classList.remove("deactive");
    second.classList.add("deactive");
    clicked = 0
}

});
