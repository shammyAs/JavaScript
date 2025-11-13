//cateti
let cateto1 = 13.5
let cateto2 = 14.5

//cateti alla 2a
let quadrato1 = cateto1 ** 2
let quadrato2 = cateto2 ** 2

//somma quadrati
let somma = quadrato1 + quadrato2

//radice quadrata
let ipotenusa = Math.sqrt(somma)
console.log(ipotenusa)

//arrotondamento a 2 cifre
let ipotenusa1 = ipotenusa.toFixed(2)
console.log(ipotenusa1)