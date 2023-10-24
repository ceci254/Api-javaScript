var express = require('express');
var router = express.Router();
const db = require('../db/db.json');

/* GET users listing. */
router.get('/db', function(req, res, next) {
 try { 
  res.json(db);
} catch (err) { 
  res.status(500),json({error: 'el servidor no responde'});
}
});

router.get('/pizzas', function(req, res, next){ 
  try { 
    res.json(id());
  } catch (error){  
    res.status(500).json({error: 'El servidor no responde '});
  } 
});


router.get('/:id', function(req, res, next) {
  const id = parseInt(req.params.id);
  const pizza = db.pizzas.find(pizza => pizza.id === id);
  if(pizza) { 
    res.json(pizza);
  } else {   
    res.status(404).json({ error: 'NO EXISTE LA PIZZA'});
  }
});


module.exports = router;


