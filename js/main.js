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

  data.entries.unshift(entryData);
  data.nextEntryId++;
  $img.setAttribute('src', './images/placeholder-image-square.jpg');
  $entryForm.reset();
});

function renderEntry(entry) {
  const $unorderedList = document.createElement('ul');

  const $listItem = document.createElement('li');
  $listItem.setAttribute('class', 'row');
  $unorderedList.appendChild($listItem);

  const $columnHalf1 = document.createElement('div');
  $columnHalf1.setAttribute('class', 'column-half');
  $listItem.appendChild($columnHalf1);

  const $img = document.createElement('img');
  $img.setAttribute(
    'src',
    'https://archives.bulbagarden.net/media/upload/4/4a/0025Pikachu.png'
  );
  $columnHalf1.appendChild($img);

  const $columnHalf2 = document.createElement('div');
  $columnHalf2.setAttribute('class', 'column-half');

  $listItem.appendChild($columnHalf2);

  const $h3Title = document.createElement('h3');
  $h3Title.textConent = 'Pikachu';
  $columnHalf2.appendChild($h3Title);

  const $pNotes = document.createElement('p');
  $pNotes.textContent = 'Thunderbolt!';
  $columnHalf2.appendChild($pNotes);

  return $unorderedList;
}

renderEntry();
