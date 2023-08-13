window.onload = () => {
  fetch('https://striveschool-api.herokuapp.com/api/deezer/search?q=eminem')
    .then((data) => data.json())
    .then((data) => {
      const eminemSection = document.getElementById('eminemSection')
      eminemSection.innerHTML = data.data.map((card) =>{

        return `<div class="col-3">
                <div class="card">
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

