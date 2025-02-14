document.addEventListener("DOMContentLoaded", function () {
    const products = [
        { id: "fc-1888", name: "Flux Capacitor" },
        { id: "fc-2050", name: "Power Laces" },
        { id: "fs-1987", name: "Time Circuits" },
        { id: "ac-2000", name: "Low Voltage Reactor" },
        { id: "jj-1969", name: "Warp Equalizer" }
    ];

    const productDropdown = document.getElementById("product");

    products.forEach(product => {
        let option = document.createElement("option");
        option.value = product.id;
        option.textContent = product.name;
        productDropdown.appendChild(option);
    });

     // Dynamic year in footer
     document.getElementById("currentYear").textContent = new Date().getFullYear();
     document.getElementById("lastModified").textContent = `Last Modified: ${document.lastModified}`;
   
}
);
