const divEl = document.querySelectorAll('.txt');
const picsEl = document.querySelectorAll('.pics');

divEl.forEach(e => {
  e.addEventListener('click', event => {
    event.target.style.display = 'none';
  })
})

const getUrl = breed => breed.includes('-') ? `https://dog.ceo/api/breed/${breed.slice(0, breed.indexOf('-'))}/images/random` : `https://dog.ceo/api/breed/${breed}/images/random`;

picsEl.forEach(e => {
  e.addEventListener('click', event => {
    axios
      .get(getUrl(event.target.innerHTML))
      .then(r => {
        event.target.style.backgroundImage = `url(${r.data.message})`;
      })
      .catch(err => console.log('>>> err= ', err))
  })
})