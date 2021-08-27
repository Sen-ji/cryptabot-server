const express = require('express')
const bodyParser = require('body-parser')
const cors = require("cors")

const app = express() 

let corsOptions = {
    origin: "http://localhost:8081"
}
app.use(cors(corsOptions))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

const db = require("./models")
const Role = db.role
db.sequelize.sync({force: true}).then(()=>{
    console.log("drop and sync DB");
    initial();
})

app.get("/",(req,res) =>{
    res.json({
        message:"Bienvenue sur le serveur cryptabot"
    })
})

app.listen(8080, ()=>{
    console.log("Server Start")
})

function initial() {
    Role.create({
      id: 1,
      name: "user"
    });
   
    Role.create({
      id: 2,
      name: "moderator"
    });
   
    Role.create({
      id: 3,
      name: "admin"
    });
  }