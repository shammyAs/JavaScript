const users = {
    Alan:{
        online: false
    },
    Jeff:{
        online: true
    },
    Sarah:{
        online: false
    }
}
for (let user in users){
    console.log(user, users[user])
}