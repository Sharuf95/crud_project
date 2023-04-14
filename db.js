const sqlite3 = require("sqlite3")

const db = new sqlite3.Database("./data.db",sqlite3.OPEN_READWRITE,
(error) => {
        if (error){
           console.log("DB Error")
           console.error(error)
        }else{
              console.log("DB Connected")
        }
     }
)
module.exports = db;