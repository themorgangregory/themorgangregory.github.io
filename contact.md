---
layout: default
title: Contact — Morgan Gregory
---

<section class="page-hero">
  <div class="container">
    <h1>Contact</h1>
  </div>
</section>

<section class="contact-section">
  <div class="container">
    <p class="contact-lede">For booking, collaborations, and press inquiries:</p>

    <p class="contact-item">
      <a href="https://www.instagram.com/{{ site.instagram_username }}" target="_blank" rel="noopener noreferrer">
        @{{ site.instagram_username }}
      </a>
    </p>

    <p class="contact-item">
      <a href="mailto:{{ site.email }}">{{ site.email | default: "yourname@example.com" }}</a>
    </p>
  </div>
</section>