const header = document.querySelector("header")
window.addEventListener("scroll", function(){
  header.classList.toggle("sticky" , this.window.scrollY > 0)
})

let menu = document.querySelector("#menu-bar")
let navMenu = document.querySelector(".nav-menu")

menu.onclick = () => {
  menu.classList.toggle("bx-x");
  navMenu.classList.toggle("open");
}

