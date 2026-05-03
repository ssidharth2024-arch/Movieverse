let moviesContainer = document.getElementById("moviesContainer");
let searchInput = document.getElementById("searchInput");
let searchBtn = document.getElementById("searchBtn");
let yearFilter = document.getElementById("yearFilter");

// 🔑 YOUR API KEY (used directly)
let apiKey = "3c2526a1";

let allMovies = [];

// MAIN FUNCTION
async function searchMovie(movieName, titleText = "Search Results") {

  document.getElementById("trendingTitle").innerText = titleText;

  if (movieName.trim() === "") {
    moviesContainer.innerHTML = "<h2>Please enter a movie name</h2>";
    return;
  }

  moviesContainer.innerHTML = "<h2>Loading...</h2>";

  try {
    // ✅ DIRECT API CALL (no backend needed)
    const response = await fetch(
      `https://www.omdbapi.com/?apikey=${apiKey}&s=${movieName}`
    );

    const data = await response.json();

    if (data.Response === "True") {
      allMovies = data.Search;
      applyFilters();
    } else {
      moviesContainer.innerHTML = "<h2>No movie found</h2>";
    }

  } catch (error) {
    moviesContainer.innerHTML = "<h2>Error fetching data</h2>";
    console.log(error);
  }
}

// FILTER
function applyFilters() {
  let filteredMovies = [...allMovies];

  if (yearFilter.value !== "all") {
    filteredMovies = filteredMovies.filter(movie =>
      movie.Year.includes(yearFilter.value)
    );
  }

  displayMovies(filteredMovies);
}

// DISPLAY
function displayMovies(movies) {
  moviesContainer.innerHTML = "";

  if (movies.length === 0) {
    moviesContainer.innerHTML = "<h2>No movie found</h2>";
    return;
  }

  movies.forEach(movie => {
    let card = document.createElement("div");
    card.classList.add("movie-card");

    card.innerHTML = `
      <img src="${movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/300x450?text=No+Image"}">
      <h3>${movie.Title}</h3>
      <p>${movie.Year}</p>
    `;

    moviesContainer.appendChild(card);
  });
}

// EVENTS
searchBtn.addEventListener("click", () => {
  searchMovie(searchInput.value);
});

searchInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    searchMovie(searchInput.value);
  }
});

yearFilter.addEventListener("change", applyFilters);

// DEFAULT LOAD
window.addEventListener("load", () => {
  searchMovie("avengers", "Trending Movies");
});
