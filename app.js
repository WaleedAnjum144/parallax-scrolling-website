let text = document.getElementById("text");
let leaf = document.getElementById("leaf");
let hill1 = document.getElementById("hill1");
let hill4 = document.getElementById("hill4");
let hill5 = document.getElementById("hill5");

const  links = document.querySelectorAll(".navigation a");


links.forEach(link=>{
    link.addEventListener("click",() =>{
        links.forEach(link => link.classList.remove("active"));
        link.classList.add("active");
    });
});







window.addEventListener("scroll", () => {
  let value = window.scrollY;
  text.style.marginTop = value * 2.5 + "px"
  leaf.style.top = value * -1.5 + "px";
  leaf.style.left = value * 1.5 + "px";
  hill5.style.left = value * 1.5 + "px";
  hill4.style.left = value * -1.5 + "px";
  hill1.style.top = value * 1 + "px";
});

