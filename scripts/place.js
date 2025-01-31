document.addEventListener("DOMContentLoaded", function () {
    // Footer Year and Last Modified Date
    document.getElementById("currentYear").textContent = new Date().getFullYear();
    document.getElementById("lastModified").textContent = document.lastModified;

    // Static values for Wind Chill Calculation
    const temperature = 40;
    const windSpeed = 5;

    function calculateWindChill(temp, wind) {
        return (
            35.74 + (0.6215 * temp) - (35.75 * Math.pow(wind, 0.16)) + (0.4275 * temp * Math.pow(wind, 0.16))
        ).toFixed(1);
    }

    function updateWindChill() {
        let windChillOutput = "N/A";
        if (temperature <= 50 && windSpeed > 3) {
            windChillOutput = calculateWindChill(temperature, windSpeed) + "°F";
        }
        document.getElementById("windChill").textContent = windChillOutput;
    }

    updateWindChill();
});
