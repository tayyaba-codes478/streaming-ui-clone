
const movies = [
  {
    id: 1, title: "Dune: Part Two", year: 2024, genre: "Sci-Fi",
    rating: "8.5", duration: "2h 46m", symbol: "D",
    subtitle: "BEYOND THE DESERT",
    bg: "linear-gradient(145deg,#c18a4e,#633b35 48%,#191925)",
    description: "On a vast desert world, destiny and power collide as a young leader faces the future of his people."
  },
  {
    id: 2, title: "The Dark Knight", year: 2008, genre: "Action",
    rating: "9.0", duration: "2h 32m", symbol: "K",
    subtitle: "RISE ABOVE FEAR",
    bg: "linear-gradient(145deg,#52606a,#26303a 48%,#11131b)",
    description: "A mysterious criminal pushes a city to its limits, challenging its heroes to make impossible choices."
  },
  {
    id: 3, title: "Interstellar", year: 2014, genre: "Sci-Fi",
    rating: "8.7", duration: "2h 49m", symbol: "I",
    subtitle: "BEYOND THE STARS",
    bg: "linear-gradient(145deg,#6b8b9a,#344a67 50%,#151827)",
    description: "A journey beyond the stars becomes a deeply human story about time, hope, family, and survival."
  },
  {
    id: 4, title: "The Grand Budapest Hotel", year: 2014, genre: "Drama",
    rating: "8.1", duration: "1h 39m", symbol: "G",
    subtitle: "A VERY GRAND STORY",
    bg: "linear-gradient(145deg,#ef9d9f,#b65c80 48%,#492f55)",
    description: "An eccentric hotel concierge and his young protégé become caught up in a delightful mystery."
  },
  {
    id: 5, title: "Spider-Man: Into the Spider-Verse", year: 2018, genre: "Animation",
    rating: "8.4", duration: "1h 57m", symbol: "S",
    subtitle: "LEAP INTO ANOTHER WORLD",
    bg: "linear-gradient(145deg,#e95a72,#633c8e 55%,#18213d)",
    description: "A young hero discovers that being extraordinary can mean learning to be yourself."
  },
  {
    id: 6, title: "Inception", year: 2010, genre: "Thriller",
    rating: "8.8", duration: "2h 28m", symbol: "IN",
    subtitle: "QUESTION REALITY",
    bg: "linear-gradient(145deg,#8d9b9b,#46505b 45%,#171b29)",
    description: "A skilled team enters the world of dreams, where every layer brings a new mystery."
  },
  {
    id: 7, title: "Mad Max: Fury Road", year: 2015, genre: "Action",
    rating: "8.1", duration: "2h 00m", symbol: "M",
    subtitle: "WITNESS THE WASTELAND",
    bg: "linear-gradient(145deg,#f1a44e,#c25336 50%,#3b2528)",
    description: "Across a breathtaking wasteland, a desperate escape becomes a fight for freedom."
  },
  {
    id: 8, title: "The Martian", year: 2015, genre: "Adventure",
    rating: "8.0", duration: "2h 24m", symbol: "A",
    subtitle: "ALONE BUT NOT DEFEATED",
    bg: "linear-gradient(145deg,#d68b65,#98533f 48%,#34242b)",
    description: "An astronaut stranded far from home uses science, courage, and creativity to survive."
  },
  {
    id: 9, title: "Coco", year: 2017, genre: "Animation",
    rating: "8.4", duration: "1h 45m", symbol: "C",
    subtitle: "REMEMBER YOUR ROOTS",
    bg: "linear-gradient(145deg,#f4b75d,#b74c63 52%,#473052)",
    description: "A young music lover discovers a colorful world filled with family, memories, and music."
  },
  {
    id: 10, title: "The Shawshank Redemption", year: 1994, genre: "Drama",
    rating: "9.3", duration: "2h 22m", symbol: "R",
    subtitle: "HOPE NEVER FADES",
    bg: "linear-gradient(145deg,#879c88,#52675f 50%,#202d34)",
    description: "An unlikely friendship reveals how hope can survive even the most difficult circumstances."
  },
  {
    id: 11, title: "A Quiet Place", year: 2018, genre: "Thriller",
    rating: "7.5", duration: "1h 30m", symbol: "Q",
    subtitle: "LISTEN CAREFULLY",
    bg: "linear-gradient(145deg,#82937c,#4a5b4d 48%,#1b2726)",
    description: "A family must navigate a dangerous world where every sound could change everything."
  },
  {
    id: 12, title: "The Lord of the Rings", year: 2001, genre: "Adventure",
    rating: "8.9", duration: "2h 58m", symbol: "L",
    subtitle: "ONE JOURNEY CHANGES ALL",
    bg: "linear-gradient(145deg,#b6a16b,#66724f 50%,#29352e)",
    description: "An unlikely group begins an epic journey to protect a world threatened by darkness."
  }
];


