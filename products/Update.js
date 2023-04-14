const db = require("../db.js");

const updateproducts = (request,response) => {
        const product_id = request.params.id;
        const requestBody = request.body;
        const price       =  requestBody.price

        const sql = `UPDATE products SET price = "${price}", WHERE product_id = "${product_id}"`

        db.serialize( () => {
           db.exec((sql,(error) => {
             if(error){
                 response.status(400).json({
                 status : false,
                 error  : `Unable to find products id = ${product_id}`
                })
                }else {
                response.json({
                status   : true,
                message : "Price Updated"
                })    
              }
           }))
        })
      }
module.exports = updateproducts;