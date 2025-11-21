function generaSequenza(limite, passo){
    let risultato = []

    for(let i=0; i<=limite; i+=passo){
        risultato.push(i)
    }
    return risultato
}
console.log(generaSequenza(20,2))
