function calcoloFattoriale(n){
    let risultato = 1
     
    for(let i = 1; i <= n; i++ ){
        risultato *= i
    }
    return risultato
}
console.log(calcoloFattoriale(8))