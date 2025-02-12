document.addEventListener("DOMContentLoaded", function () {
    // Dynamic year in footer
    document.getElementById("currentYear").textContent = new Date().getFullYear();
    document.getElementById("lastModified").textContent = `Last Modified: ${document.lastModified}`;
  
    // Temple Data Array (11 temple objects)
    const temples = [
      {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
          "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
      },
      {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
          "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
      },
      {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
          "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
      },
      {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
          "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
      },
      {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
          "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
      },
      {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
          "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
      },
      {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
          "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
      },
      {
        templeName: "Accra Ghana",
        location: "Accra, Ghana",
        dedicated: "2004, January, 11",
        area: 17500,
        imageUrl:
          "https://churchofjesuschristtemples.org/assets/img/temples/accra-ghana-temple/accra-ghana-temple-13760-main.jpg"
      },
      {
        templeName: "Adelaide Australia",
        location: "Lower Portrush Rd Marden, South Australia",
        dedicated: "2000, June, 15",
        area: 10700,
        imageUrl:
          "https://churchofjesuschristtemples.org/assets/img/temples/adelaide-australia-temple/adelaide-australia-temple-4359-main.jpg"
      },
      {
        templeName: "Albuquerque New Mexico",
        location: "Albuquerque, New Mexico, United States",
        dedicated: "2000, March, 5",
        area: 34245,
        imageUrl:
          "https://churchofjesuschristtemples.org/assets/img/temples/albuquerque-new-mexico-temple/albuquerque-new-mexico-temple-56335-main.jpg"
      },
      {
        templeName: "Anchorage Alaska",
        location: "Anchorage, Alaska, United States",
        dedicated: "1999, January, 9",
        area: 11937,
        imageUrl:
          "https://churchofjesuschristtemples.org/assets/img/temples/anchorage-alaska-temple/anchorage-alaska-temple-56046-thumb.jpg"
      }
    ];
  
    const templeContainer = document.getElementById("templeContainer");
  
    function displayTemples(filteredTemples) {
      templeContainer.innerHTML = "";
      filteredTemples.forEach(temple => {
        let templeCard = `
          <div class="temple-card">
            <h3>${temple.templeName}</h3>
            <p>${temple.location}</p>
            <p>Dedicated: ${temple.dedicated}</p>
            <p>Size: ${temple.area} sq ft</p>
            <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
          </div>`;
        templeContainer.innerHTML += templeCard;
      });
    }
  
    // Initially display all temples
    displayTemples(temples);
  
    // Filtering Functionality
    document.querySelectorAll("nav a").forEach(anchor => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        let filter = this.getAttribute("data-filter");
        let filtered = temples.filter(temple => {
          if (filter === "old") {
            return parseInt(temple.dedicated.split(",")[0]) < 1900;
          }
          if (filter === "new") {
            return parseInt(temple.dedicated.split(",")[0]) > 2000;
          }
          if (filter === "large") {
            return temple.area > 90000;
          }
          if (filter === "small") {
            return temple.area < 10000;
          }
          return true; // For "all" filter
        });
        displayTemples(filtered);
      });
    });


    // Lazy-load images: Add event listeners to images to add the "lazy-loaded" class when loaded
    // This ensures that images fade in after loading.
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("lazy-loaded");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
  
    // Observe each temple image
    document.querySelectorAll(".temple-card img").forEach(img => {
      observer.observe(img);
    });
  });
  