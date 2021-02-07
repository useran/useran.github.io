const selectEl = document.querySelector('.dogs');
const outputPic = document.querySelector('.links');

selectEl.addEventListener('change', e => {
    outputPic.href = `/${e.target.value}`;
    outputPic.click();
});