function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

function openCradleDemo() {
    document.getElementById("cradleModal").style.display = "block";
}

function closeCradleDemo() {
    document.getElementById("cradleModal").style.display = "none";
}
