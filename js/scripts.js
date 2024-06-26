document.getElementById("burgerMenu").addEventListener("click", function() {
    var dropdownMenu = document.getElementById("dropdownMenu");
    var burgerMenu = document.getElementById("burgerMenu");

    if (dropdownMenu.style.display === "flex") {
        dropdownMenu.style.display = "none";
        burgerMenu.classList.remove("open");
    } else {
        dropdownMenu.style.display = "flex";
        burgerMenu.classList.add("open");
    }
});

window.addEventListener("resize", function() {
    var dropdownMenu = document.getElementById("dropdownMenu");
    var burgerMenu = document.getElementById("burgerMenu");

    if (window.innerWidth > 768) {
        dropdownMenu.style.display = "none";
        burgerMenu.classList.remove("open");
    }
});
