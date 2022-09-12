//for every logo tag, automatically adds the pyprep words
const logos = document.querySelectorAll(".logo");
console.log(logos);
logos.forEach(logo => {
    const py = document.createElement("span");
    py.classList.add("py");
    py.textContent = `PY`;
    const prep = document.createElement("span");
    prep.classList.add("prep");
    prep.textContent = `PREP`;
    logo.appendChild(py);
    logo.appendChild(prep);
})

//header sticky code
window.addEventListener("scroll", function(){
    const header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
})

//animation for title loading in
const title = document.querySelector(".main.index .one .title");
const titleTextArray = title.textContent.split("");
title.textContent = "";

let tick = 0;
let char = 0;
let timer = setInterval(onTick, 50);
let currentText = title.textContent;

function onTick(){
    let typing = "";
    if (tick%12=== 0) typing = "|";

    title.textContent = `${currentText}${typing}`;
    
    if ((tick < 34 || tick > 80)) {
        if (char < titleTextArray.length) {
            currentText += titleTextArray[char];
            char ++;
        }
        if (tick > 123){
            complete();
            return;
        }
    }
    tick ++;
}

function complete(){
    clearInterval(timer);
    timer = null;
    title.textContent = title.substring(0,title.textContent.length-1);
}