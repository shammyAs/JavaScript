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
}
