window.onload = () => {
  fetch('https://striveschool-api.herokuapp.com/api/deezer/search?q=eminem')
    .then((data) => data.json())
    .then((data) => {
      const eminemSection = document.getElementById('eminemSection')
      eminemSection.innerHTML = data.data.map((card) =>{
        return `<div class="col-3 gy-3">
                <div class="card" style="height: 20rem">
                    <img src="${card.album.cover_xl}" class="card-img-top img-fluid">
                    <div class="card-body">
                        <h5 class="card-title">${card.title}</h5>
                        <p class="card-text">${card.album.title}</p>
                    </div>
                </div>
            </div>`
      }).join('')

      
    })
    .catch(err => console.log('Request Failed', err))

    fetch('https://striveschool-api.herokuapp.com/api/deezer/search?q=metallica')
    .then((data) => data.json())
    .then((data) => {
      const metallicaSection = document.getElementById('metallicaSection')
      metallicaSection.innerHTML = data.data.map((card) =>{

        return `<div class="col-3 gy-3">
                <div class="card" style="height: 20rem">
                    <img src="${card.album.cover_xl}" class="card-img-top img-fluid">
                    <div class="card-body">
                        <h5 class="card-title">${card.title}</h5>
                        <p class="card-text">${card.album.title}</p>
                    </div>
                </div>
            </div>`
      }).join('')
    })
    .catch(err => console.log('Request Failed', err))

    fetch('https://striveschool-api.herokuapp.com/api/deezer/search?q=queen')
    .then((data) => data.json())
    .then((data) => {
      const queenSection = document.getElementById('queenSection')
      queenSection.innerHTML = data.data.map((card) =>{

        return `<div class="col-3 gy-3">
                <div class="card" style="height: 20rem">
                    <img src="${card.album.cover_xl}" class="card-img-top img-fluid">
                    <div class="card-body">
                        <h5 class="card-title">${card.title}</h5>
                        <p class="card-text">${card.album.title}</p>
                    </div>
                </div>
            </div>`
      }).join('')
    })
    .catch(err => console.log('Request Failed', err))
}

const creaLista = document.getElementById('crea-lista').addEventListener('click', () => {
  const modalTitle = document.getElementsByClassName('modal-title')[0].innerHTML = 'Ecco la lista con tutte le canzoni sulla pagina'
  const modalBody = document.getElementsByClassName('modal-body')[0]
  const songTitles = document.getElementsByClassName('card-title')
  Array.from(songTitles).forEach(songTitle => {
    modalBody.innerHTML += `<p>${songTitle.innerHTML}</p>`
})})
