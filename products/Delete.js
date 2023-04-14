const db = require("../db.js");


const deleteproducts = (request,response) => {
const product_id = request.params.id;
const Sql = `DELETE from products WHERE product_id = "${product_id}`
 db.serialize( () => {
   db.get(Sql,(error) => {
     if(error) {
        response.json({
            status  : false,
            message : "Cant Delete the product with id"
             })
              }else {
              response.json ({
              status  : true,
              message : "Product Id  deleted Successfully"
            })
          }
       })
     })
   }

module.exports = deleteproducts;