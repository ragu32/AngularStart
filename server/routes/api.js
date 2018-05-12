const express = require('express');
const router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('mongodb://Ragupathy:Gosmsby5@ds219000.mlab.com:19000/projectname',['FirstAngular']);
/* GET api listing. */

router.get('/', (req, res) => {
  res.send('api works');
});


// Get Todos
router.get('/FirstAngular', function(req, res, next){
    db.FirstAngular.find(function(err, todos){
        if(err){
           res.send(err);
        } else {
           res.json(todos);
        }
    });
});

module.exports = router;
