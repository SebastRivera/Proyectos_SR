var express = require('express');
var router = express.Router();
const axios = require('axios')
/* GET home page. */
router.get('/', async function(req, res, next) {
  const URL = 'https://productos-7d191-default-rtdb.firebaseio.com/collection.json'
  const response = await axios.get(URL)
  
  res.render('index', { title: 'Express', productos: response.data });
});

router.get('/data', async function(req, res, next) {
  const URL = 'http://localhost:4444/clientes/findAll/json'
  const config = {
    proxy: {
      host: 'localhost',
      port: 4444
    }
  }
  const response = await axios.get(URL, config)

  res.render('data', { title: 'Data', clientes: response.data });
})

router.get('/data/shipped/:customerNumber', async function(req,res,next){
  let number = req.params.customerNumber
  const URL = `https://productos-7d191-default-rtdb.firebaseio.com/collection.json?orderBy="customerNumber"&equalTo=${number}`
  
  const response = await axios.get(URL)

  const URL2 = 'http://localhost:4444/clientes/total'

  const response_t = await axios.post(URL2,response.data)
  res.render('data2', { title: 'Data2', prods: Object.values(response.data).filter(stat => stat.status == 'Shipped'), total:response_t.data.total });
})




module.exports = router;
