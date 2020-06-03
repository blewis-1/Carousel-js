let slideIndex = 1;

const showSlides = (n) => {
  const slides = document.getElementsByClassName("mySlides");
  const dots = document.getElementsByClassName("dot");
  // Hiding Slides
  if (n > slides.length) {
    slideIndex = 1;
  }

  if (n < 1) {
    slideIndex = slides.length;
  }

  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // Dot Indicators
  for (let i = 0; i < dots.length; i++) {
    if (dots[i].classList.contains("active")) {
      dots[i].classList.remove("active");
    }
  }

  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].classList.add("active");
};
// connecting Arrows

// Right Arrow
const plusSlides = (n) => {
  showSlides((slideIndex += n));
};

const previousSlides = (n) => {
  showSlides((slideIndex -= n));
};

// Dot Indicators
const currentSlide = (n) => {
  showSlides((slideIndex = n));
};


setInterval(() => {
  showSlides(slideIndex);
  slideIndex++;
}, 3000);
