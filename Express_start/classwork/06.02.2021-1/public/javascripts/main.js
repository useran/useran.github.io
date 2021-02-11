const selectEl = document.querySelector('.dogs');

selectEl.addEventListener('change', e => {
    location.assign(`/${e.target.value}`);
});