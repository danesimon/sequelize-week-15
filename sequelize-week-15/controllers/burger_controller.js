//dependencies
const express = require('express');
const methodOverride = require('method-override');
const bodyParser = require('body-parser');
const router = express.Router();
const models = require('../models');


//redirect to burger route by default
router.get('/', function(req, res) {
    res.redirect('/burgers');
});

//when directed to burgers route, get burger.js logic, call functions within it. 
router.get('/burgers', function(req, res) {
    models.burgers.findAll().then(function(data){
    res.render('index', { burgers: data });
    });
});

router.post('/burgers/create', function(req, res) {
     models.burgers.create({
        burger_name:req.body.name,
        devoured: 0
     }).then(function(){
        res.redirect('/burgers');
     });
});

router.put('/burgers/update/devour/:id', function(req, res) {
    //tableName, column, ID, callback
   models.burgers.update({
    devoured:1
    },{where:{
        id:req.params.id
    }}
   ).then(function(){
        res.redirect('/burgers');
   }) 
});

router.delete('/burgers/delete/:id', function(req, res) {
    //run burger.js logic of deleteOne(table,id,callback)
    models.burgers.destroy(
        {where:{
            id:req.params.id
        }}).then(function(){
            res.redirect('/burgers');
        })
})

//initial load/direct
router.use(function(req, res) {
    res.redirect('/burgers');
})
//export
module.exports = router;

/*
//when route is burger/create run function
router.post('/burgers/create', function(req, res) {
    //call burger logic insertOne function(column,data,callback);
    burger.insertOne('burger_name', req.body.name, function() {
        //redirect to updated main page after insertOne
        res.redirect('/burgers');
    })
})

//update route
router.put('/burgers/update/devour/:id', function(req, res) {
    //tableName, column, ID, callback
    burger.updateOne('burgers','devoured', req.params.id, function() {
        //redirect to home upon response
        res.redirect('/burgers');
    })
})
//delete method available because method override
router.delete('/burgers/delete/:id', function(req, res) {
    //run burger.js logic of deleteOne(table,id,callback)
    burger.deleteOne('burgers',req.params.id, function() {
        //upon delete, redirect home
        res.redirect('/burgers');
    })
})*/