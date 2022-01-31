const nav = document.querySelector('.nav-main');
const navStyle = window.getComputedStyle(nav);
const logo = document.querySelector('.logo-header');
const logoStyle = window.getComputedStyle(logo);
const kropkasburger = document.querySelector('.menu-hamburger');
const links = document.querySelectorAll(".nav-main > li > a");


// hamburger menu behavior for activation and for screen size change

function myFunction() {
    kropkasburger.classList.toggle("change");
    if (navStyle.getPropertyValue('display') === "none") {
        nav.style.display = "block";
        logo.style.display = "block";
      } else {
        nav.style.display = "none";
        nav.style.height = "auto";
        logo.style.display = "none";
      }
} 

function menuCheck() {
  const siteWidth = window.innerWidth;
  kropkasburger.classList.remove("change");
  if (siteWidth > 750) {
        nav.style["display"] = "flex";
        nav.style["flex-direction"] = "row";
        logo.style.display = "block";
  } else {
    nav.style["flex-direction"] = "column";
    nav.style.display = "none";
    nav.style.height = "auto";
    logo.style.display = "none";
    
  }
}

// Smooth scrolling for menu anchors

for (const link of links) {
  link.addEventListener("click", clickHandler);
}
 
function clickHandler(e) {
  if (e.currentTarget.href.includes('#')) {
    e.preventDefault();
 }
 
  const href = this.getAttribute("href");
 
  document.querySelector(href).scrollIntoView({
    behavior: "smooth"
  });

}

window.onresize = menuCheck;