//scroll
window.onscroll= function(){
    const header = document.getElementById("nav")
    const scroll = header.offsetTop
    if(window.pageYOffset > scroll){
        header.classList.add("sticky")
    }
    else {
        header.classList.remove("sticky")
    }
}


// humburger
const humburger = document.getElementById("hamburger")
const nav = document.getElementById("nav-menu")
humburger.addEventListener("click",()=>{
    humburger.classList.toggle("humberger-active")
    nav.classList.toggle("hidden")
})