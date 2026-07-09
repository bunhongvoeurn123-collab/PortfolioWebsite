const sections = document.querySelectorAll("#fade-in");


window.addEventListener("scroll",()=>{

    sections.forEach(section=>{

        const position = section.getBoundingClientRect().top;

        if(position < window.innerHeight - 100){

            section.classList.add("show");

        }

    });

});

const hong = document.getElementById("hong");

const menu = document.getElementById("menu");


hong.addEventListener("click",()=>{

    menu.classList.toggle("active");

});


const themeBtn = document.getElementById("theme-btn");


themeBtn.addEventListener("click",()=>{

    document.body.classList.toggle("dark");

});

const navbar = document.getElementById("navbar");


window.addEventListener("scroll",()=>{


    if(window.scrollY > 50){

        navbar.classList.add("small");

    }else{

        navbar.classList.remove("small");

    }


});

const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {

    reveals.forEach((reveal) => {

        const windowHeight = window.innerHeight;

        const revealTop = reveal.getBoundingClientRect().top;

        if (revealTop < windowHeight - 100) {

            reveal.classList.add("active");

        }

    });

});