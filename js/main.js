const $imageUrl = document.querySelector('.image-url');
const $img = document.querySelector('img');

$imageUrl.addEventListener('input', setImage);

function setImage(event) {
  $img.setAttribute('src', event.target.value);
}
