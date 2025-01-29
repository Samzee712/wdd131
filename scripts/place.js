// Static temperature and wind speed (replace with API values later)
const temperature = 40; // °F
const windSpeed = 5; // mph

// Function to calculate wind chill
function calculateWindChill(temp, wind) {
    return (
        35.74 + (0.6215 * temp) - (35.75 * Math.pow(wind, 0.16)) + (0.4275 * temp * Math.pow(wind, 0.16))
    ).toFixed(1); // Round to 1 decimal place
}

// Function to update the wind chill display
function displayWindChill() {
    let windChillElement = document.getElementById("windChill");

    // Check if conditions meet the wind chill calculation criteria
    if (temperature <= 50 && windSpeed > 3) {
        windChillElement.textContent = calculateWindChill(temperature, windSpeed) + " °F";
    } else {
        windChillElement.textContent = "N/A";
    }
}

// Function to update last modified date
function updateLastModified() {
    document.getElementById("lastModified").textContent = document.lastModified;
}

// Run the functions when the page loads
document.addEventListener("DOMContentLoaded", () => {
    displayWindChill();
    updateLastModified();
});
