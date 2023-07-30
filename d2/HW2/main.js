// AJAX

function makeGetAjaxCall(url, callback) {
  
    const xhr = new XMLHttpRequest();
    
    xhr.open("GET", url);
  
    xhr.onload = function() {
      if (xhr.status === 200) {
        callback(null, xhr.response)
      } else {
        callback('Errore durante la richiesta')
      }
    }
  
    xhr.onerror = function() {
      callback('Errore di rete')
    }
  
    xhr.send()
  }

  makeGetAjaxCall('https://striveschool-api.herokuapp.com/api/deezer/search?q=eminem', function(err, response) {
  if (err) {console.log(err)}
  else {console.log(JSON.parse(response))
  
  const a = JSON.parse(response)
  
  const eminem = document.getElementById('eminem')
  eminem.classList.remove('d-none')
  for(i = 0; i < a.data.length; i++){
    const listaCanzoni = document.createElement('p')
    listaCanzoni.innerText = a.data[i].title
    eminem.appendChild(listaCanzoni)
  }
  }
  })

  makeGetAjaxCall('https://striveschool-api.herokuapp.com/api/deezer/search?q=metallica', function(err, response) {
  if (err) {console.log(err)}
  else {console.log(JSON.parse(response))
  
  const a = JSON.parse(response)
  
  const metallica = document.getElementById('metallica')
  metallica.classList.remove('d-none')
  for(i = 0; i < a.data.length; i++){
    const listaCanzoni = document.createElement('p')
    listaCanzoni.innerText = a.data[i].title
    metallica.appendChild(listaCanzoni)
  }
  }
  })

  makeGetAjaxCall('https://striveschool-api.herokuapp.com/api/deezer/search?q=queen', function(err, response) {
  if (err) {console.log(err)}
  else {console.log(JSON.parse(response))
  
  const a = JSON.parse(response)
  
  const queen = document.getElementById('queen')
  queen.classList.remove('d-none')
  for(i = 0; i < a.data.length; i++){
    const listaCanzoni = document.createElement('p')
    listaCanzoni.innerText = a.data[i].title
    queen.appendChild(listaCanzoni)
  }
  }
  })

