// Esercizio 1

function funzione(num1, num2){
    if(num1 === 50 || num2 === 50 || num1 + num2 === 50){
        return true
    } 
}

// Esercizio 2

function removeLetter(stringa, posizione){
    let arr = stringa.split('')
    arr.splice(posizione, 1)
    console.log(arr)
    return arr
}

// Esercizio 3

function findNumber(num1, num2){
    if(num1 > 40 && num1 < 70 && num2 > 40 && num2 < 70){
        return true
    } else if(num1 > 70 && num1 < 100 && num2 > 70 && num2 < 100) {
        return true
    } else {
        return false
    }
}

// Esercizio 4

function findCity(nomeCittà){
    arr = nomeCittà.toLowerCase().split('')
    if(arr[0] === 'l' && arr[1] === 'o' && arr[2] === 's'){
        return nomeCittà
    } else if(arr[0] === 'n' && arr[1] === 'e' && arr[2] === 'w'){
        return nomeCittà
    } else {
        return false
    }
}

// Esercizio 5

function findSum(arr){
    let sum = 0
    for (let i = 0; i < arr.length; i++){
        let a = arr[i]
        sum += a
    }
    return sum
}

// Esercizio 6

function control1And3(arr){
    return !arr.includes(1) && !arr.includes(3)
}

// Esercizio 7

function findAngle(gradi){
    if(gradi < 90){
        console.log('angolo acuto')
    } else if(gradi === 90){
        console.log('angolo retto')
    } else if(gradi > 90  && gradi < 180){
        console.log('angolo ottuso')
    } else if(gradi === 180){
        console.log('angolo piatto')
    } else {
        console.log('inserisci un numero tra 0 e 180')
    }
}

// Esercizio 8

function acronym(stringa){
    let acr = []
    const arr = stringa.split('')
    acr.push(arr[0].toUpperCase())
    for(let i = 0; i < arr.length; i++){
        if(arr[i - 1] === ' '){
            acr.push(arr[i].toUpperCase())
        }
    }
    let newAcr = ''
    for(let i = 0; i < acr.length; i++){
        newAcr += acr[i]
    }
    return newAcr
}

// ESERCIZI EXTRA

// EXTRA 1. Partendo da una stringa (passata come parametro), ritorna il carattere più usato nella stringa stessa.

let max = 0
let stringa = 'ciao a tutti'

function maxChar(string){
    const arr = string.split('')
    let currLett
    console.log(arr)
    for(i = 0; i < arr.length; i++){
        a = string.split(string.charAt(i)).length - 1
        if(a > max){
            currLett = string.charAt(i)
            max = a
        }
    } return currLett
}


// EXTRA 2. Controlla che due stringhe passate come parametri siano gli anagrammi l’una dell’altra. Ignora punteggiatura e spazi e ricordate di rendere la stringa tutta in minuscolo. Se le due parole sono anagrammi, ritorna true , altrimenti ritorna `false`.

let str1 = 'tiziano'
let str2 = 'notizia'

function anagramma(str1, str2){
    const strArr1 = str1.toLowerCase().split('').sort().join()
    const strArr2 = str2.toLowerCase().split('').sort().join()

    if(strArr1 === strArr2){
        return true
    } else {
        return false
    }
}


// EXTRA 3. Partendo da una lista di possibili anagrammi e da una parola (entrambi passati come parametri), ritorna un nuovo array contenente tutti gli anagrammi corretti della parola data.

let word = 'cartine'
const anag = ['carenti','espatrio','incerta']

function anagPoss(word, anag){
    let newAnag = [];
    for(let i of anag){
        if(i.toLowerCase().split('').sort().toString() === word.toLowerCase().split('').sort().toString()){
            newAnag.push(i)
        } 
    } 
    return newAnag
}


// EXTRA 4. Partendo da una stringa passata come parametro, ritorna `true` se la stringa è palindroma o `false` se non lo è.

let string = 'itopinonavevanonipoti'

function palindroma(string){
    if(string.toLowerCase() === string.toLowerCase().split('').reverse().join('')){
        return true
    } else {
        return false
    }
}


// EXTRA 5. Partendo da un numero intero (dai parametri) ritorna un numero che contenga le stesse cifre, ma in ordine contrario. Es. 189 ⇒ 981

let num = 540000999

function reverseNum(num){
    return parseInt(num.toString().split('').reverse().join('').toString())
}


// EXTRA 6. Scrivi una funzione che accetti un numero positivo X come parametro. La funzione dovrebbe stampare a console una “scala” creata con il carattere “#” e avente X scalini.

function pyramid(num){
    let string = '#'
    for(i = 0; i <= num; i++){
        console.log(string.repeat(i))
    }
}


// EXTRA 7. Crea una funzione che, data una stringa come parametro, ritorni la stessa stringa, ma al contrario. Es. “Ciao” ****⇒ “oaiC”

let parola = 'Ciao'
function reverseString(string){
    return string.split('').reverse().join('').toString()
}


// EXTRA 8. Crea una funzione che accetti un array e un numero Y come parametro. Dividi l’array in sotto-array aventi lunghezza Y.
// Es. array: [1, 2, 3, 4], y: 2 ⇒ [[ 1, 2], [3, 4]]
// array: [1, 2, 3, 4, 5], y: 4 ⇒ [[ 1, 2, 3, 4], [5]]

const arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24]
const y = 3

function arrDivider(arr, y){

    let newArr = []
    let subArr
    let lastArr
    let numSubArr = arr.length/y 

    if(arr.length % y === 0){
        for(i = 0; i < numSubArr; i++){
            subArr = arr.slice(0, y)
            newArr.push(subArr)
            arr.splice(0, y)
        }
    } else {
        for(i = 0; i < numSubArr; i++){
            subArr = arr.slice(0, y)
            newArr.push(subArr)
            arr.splice(0, y)
        }
    }

    if(arr. length !== 0){
        lastArr = arr.slice(-y)
        newArr.push(lastArr)
    }
    return newArr
}

console.log(arrDivider(arr, y))

// EXTRA 9. Scrivi una funzione che accetti un numero positivo X come parametro. La funzione dovrebbe stampare a console una “piramide” create con il carattere “#” e avente X strati.