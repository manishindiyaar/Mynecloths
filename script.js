
document.addEventListener("DOMContentLoaded", function() {
    const slides = document.querySelectorAll(".slide");
    let currentSlide = 0;
  
    function showSlide(n) {
      slides.forEach(slide => slide.style.transform = `translateX(-${n * 100}%)`);
    }
  
    function nextSlide() {
      currentSlide = (currentSlide + 1) % slides.length;
      showSlide(currentSlide);
    }
  
    setInterval(nextSlide, 2000);
  });
  

