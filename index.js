const express = require ("express");
const bodyParser = require ("body-parser");
const sqlite3 = require ("sqlite3");
const app = express();

const getallproducts = require("./products/Get_read.js");
const postnewproducts = require("./products/POST_Create.js");
const updateproducts = require("./products/Update.js");
const deleteproducts = require("./products/Delete.js");

const PORT = 4000;
app.use(bodyParser.json());

app.get('/products',getallproducts);
app.post('products',postnewproducts);
app.put ('/products/:productID',updateproducts);
app.delete('products/products',deleteproducts);

app.listen(PORT,() => {
        console.log(`APP is running on http://localhost: ${PORT}`)
});