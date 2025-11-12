let anni = 50
let persone = 15
let online = true 
let prezzo 

if (anni <= 35) {
    prezzo = 6
  }  else if (anni <= 65) { 
    prezzo = 8
  }  else { 
    prezzo = 6
  }  if (online == true) { 
    prezzo = prezzo - 1
  }

  prezzo = prezzo * persone

  console.log("il prezzo totale è " + prezzo + "€")
