// Add imports above this line
import { galleryItems } from "./gallery-items";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line

const galleryRef = document.querySelector(".gallery");

function createCardsGallery(galleryItems) {
  return galleryItems
    .map((imgCard) => {
      return `<a class="gallery__item" href=${imgCard.original}>
  <img class="gallery__image" src=${imgCard.preview} alt=${imgCard.description} />
</a>`;
    })
    .join("");
}

const cardsGallery = createCardsGallery(galleryItems);
galleryRef.insertAdjacentHTML("beforeend", cardsGallery);

galleryRef.addEventListener("click", onGalleryRefClik);

function onGalleryRefClik(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }
}

new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
