const burger = document.getElementById("hamburger");
const list = document.getElementById("navlist");

burger.addEventListener("click", ()=>{
    
    list.classList.toggle("navlist-active")  /* variable list use, classlist is always use to add class, toggle use for show & hide */
})