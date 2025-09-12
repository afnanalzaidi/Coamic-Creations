
document.addEventListener("DOMContentLoaded",()=>{
    console.log("ScrollY:", window.scrollY);
 const nav = document.getElementById("mainNav");

window.addEventListener("scroll",function () {
   if(window.scrollY > 50){
   nav.classList.add("navbar-shrink");
   }else {
    nav.classList.remove("navbar-shrink");
   }
 })

});