const posterImages = {
  1: "https://image.tmdb.org/t/p/w500/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg",
  2: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
  3: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
  4: "https://image.tmdb.org/t/p/w500/eWdyYQreja6JGCzqHWXpWHDrrPo.jpg",
  5: "https://image.tmdb.org/t/p/w500/iiZZdoQBEYBv6id8su7ImL0oCbD.jpg",
  6: "https://image.tmdb.org/t/p/w500/oYuLEt3zVCKq57qu2F8dT7NIa6f.jpg",
  7: "https://image.tmdb.org/t/p/w500/8tZYtuWezp8JbcsvHYO0O46tFbo.jpg",
  8: "https://image.tmdb.org/t/p/w500/5aGhaIHYuQbqlHWvWYqMCnj40y2.jpg",
  9: "https://image.tmdb.org/t/p/w500/gGEsBPAijhVUFoiNpgZXqRVWJt2.jpg",
  10: "https://image.tmdb.org/t/p/w500/9cqNxx0GxF0bflZmeSMuL5tnGzr.jpg",
  11: "https://image.tmdb.org/t/p/w500/nAU74GmpUk7t5iklEp3bufwDq4n.jpg",
  12: "https://image.tmdb.org/t/p/w500/6oom5QYQ2yQTMJIbnvbkBL9cHo6.jpg"
};

movies.forEach(movie => {
  movie.image = posterImages[movie.id];
});

const movieGrid = document.getElementById("movieGrid");
const watchlistGrid = document.getElementById("watchlistGrid");
const searchInput = document.getElementById("searchInput");
const filterRow = document.getElementById("filterRow");
const resultsLabel = document.getElementById("resultsLabel");
const emptyState = document.getElementById("emptyState");
const watchlistEmpty = document.getElementById("watchlistEmpty");
const movieTotal = document.getElementById("movieTotal");
const savedTotal = document.getElementById("savedTotal");
const watchlistCount = document.getElementById("watchlistCount");
const modal = document.getElementById("movieModal");
const toast = document.getElementById("toast");

let selectedGenre = "All";
let sortByRating = false;
let currentMovieId = null;
let toastTimeout;

function loadWatchlist() {
  try {
    const saved = JSON.parse(localStorage.getItem("streamora-watchlist") || "[]");
    return Array.isArray(saved)
      ? saved.filter(id => movies.some(movie => movie.id === id))
      : [];
  } catch {
    return [];
  }
}

let watchlist = loadWatchlist();

function saveWatchlist() {
  try {
    localStorage.setItem("streamora-watchlist", JSON.stringify(watchlist));
  } catch {
    showToast("Browser storage is unavailable.");
  }
}

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, char => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  })[char]);
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => toast.classList.remove("show"), 2300);
}


function movieCard(movie) {
  return `
    <article class="movie-card">
      <div class="poster" style="background: ${movie.bg}">
        <img
          class="poster-image"
          src="${movie.image}"
          alt="${movie.title} poster"
          loading="lazy"
          onerror="this.style.display='none'"
        >

        <span class="poster-number">
          ${String(movie.id).padStart(2, "0")}
        </span>

        <button
          class="save-btn"
          data-save="${movie.id}"
          aria-label="Add ${movie.title} to watchlist"
        >♡</button>

        <div class="poster-info">
          <span class="poster-badge">${movie.genre}</span>
          <h3>${movie.symbol}</h3>
          <p>${movie.subtitle}</p>
        </div>
      </div>

      <div class="movie-details">
        <div class="movie-heading">
          <h3>${movie.title}</h3>
          <span>★ ${movie.rating}</span>
        </div>
        <p>${movie.year} · ${movie.duration}</p>
        <button
          class="details-btn"
          data-details="${movie.id}"
        >View Details ↗</button>
      </div>
    </article>
  `;
}

function getFilteredMovies() {
  const query = searchInput.value.trim().toLowerCase();

  let filtered = movies.filter(movie => {
    const matchesGenre = selectedGenre === "All" || movie.genre === selectedGenre;
    const searchableText = `${movie.title} ${movie.genre} ${movie.year} ${movie.description}`.toLowerCase();
    return matchesGenre && searchableText.includes(query);
  });

  if (sortByRating) {
    filtered.sort((a, b) => Number(b.rating) - Number(a.rating));
  }

  return filtered;
}

function renderMovies() {
  const filtered = getFilteredMovies();

  movieGrid.innerHTML = filtered.map(movieCard).join("");
  emptyState.classList.toggle("hidden", filtered.length > 0);
  movieGrid.classList.toggle("hidden", filtered.length === 0);

  resultsLabel.textContent = `SHOWING ${filtered.length} OF ${movies.length} TITLES`;

  movieTotal.textContent = movies.length;
  updateWatchlist();
}

function updateWatchlist() {
  const savedMovies = watchlist
    .map(id => movies.find(movie => movie.id === id))
    .filter(Boolean);

  watchlistGrid.innerHTML = savedMovies.map(movieCard).join("");
  watchlistEmpty.classList.toggle("hidden", savedMovies.length > 0);
  watchlistGrid.classList.toggle("hidden", savedMovies.length === 0);

  savedTotal.textContent = savedMovies.length;
  watchlistCount.textContent = savedMovies.length;
}

