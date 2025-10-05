// Shop button action
document.getElementById("shop-btn").addEventListener("click", () => {
  alert("Redirecting to shop page...");
});


// Search button action
document.getElementById("search-btn").addEventListener("click", () => {
  const query = document.querySelector(".search-box input").value;
  if (query.trim() === "") {
    alert("Please enter something to search.");
  } else {
    alert(`Searching for: ${query}`);
  }
});


const slides = document.querySelector('.slides');
const slideImages = document.querySelectorAll('.slides img');
const totalSlides = slideImages.length;
let index = 0;

// ✅ Select elements safely after DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelector(".slides");
  const images = document.querySelectorAll(".slides img");
  const nextBtn = document.querySelector(".next");
  const prevBtn = document.querySelector(".prev");

  if (!slides || images.length === 0) return; // safety check

  let index = 0;
  const totalSlides = images.length;

  function showSlide(i) {
    if (i < 0) index = totalSlides - 1;
    else if (i >= totalSlides) index = 0;
    else index = i;

    slides.style.transform = `translateX(-${index * 100}%)`;
  }

  function nextSlide() {
    showSlide(index + 1);
  }

  function prevSlide() {
    showSlide(index - 1);
  }

  // ✅ Manual buttons
  nextBtn?.addEventListener("click", () => {
    nextSlide();
    resetAuto();
  });

  prevBtn?.addEventListener("click", () => {
    prevSlide();
    resetAuto();
  });

  // ✅ Auto slide every 3s
  let autoSlide = setInterval(nextSlide, 3000);

  function resetAuto() {
    clearInterval(autoSlide);
    autoSlide = setInterval(nextSlide, 3000);
  }
});
