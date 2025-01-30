document.addEventListener("DOMContentLoaded", function () {
    const temperature = parseFloat(document.getElementById("temperature").textContent);
    const windSpeed = parseFloat(document.getElementById("windSpeed").textContent);

    function calculateWindChill(temp, wind) {
        return 35.74 + (0.6215 * temp) - (35.75 * Math.pow(wind, 0.16)) + (0.4275 * temp * Math.pow(wind, 0.16));
    }

    function updateWindChill() {
        let windChillOutput = "N/A";
        if (temperature <= 50 && windSpeed > 3) {
            windChillOutput = calculateWindChill(temperature, windSpeed).toFixed(2) + "°F";
        }
        document.getElementById("windChill").textContent = windChillOutput;
    }

    updateWindChill();
});
