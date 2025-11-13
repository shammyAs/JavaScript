let prezzo = 125;
let sconto = 10
for(i=0; i< 50; i+= 10){
    let prezzoScontato = prezzo - (prezzo * sconto / 100);
    console.log(sconto + i + "% = prezzo finale è " + prezzoScontato)
}