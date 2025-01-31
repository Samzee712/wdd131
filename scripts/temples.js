document.addEventListener("DOMContentLoaded", function () {
    // Dynamic year in footer
    document.getElementById("currentYear").textContent = new Date().getFullYear();

    // Last modified date
    document.getElementById("lastModified").textContent = `Last Modified: ${document.lastModified}`;

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
