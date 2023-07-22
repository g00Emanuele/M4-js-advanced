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

function control1And3 (arr){
    for (const i of arr) {
        if(arr[i] === 1){
            console.log('false')
            return false
        } else if(arr[i] === 3){
            console.log('false')

            return false
        } else {
            console.log('true')

            return true
        }
    }
}

const array = [0, 1, ]
control1And3(array)
