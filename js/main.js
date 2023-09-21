const $imageUrl = document.querySelector('.image-url');
const $img = document.querySelector('img');
const $unorderedList = document.querySelector('ul');
const $showEntryForm = document.querySelector("[data-view='entry-form']");
const $showEntries = document.querySelector("[data-view='entries']");
const $dataZero = document.querySelector('#data-zero');
const $entryForm = document.querySelector('#entry-form');
const $entriesNav = document.querySelector('.nav');
const $newEntryNav = document.querySelector('.new');

$imageUrl.addEventListener('input', function setImage(event) {
  $img.setAttribute('src', event.target.value);
});
let entryData = {};
$entryForm.addEventListener('submit', function submitForm(event) {
  event.preventDefault();
  entryData = {
    title: $entryForm.elements[0].value,
    imageUrl: $entryForm.elements[1].value,
    notes: $entryForm.elements[2].value,
    entryId: data.nextEntryId,
  };

  data.entries.unshift(entryData);
  data.nextEntryId++;
  $img.setAttribute('src', './images/placeholder-image-square.jpg');
  $entryForm.reset();

  const $newDomTree = renderEntry(entryData);
  $unorderedList.prepend($newDomTree);
  viewSwap('entries');
  toggleNoEntries();
});

function renderEntry(entry) {
  const $listItem = document.createElement('li');
  $listItem.setAttribute('class', 'row');
  $listItem.setAttribute('data-entry-id', entry.entryId);

  const $columnHalf1 = document.createElement('div');
  $columnHalf1.setAttribute('class', 'column-half');
  $listItem.appendChild($columnHalf1);

  const $img = document.createElement('img');
  $img.setAttribute('src', entry.imageUrl, 'alt', 'your entry image');
  $columnHalf1.appendChild($img);

  const $columnHalf2 = document.createElement('div');
  $columnHalf2.setAttribute('class', 'column-half');
  $listItem.appendChild($columnHalf2);

  const $titleRow = document.createElement('div');
  $titleRow.setAttribute('class', 'n-wrap');
  $columnHalf2.appendChild($titleRow);

  const $columnHalf3 = document.createElement('div');
  $columnHalf3.setAttribute('class', 'column-half a-center');
  $titleRow.appendChild($columnHalf3);

  const $columnHalf4 = document.createElement('div');
  $columnHalf4.setAttribute('class', 'column-half a-center j-e');
  $titleRow.appendChild($columnHalf4);

  const $h3Title = document.createElement('h3');
  $h3Title.textContent = entry.title;
  $columnHalf3.appendChild($h3Title);

  const $pencilIcon = document.createElement('i');
  $pencilIcon.setAttribute('class', 'fa-solid fa-pencil');
  $pencilIcon.setAttribute('id', 'pencil');
  $columnHalf4.appendChild($pencilIcon);

  const $columnFull = document.createElement('div');
  $columnFull.setAttribute('class', 'column-full');
  $columnHalf2.appendChild($columnFull);

  const $pNotes = document.createElement('p');
  $pNotes.textContent = entry.notes;
  $columnFull.appendChild($pNotes);

  return $listItem;
}

document.addEventListener(
  'DOMContentLoaded',
  function handleDOMContentLoaded(event) {
    let $journalEntry;

    for (let i = 0; i < data.entries.length; i++) {
      $journalEntry = renderEntry(data.entries[i]);
      $unorderedList.appendChild($journalEntry);
    }
    const previousPage = data.view;
    viewSwap(previousPage);
    toggleNoEntries();
  }
);

function toggleNoEntries() {
  if (data.entries.length === 0) {
    $dataZero.setAttribute('class', '');
  } else {
    $dataZero.setAttribute('class', 'hidden');
  }
}

function viewSwap(viewname) {
  if (viewname === 'entries') {
    $showEntries.className = '';
    $showEntryForm.className = 'hidden';
    data.view = 'entries';
  } else if (viewname === 'entry-form') {
    $showEntries.className = 'hidden';
    $showEntryForm.className = '';
    data.view = 'entry-form';
  }
}

$entriesNav.addEventListener('click', function handleNavClick() {
  const entriesView = $showEntries.getAttribute('data-view');
  viewSwap(entriesView);
});

$newEntryNav.addEventListener('click', function HandleNavClick() {
  const formView = $showEntryForm.getAttribute('data-view');
  viewSwap(formView);
});

const $editEntry = document.querySelector('#new-entry');

$unorderedList.addEventListener('click', function handleEdits(event) {
  if (event.target.tagName === 'I') {
    const closestE = event.target.closest('li');
    const dataEntryId = closestE.getAttribute('data-entry-id');
    const deId = Number(dataEntryId);

    viewSwap('entry-form');

    for (let i = 0; i < data.entries.length; i++) {
      if (data.entries[i].entryId === deId) {
        data.editing = data.entries[i];
      }
    }
  }
  $entryForm.elements[0].value = data.editing.title;
  $entryForm.elements[1].value = data.editing.imageUrl;
  $entryForm.elements[2].value = data.editing.notes;

  $editEntry.textContent = 'Edit Entry';
});
