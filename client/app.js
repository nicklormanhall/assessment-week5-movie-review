// console.log("Image Gallery");
const thumbContainer = document.getElementById("thumb-container");
const displayImage = document.getElementById("image-container");
const movieWrapper = document.getElementById("movieWrapper");
const images = [
  {
    url: "https://upload.wikimedia.org/wikipedia/en/f/f5/Damsel_2024_poster2.jpg",
    alt: "",
  },
  {
    url: "https://upload.wikimedia.org/wikipedia/en/3/37/Road_House_2024_poster.jpg",
    alt: "",
  },
  {
    url: "https://upload.wikimedia.org/wikipedia/en/5/52/Dune_Part_Two_poster.jpeg",
    alt: "",
  },
  {
    url: "https://upload.wikimedia.org/wikipedia/en/b/be/Godzilla_x_kong_the_new_empire_poster.jpg",
    alt: "",
  },
  {
    url: "https://upload.wikimedia.org/wikipedia/en/3/31/Ghostbusters_(2024)_poster.jpg",
    alt: "",
  },
  {
    url: "https://upload.wikimedia.org/wikipedia/en/3/31/Ghostbusters_(2024)_poster.jpg",
    alt: "",
  },
];
async function getMovie() {
  const response = await fetch("http://localhost:8080/movies");
  const movies = await response.json();
  //  movieWrapper.textContent = "";
  console.log(movies);
}

getMovie();
function preloadImage(url) {
  const link = document.createElement("link");
  link.rel = "preload";
  link.href = url;
  link.as = "image";
  document.head.appendChild(link);
}

//Creates Thumbnail
function createThumbnail() {
  images.forEach(function (image) {
    const img = document.createElement("img");
    img.src = image.url;
    img.alt = image.alt;
    img.tabIndex = 0; // Add tabindex for accessibility
    thumbContainer.appendChild(img);
    img.addEventListener("click", function () {
      createMainImage(image);
      img.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      }); //scrolls the thumbnail to the centre
    });
    // added for accessibility for the enter key
    img.addEventListener("keydown", function (event) {
      if (event.key === "Enter") {
        // Check if the pressed key is the return key
        createMainImage(image);
      }
    });

    preloadImage(image.url, image.alt);
  });
}

//Creates
function createMainImage(image) {
  displayImage.innerHTML = "";
  const mainImg = document.createElement("img");
  mainImg.src = image.url;
  mainImg.alt = image.alt;
  displayImage.appendChild(mainImg);
}

async function deleteMovie(movieId) {
  const response = await fetch(`http://localhost:8080/moviedelete/${movieId}`, {
    method: "DELETE",
  });
}
createThumbnail();
createMainImage(images[0]); //sets to first image in the array
