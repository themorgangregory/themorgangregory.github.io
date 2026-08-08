// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Gallery lightbox
(function () {
  var triggers = document.querySelectorAll('.gallery-trigger');
  var lightbox = document.getElementById('lightbox');
  var lightboxImg = document.getElementById('lightbox-img');
  var lightboxCaption = document.getElementById('lightbox-caption');
  var closeBtn = document.querySelector('.lightbox-close');
  var prevBtn = document.querySelector('.lightbox-prev');
  var nextBtn = document.querySelector('.lightbox-next');
  var images = [];
  var current = 0;

  if (!lightbox || triggers.length === 0) return;

  // Build image list from the DOM buttons
  triggers.forEach(function (trigger) {
    images.push({
      src: trigger.getAttribute('data-full'),
      alt: trigger.querySelector('img').getAttribute('alt'),
      caption: trigger.closest('.gallery-item').querySelector('figcaption')
        ? trigger.closest('.gallery-item').querySelector('figcaption').textContent
        : ''
    });
  });

  function show(index) {
    current = (index + images.length) % images.length;
    var img = images[current];
    lightboxImg.src = img.src;
    lightboxImg.alt = img.alt;
    lightboxCaption.textContent = img.caption;
    lightbox.removeAttribute('hidden');
    document.body.style.overflow = 'hidden';
  }

  function close() {
    lightbox.setAttribute('hidden', '');
    document.body.style.overflow = '';
  }

  triggers.forEach(function (trigger, i) {
    trigger.addEventListener('click', function () {
      show(i);
    });
  });

  closeBtn.addEventListener('click', close);
  prevBtn.addEventListener('click', function () {
    show(current - 1);
  });
  nextBtn.addEventListener('click', function () {
    show(current + 1);
  });

  // Keyboard navigation
  document.addEventListener('keydown', function (e) {
    if (lightbox.hasAttribute('hidden')) return;
    if (e.key === 'Escape') close();
    if (e.key === 'ArrowLeft') show(current - 1);
    if (e.key === 'ArrowRight') show(current + 1);
  });

  // Click outside image to close
  lightbox.addEventListener('click', function (e) {
    if (e.target === lightbox) close();
  });
})();