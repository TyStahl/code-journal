/* exported data */

let data = {
  view: 'entry-form',
  entries: [],
  editing: null,
  nextEntryId: 1,
};

window.addEventListener('beforeunload', function handleUnload(event) {
  const dataJSON = JSON.stringify(data);
  localStorage.setItem('javascript local storage', dataJSON);
});
