---
layout: life-post
title: "Photography x Pokemon Binder v1"
subtitle: "Phases of Water"
date: 2025-05-20
categories: project
excerpt: Combination of two hobbies; plan for mixing personal photography prints and Pokemon collection.
---

<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script src="/assets/js/turn.js"></script>

The binder will look something like what's shown below. Feel free to **flip** through it by 
clicking (or tapping) the corners of each page.

Image sources:
- Photography: [eychung.github.io](https://eychung.github.io/)
- Cards: [tcgplayer.com](https://www.tcgplayer.com/)

<div class="binder">
  <!-- Page 1 -->
  <div class="hard">
    <div class="binder-page-photo">
      <img src="/assets/images/2025-05-20/cover.jpg" alt="">
    </div>
  <!-- Page 2 -->
  </div>
    <div class="hard">
    <img src="/assets/images/2025-05-20/photos/water.jpg" alt="">
  </div>
  <!-- Page 3 -->
  <div class="hard">
    <div class="binder-page-photo">
      <div class="binder-page-cards">
        <div class="binder-page-cards-item">
          <img src="/assets/images/2025-05-20/cards/water/binder-page-c1.jpg" alt="Card">
        </div>
        <div class="binder-page-cards-item">
          <img src="/assets/images/2025-05-20/cards/water/binder-page-c2.jpg" alt="Card">
        </div>
        <div class="binder-page-cards-item">
          <img src="/assets/images/2025-05-20/cards/water/binder-page-c3.jpg" alt="Card">
        </div>
        <div class="binder-page-cards-item">
          <img src="/assets/images/2025-05-20/cards/water/binder-page-c4.jpg" alt="Card">
        </div>
        <div class="binder-page-cards-item">
          <img src="/assets/images/2025-05-20/cards/water/binder-page-c5.jpg" alt="Card">
        </div>
        <div class="binder-page-cards-item">
          <img src="/assets/images/2025-05-20/cards/water/binder-page-c6.jpg" alt="Card">
        </div>
        <div class="binder-page-cards-item">
          <img src="/assets/images/2025-05-20/cards/water/binder-page-c7.jpg" alt="Card">
        </div>
        <div class="binder-page-cards-item">
          <img src="/assets/images/2025-05-20/cards/water/binder-page-c8.jpg" alt="Card">
        </div>
        <div class="binder-page-cards-item">
          <img src="/assets/images/2025-05-20/cards/water/binder-page-c9.jpg" alt="Card">
        </div>
      </div>
    </div>
  </div>
  <!-- Page 4 -->
  <div class="hard">
    <div class="binder-page-photo">
      <div class="binder-page-cards">
        <div class="binder-page-cards-item">
          <img src="https://placehold.co/3024x4032/transparent/ccc/?text=Reserved" alt="NA">
        </div>
        <div class="binder-page-cards-item">
          <img src="/assets/images/2025-05-20/cards/ice/binder-page-c2.jpg" alt="Card">
        </div>
        <div class="binder-page-cards-item">
          <img src="https://placehold.co/3024x4032/transparent/ccc/?text=Reserved" alt="NA">
        </div>
        <div class="binder-page-cards-item">
          <img src="/assets/images/2025-05-20/cards/ice/binder-page-c4.jpg" alt="Card">
        </div>
        <div class="binder-page-cards-item">
          <img src="/assets/images/2025-05-20/cards/ice/binder-page-c5.jpg" alt="Card">
        </div>
        <div class="binder-page-cards-item">
          <img src="/assets/images/2025-05-20/cards/ice/binder-page-c6.jpg" alt="Card">
        </div>
        <div class="binder-page-cards-item">
          <img src="https://placehold.co/3024x4032/transparent/ccc/?text=Reserved" alt="NA">
        </div>
        <div class="binder-page-cards-item">
          <img src="https://placehold.co/3024x4032/transparent/ccc/?text=Reserved" alt="NA">
        </div>
        <div class="binder-page-cards-item">
          <img src="https://placehold.co/3024x4032/transparent/ccc/?text=Reserved" alt="NA">
        </div>
      </div>
    </div>
  </div>
  <!-- Page 5 -->
  <div class="hard">
    <img src="/assets/images/2025-05-20/photos/snow1.jpg" alt="">
  </div>
  <!-- Page 6 -->
  <div class="hard">
    <img src="/assets/images/2025-05-20/photos/snow2.jpg" alt="">
  </div>
  <!-- Page 7 -->
  <div class="hard">
    <img src="/assets/images/2025-05-20/photos/snow3.jpg" alt="">
  </div>
</div>

<p></p>

<script>
  const image = document.querySelector('.binder-page-photo img');
  const containerWidth = $(".binder").parent().width();
  const scale = containerWidth / image.naturalWidth;
  const newHeight = image.height / 2;
  $(".binder").turn({height: newHeight});
</script>

<table class="card-table">
  <thead>
    <tr>
      <th>Card</th>
      <th>Info</th>
    </tr>
  </thead>
  <tbody>
    <tr class="not-owned">
      <td>
        <a href="#" class="card-modal-open" data-image="/assets/images/2025-05-20/cards/ice/binder-page-c2.jpg">
          <img src="/assets/images/2025-05-20/cards/ice//binder-page-c2.jpg" alt="Card 2" class="card-thumbnail">
        </a>
      </td>
      <td>
        <a href="https://www.tcgplayer.com/product/623588/pokemon-sv09-journey-together-articuno-161-159" target="_blank">Articuno - 161/159 - SV09: Journey Together</a>
      </td>
    </tr>
    <tr class="not-owned">
      <td>
        <a href="#" class="card-modal-open" data-image="/assets/images/2025-05-20/cards/ice/binder-page-c4.jpg">
          <img src="/assets/images/2025-05-20/cards/ice/binder-page-c4.jpg" alt="Card 4" class="card-thumbnail">
        </a>
      </td>
      <td>
        <a href="https://www.tcgplayer.com/product/477061/pokemon-crown-zenith-galarian-gallery-glaceon-vstar" target="_blank">Glaceon VSTAR - Crown Zenith: Galarian Gallery (CRZ:GG)</a>
      </td>
    </tr>
    <tr class="not-owned">
      <td>
        <a href="#" class="card-modal-open" data-image="/assets/images/2025-05-20/cards/ice/binder-page-c5.jpg">
          <img src="/assets/images/2025-05-20/cards/ice/binder-page-c5.jpg" alt="Card 5" class="card-thumbnail">
        </a>
      </td>
      <td>
        <a href="https://www.tcgplayer.com/product/497688/pokemon-sv02-paldea-evolved-grusha-268-193" target="_blank">Grusha - 268/193 - SV02: Paldea Evolved (PAL))</a>
      </td>
    </tr>
    <tr class="not-owned">
      <td>
        <a href="#" class="card-modal-open" data-image="/assets/images/2025-05-20/cards/ice/binder-page-c6.jpg">
          <img src="/assets/images/2025-05-20/cards/ice/binder-page-c6.jpg" alt="Card 6" class="card-thumbnail">
        </a>
      </td>
      <td>
        <a href="https://www.tcgplayer.com/product/253138/pokemon-swsh08-fusion-strike-celebi-v-alternate-full-art" target="_blank">Celebi V (Alternate Full Art) - SWSH08: Fusion Strike (SWSH08)</a>
      </td>
    </tr>
  </tbody>
</table>

<div id="card-modal" class="card-modal">
  <span class="card-modal-close">&times;</span>
  <img class="card-modal-image" id="card-modal-image" alt="Expanded Card">
</div>

<script>
  document.addEventListener("DOMContentLoaded", () => {
    const cardModal = document.getElementById("card-modal");
    const cardModalImage = document.getElementById("card-modal-image");
    const cardModalClose = document.querySelector(".card-modal .card-modal-close");

    document.querySelectorAll(".card-modal-open").forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const imageSrc = link.getAttribute("data-image");
        cardModalImage.src = imageSrc;
        cardModal.style.display = "flex";
      });
    });

    cardModalClose.addEventListener("click", () => {
      cardModal.style.display = "none";
    });

    window.addEventListener("click", (e) => {
      if (e.target === cardModal) {
        cardModal.style.display = "none";
      }
    });
  });
</script>
