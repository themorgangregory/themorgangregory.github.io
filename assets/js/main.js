// Footer year (rendered only when a year element is present)
var yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Home photo carousel — non-interactive auto-advancing slideshow
(function () {
  var carousel = document.getElementById('carousel');
  if (!carousel) return;

  var slides = carousel.querySelectorAll('.carousel-slide');
  var total = slides.length;
  var current = 0;
  var interval = 3000; // ~3 seconds per image

  if (total < 2) return;

  function show(i) {
    current = (i + total) % total;
    slides.forEach(function (slide, k) {
      slide.classList.toggle('is-active', k === current);
    });
  }

  // Start on the first image.
  show(0);

  // Auto-advance, but respect users who prefer reduced motion.
  if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  setInterval(function () {
    show(current + 1);
  }, interval);
})();