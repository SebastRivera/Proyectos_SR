var express = require('express');
var router = express.Router();

const { Sequelize, Op } = require('sequelize');
const Clientes = require('../models').customers;  

router.get('/findAll/json', function(req, res, next) {  

    Clientes.findAll({  
        attributes: { exclude: ["updatedAt", "createdAt"] } ,
    })  
    .then(customers => {  
        res.json(customers);  
    })  
    .catch(error => res.status(400).send(error)) 
  
  });


router.get('/findById/:customerNumber/json', function(req, res, next) {  

    let customerNumber = parseInt(req.params.customerNumber);

    Clientes.findAll({  
        attributes: { exclude: ["updatedAt", "createdAt"] } ,
        where: { 
            [Op.and]: [
            {customerNumber: customerNumber}
            ]
        }
    })  
    .then(customers => {  
        res.json(customers);  
    })  
    .catch(error => res.status(400).send(error)) 

});

module.exports = router;
