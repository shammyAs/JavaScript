for(let anni=0; anni<=100; anni++){

switch (true){ 
    case anni <=1:
        nome = "lattante"
        break;
    case anni == 2:
        nome = "prima infanzia"
        break;
    case anni <=6:
        nome = "seconda infanzia"
        break;
    case anni <=22:
        nome = "pubertà e adolescenza"
        break;
    case anni <=39:
        nome = "prima età adulta"
        break;
    case anni <=59:
        nome = "seconda età adulta"
        break;
    case anni <=75:
        nome = "terza età"
        break;
    case anni <=90:
        nome = "quarta età"
        break;
    default:
        nome = "quinta età"
        break;
    } 

    console.log(anni + " = " + nome)
}