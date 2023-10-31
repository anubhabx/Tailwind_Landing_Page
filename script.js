let menuBtn = document.getElementById("menu-btn");
let nav = document.getElementById("menu");

menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle("open");
    nav.classList.toggle("flex");
    nav.classList.toggle("hidden");
})