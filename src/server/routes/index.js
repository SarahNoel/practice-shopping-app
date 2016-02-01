var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Item = mongoose.model('items');

//display index
router.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../../client', 'index.html'));
});

//get one
router.get('/item/:id', function(req, res){
  Item.findById(req.params.id, function(err, item){
    if(err){
      res.status(500).json(err);
    }
    else{
      res.status(200).json(item);
    }
  });
});

//get all
router.get('/items', function(req, res){
  Item.find(function(err, items){
    if(err){
      res.status(500).json(err);
    }
    else{
      res.status(200).json(items);
    }
  });
});

//post-create one
router.post('/item', function(req, res){
  var newItem = new Item({'name':req.body.name, 'price':req.body.price, 'description': req.body.description});
  newItem.save(function(err, item){
    if(err){
      res.status(500).json(err);
    }
    else{
      Item.find(function(err, items){
      res.status(200).json(items);
      });
    }
  });
});

//delete one
router.delete('/item/:id', function(req, res){
  Item.findByIdAndRemove(req.params.id, function(err, item){
    if(err){
      res.status(500).json(err);
    }
    else{
      res.status(200).json(item);
    }
  });
});

//put-update one
router.put('/item/:id', function(req, res){
  var updateItem = {'name':req.body.name, 'price':req.body.price, 'description':req.body.description};
  var options = {new:true};
  Item.findByIdAndUpdate(req.params.id, updateItem, options, function(err, item){
    if(err){
      res.status(500).json(err);
    }
    else{
      res.status(200).json(item);
    }
  });
});



module.exports = router;
