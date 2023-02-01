var express = require('express');
var router = express.Router();
const Sequelize = require('sequelize');
const Clientes = require('../models').customers;  


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/findAll/json', function(req, res, next) {  

	
  Clientes.findAll({  
      attributes: { exclude: ["updatedAt"] }  
  })  
  .then(customers => {  
      res.json(customers);  
  })  
  .catch(error => res.status(400).send(error)) 

});


router.get('/findAll/view', function(req, res, next) {  

  
  Clientes.findAll({  
      attributes: { exclude: ["updatedAt"] }  
  })  
  .then(customers => {  
      res.render('customers', { title: 'Customers', arrCustomers: customers });  
  })  
  .catch(error => res.status(400).send(error)) 

});


router.post('/total', async function(req,res,next){
  let productos = req.body
  let total = 0
  
  Object.entries(productos).forEach((entry) => {
      const [key, value] = entry;
      
      let quantity = productos[key]["quantityOrdered"]
      let price = productos[key]["priceEach"]
      total += (quantity * price)

  })
  total = total.toFixed(2)
  total = parseFloat(total)

  res.json({total: total})
})


module.exports = router;
