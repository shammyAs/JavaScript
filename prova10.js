let parole = [
                "nuvola", 
                "lampo", 
                "formaggio", 
                "scarpa", 
                "libro", 
                "sogno", 
                "bicicletta", 
                "telefono", 
                "pizza", 
                "albero", 
                "casa", 
                "cielo", 
                "musica", 
                "vento", 
                "caffè", 
                "fiore", 
                "occhiali", 
                "specchio", 
                "sedia", 
                "orologio"
            ]

let conta = [
             "nuvola", 
             "sogno", 
             "musica", 
             "caffè", 
             "fiore" 
            ]
for(let i=0; i<conta.length; i++){
    console.log(conta[i]+ ":" + parole.indexOf(conta[i]))
}
