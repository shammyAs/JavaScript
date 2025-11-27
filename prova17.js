function calcolaMedia (numeri) {
    if (numeri.length === 0){
        return 0
    }
    let somma = 0
    for(let i = 0; i < numeri.length; i++){
        somma += numeri[i]
    }
    let media = somma / numeri.length
    return media
} let NumeroArray=[5,10,15,20,25]
console.log(calcolaMedia(NumeroArray))
