---
layout: default
description: Choreographer and dance artist researching Afro-diasporic gestures, Afrofuturism, and the Black body as narrative.
---

<section class="carousel-section home-center">
  <div class="carousel" id="carousel" role="group" aria-roledescription="carousel" aria-label="Selected works — photo carousel">
    <div class="carousel-stage">
      {% for item in site.data.gallery %}
      <figure class="carousel-slide" role="group" aria-roledescription="slide" aria-label="Slide {{ forloop.index }} of {{ site.data.gallery.size }}">
        <img src="{{ '/assets/images/' | append: item.filename | relative_url }}" alt="{{ item.alt }}" loading="eager" decoding="async">
        {% if item.caption and item.caption != "" %}
        <figcaption>{{ item.caption }}</figcaption>
        {% endif %}
      </figure>
      {% endfor %}
    </div>
  </div>
</section>