function toggleWatchlist(id) {
  const movie = movies.find(item => item.id === id);
  if (!movie) return;

  if (watchlist.includes(id)) {
    watchlist = watchlist.filter(savedId => savedId !== id);
    showToast(`${movie.title} removed from your watchlist.`);
  } else {
    watchlist.push(id);
    showToast(`${movie.title} added to your watchlist!`);
  }

  saveWatchlist();
  renderMovies();

  if (currentMovieId === id) {
    updateModalSaveButton();
  }
}

function openMovieDetails(id) {
  const movie = movies.find(item => item.id === id);
  if (!movie) return;

  currentMovieId = id;

  document.getElementById("modalTitle").textContent = movie.title;
  document.getElementById("modalDescription").textContent = movie.description;

  document.getElementById("modalMeta").innerHTML = `
    <span>${movie.year}</span>
    <span>${escapeHTML(movie.genre)}</span>
    <span>${movie.duration}</span>
    <span>★ ${movie.rating}</span>
  `;

  const artwork = document.getElementById("modalArtwork");
  artwork.style.setProperty("--poster-bg", movie.bg);
  artwork.dataset.symbol = movie.symbol;
  artwork.innerHTML = `
    <div>
      <div class="poster-label">${escapeHTML(movie.title)}</div>
      <div class="poster-subtitle">${escapeHTML(movie.subtitle)}</div>
    </div>
  `;

  updateModalSaveButton();
  modal.classList.remove("hidden");
  document.body.style.overflow = "hidden";
  document.getElementById("closeModal").focus();
}

function updateModalSaveButton() {
  const button = document.getElementById("modalSave");
  const saved = watchlist.includes(currentMovieId);

  button.textContent = saved ? "♥ Remove from watchlist" : "♡ Add to watchlist";
  button.classList.toggle("btn-glass", saved);
  button.classList.toggle("btn-primary", !saved);
}

function closeMovieDetails() {
  modal.classList.add("hidden");
  document.body.style.overflow = "";
  currentMovieId = null;
}


function handleGridClick(event) {
  const detailsButton = event.target.closest("[data-details]");
  const saveButton = event.target.closest("[data-save]");

  if (detailsButton) {
    openMovieDetails(Number(detailsButton.dataset.details));
    return;
  }

  if (saveButton) {
    toggleWatchlist(Number(saveButton.dataset.save));
  }
}

movieGrid.addEventListener("click", handleGridClick);
watchlistGrid.addEventListener("click", handleGridClick);

movieGrid.addEventListener("keydown", event => {
  if (
    event.target.matches(".poster[data-action='details']") &&
    (event.key === "Enter" || event.key === " ")
  ) {
    event.preventDefault();
    openMovieDetails(Number(event.target.dataset.id));
  }
});

searchInput.addEventListener("input", renderMovies);

filterRow.addEventListener("click", event => {
  const chip = event.target.closest("[data-genre]");
  if (!chip) return;

  selectedGenre = chip.dataset.genre;

  filterRow.querySelectorAll(".filter-chip").forEach(button => {
    const selected = button === chip;
    button.classList.toggle("selected", selected);
    button.setAttribute("aria-pressed", String(selected));
  });

  renderMovies();
});

document.getElementById("sortButton").addEventListener("click", event => {
  sortByRating = !sortByRating;
  event.currentTarget.textContent = sortByRating
    ? "Sort: Top rated ↓"
    : "Sort: Featured ↕";
  renderMovies();
});

document.getElementById("resetButton").addEventListener("click", () => {
  searchInput.value = "";
  selectedGenre = "All";

  filterRow.querySelectorAll(".filter-chip").forEach(button => {
    const selected = button.dataset.genre === "All";
    button.classList.toggle("selected", selected);
    button.setAttribute("aria-pressed", String(selected));
  });

  renderMovies();
});

document.getElementById("heroWatchlist").addEventListener("click", () => {
  document.getElementById("watchlist").scrollIntoView({ behavior: "smooth" });
});

document.getElementById("closeModal").addEventListener("click", closeMovieDetails);
document.getElementById("modalBackdrop").addEventListener("click", closeMovieDetails);

document.addEventListener("keydown", event => {
  if (event.key === "Escape" && !modal.classList.contains("hidden")) {
    closeMovieDetails();
  }
});

document.getElementById("modalSave").addEventListener("click", () => {
  if (currentMovieId !== null) {
    toggleWatchlist(currentMovieId);
  }
});

renderMovies();


document.getElementById("watchNowBtn").addEventListener("click", () => {
  const movie = movies.find(item => item.id === currentMovieId);

  if (movie) {
    const youtubeUrl =
      "https://www.youtube.com/results?search_query=" +
      encodeURIComponent(movie.title + " official trailer");

    window.open(youtubeUrl, "_blank", "noopener,noreferrer");
  }
});
