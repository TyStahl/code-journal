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
  const $listItem = document.createElement('li');
  $listItem.setAttribute('class', 'row');

  const $columnHalf1 = document.createElement('div');
  $columnHalf1.setAttribute('class', 'column-half');
  $listItem.appendChild($columnHalf1);

  const $img = document.createElement('img');
  $img.setAttribute('src', entry.imageUrl);
  // $img.setAttribute('src', 'https://archives.bulbagarden.net/media/upload/4/4a/0025Pikachu.png');
  $columnHalf1.appendChild($img);

  const $columnHalf2 = document.createElement('div');
  $columnHalf2.setAttribute('class', 'column-half');

  $listItem.appendChild($columnHalf2);

  const $h3Title = document.createElement('h3');
  $h3Title.textContent = entry.title;
  $columnHalf2.appendChild($h3Title);

  const $pNotes = document.createElement('p');
  $pNotes.textContent = entry.notes;
  $columnHalf2.appendChild($pNotes);

  return $listItem;
}

document.addEventListener(
  'DOMContentLoaded',
  function handleDOMContentLoaded(event) {
    let $journalEntry;
    const $unorderedList = document.querySelector('ul');

    for (let i = 0; i < data.entries.length; i++) {
      $journalEntry = renderEntry(data.entries[i]);
      $unorderedList.appendChild($journalEntry);
    }
  }
);

function toggleNoEntries() {
  const $noEntries = document.querySelector('#no-entries');
  if (data.entries === []) {
    $noEntries.className = 'hidden';
  }
}
toggleNoEntries();

function viewSwap(entries) {
  const $showEntryForm = document.querySelector("[data-view='entry-form']");
  const $showEntries = document.querySelector("[data-view='entries']");
  if (entries === 'entries') {
    $showEntries.className = 'div';
    $showEntryForm.className = 'hidden';
    data.view = 'entries';
  } else if (entries === 'entry-form') {
    $showEntries.className = 'hidden';
    $showEntryForm.className = 'div';
    data.view = 'entry-form';
  }
}

viewSwap();
