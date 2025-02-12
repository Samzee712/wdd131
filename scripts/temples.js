document.addEventListener("DOMContentLoaded", function () {
    // Footer Year and Last Modified Date
    document.getElementById("currentYear").textContent = new Date().getFullYear();
    document.getElementById("lastModified").textContent = document.lastModified;
    // Mobile Navigation Toggle
    const menuToggle = document.getElementById("menuToggle");
    const navMenu = document.getElementById("navMenu");

    menuToggle.addEventListener("click", function () {
        navMenu.classList.toggle("visible");
        const expanded = navMenu.classList.contains("visible");
        menuToggle.setAttribute("aria-expanded", expanded);
        menuToggle.textContent = expanded ? "✖" : "☰";
    });
});
