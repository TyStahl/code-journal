const $imageUrl = document.querySelector('.image-url');
const $img = document.querySelector('img');

$imageUrl.addEventListener('input', function setImage(event) {
  $img.setAttribute('src', event.target.value);
});
const $entryForm = document.querySelector('#entry-form');
$entryForm.addEventListener('submit', function submitForm(event) {
  event.preventDefault();
  const entryData = {
    title: $entryForm.elements[0].value,
    imageUrl: $entryForm.elements[1].value,
    notes: $entryForm.elements[2].value,
    entryId: data.nextEntryId,
  };

  data.entries.push(entryData);
  data.nextEntryId++;
  $img.setAttribute('src', './images/placeholder-image-square.jpg');
  document.querySelector('#entry-form').reset();
});
