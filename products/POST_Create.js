const db =  require("../db.js");

const postnewproducts = (request,response) => {
const body = request.body;
const {name,price,description} = body;

        if(!name) {
         response.status(500).send("Please enter name")
        }

        if(!price){
         response.status(500).send("Please enter price")
        }

        if(!description){
         response.status(500).send("Please enter description")
        }

        const InsertSql = `INSERT INTO products (
                name,
                price,
                description
               ) VALUES (
                "${name}",
                "${price}",
                "${description}"
              )`;

        db.serialize(() => {
          db.exec(InsertSql,(error) => {
            if (error) {
                      response.status(400).json({
                      status : false,
                      error : error
                      })
                      }else {
                      response.json({
                      status  : true,
                      message : "New product created",
                      data    : body,
                      sql     : InsertSql
                    })
                   }
                })
              })
             }

module.exports = postnewproducts;