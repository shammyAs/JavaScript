function raddoppia (numero){
     return numero * 2  
} function triploRaddoppio (valore){
    return raddoppia(raddoppia(valore))
}
console.log(triploRaddoppio(raddoppia(4)))
