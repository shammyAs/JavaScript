const cat = {
    name: "Whiskers",
    legs: 4,
    tails: 1,
    enemies: ["Water","Dogs"]
}
cat.pelo = "lungo" //to add
delete cat.legs //to delete
console.log(Object.keys(cat)) //to see only the properties
consoole.log(cat.name)//per stampare una delle properties

for(let user in cat){
    console.log(user, cat[user])
}// per stampare tutto il const