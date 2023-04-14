const db = require("../db.js");

const Get_Products_Query = `SELECT * from products`;

const getallproducts = (request,response) => {
        
db.serialize( () => {
   db.all(Get_Products_Query,(error,products) => {
      if(error) {
        console.error(error);
          response.status(500).send('Server Error')                       
                 } else {
                 response.json(products)
                }
             })
           })
         }

module.exports = getallproducts;