var express = require('express');
var router = express.Router();

/* GET users listing. */

router.get('/', function (req, res, next){
    var random1 = Math.random().toFixed(2)
    var random2 = Math.random().toFixed(2)
    var x = req.query.x;
    var y = req.query.y;

    if(y==undefined && x==undefined){
        x = random1
        y = random2
    }

    pow = Math.pow(x,y).toFixed(2)
    trunc= Math.trunc(x)
    tanh= Math.tanh(y).toFixed(2)
    sign=Math.sign(x).toFixed(2)
    res.send(`Math.pow(${x},${y}): ${pow} Math.trunc(${x}) is: ${trunc} Math.tanh(${y}) is: ${tanh} Math.sign(${x}) is : ${sign}`);
});
    
module.exports = router;