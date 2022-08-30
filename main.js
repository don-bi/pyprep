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