---
layout: default
title: Gallery — Morgan Gregory
---

<section class="page-hero">
  <div class="container">
    <h1>Gallery</h1>
  </div>
</section>

<section class="gallery-section">
  <div class="container">
    <div class="gallery-grid">
      {% for item in site.data.gallery %}
      <figure class="gallery-item">
        <button class="gallery-trigger" type="button" data-full="{{ '/assets/images/' | append: item.filename | relative_url }}" aria-label="View larger image: {{ item.alt }}">
          <img src="{{ '/assets/images/' | append: item.filename | relative_url }}" alt="{{ item.alt }}" loading="lazy">
        </button>
        {% if item.caption %}
        <figcaption>{{ item.caption }}</figcaption>
        {% endif %}
      </figure>
      {% endfor %}
    </div>
  </div>
</section>

<!-- Lightbox -->
<div class="lightbox" id="lightbox" role="dialog" aria-modal="true" aria-label="Image viewer" hidden>
  <button class="lightbox-close" type="button" aria-label="Close image viewer">&times;</button>
  <button class="lightbox-prev" type="button" aria-label="Previous image">&#8249;</button>
  <figure class="lightbox-content">
    <img id="lightbox-img" src="" alt="">
    <figcaption id="lightbox-caption"></figcaption>
  </figure>
  <button class="lightbox-next" type="button" aria-label="Next image">&#8250;</button>
</div>