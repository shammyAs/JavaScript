function trovaMassimo(a,b,c){
    let massimo = b

    if (a > massimo){
        massimo = a
    } else if (c > massimo){
        massimo = c
    } 
 return massimo

}
let risultato = trovaMassimo(17,25,23)
console.log(risultato)