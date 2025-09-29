
/*document.addEventListener("DOMContentLoaded", () => {
 const nav = document.getElementById("mainNav");
 const section = document.querySelector("section");
 const navlinks = document.querySelector(".nav-links");

 window.addEventListener("scroll",function () {
   if(window.scrollY > 50){
   nav.classList.add("navbar-shrink");
   }else {
    nav.classList.remove("navbar-shrink");
   }
 });
 sections.forEach((section,i) =>{
   if(
      window.scrollY >= section.offsetTop - 60 && 
      window.scrollY < section.offsetTop + section.offsetHeight - 60 )
      {
       navlinks.forEach(link => link.classList.remove("active"));
       navlinks[i].classList.add("active");
      }
 })

});  */

 document.addEventListener("DOMContentLoaded", () => {
  const nav = document.getElementById("mainNav");
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav-link");

  window.addEventListener("scroll", () => {
    // Shrink navbar after 50px scroll
    if (window.scrollY > 50) {
      nav.classList.add("navbar-shrink");
    } else {
      nav.classList.remove("navbar-shrink");
    }

    // Highlight active link
    sections.forEach((section, i) => {
      if (
        window.scrollY >= section.offsetTop - 80 &&
        window.scrollY < section.offsetTop + section.offsetHeight - 80
      ) {
        navLinks.forEach(link => link.classList.remove("active"));
        navLinks[i].classList.add("active");
      }
    });
  });
});


