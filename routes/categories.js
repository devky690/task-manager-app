const express = require('express');
const {check, validationResult} = require('express-validator');
const Category = require('../models/Category');


const bodyParser = require('body-parser');
const router = express.Router();

router.use(bodyParser.json());

//get all categories
router.get('/', (req, res)=>{
    Category.find({}).then((categories) =>
        res.send(categories) )
    })



//create a category
router.post('/',
async (req, res) => {
        const newCategory = new Category({
            title: req.body.title,

        })
    const category = await newCategory.save();
    
    //return category to client
    res.json(category);
    
});

//update a category
router.patch('/:id', (req, res) => {
    // We want to update the specified list (list document with id in the URL) with the new values specified in the JSON body of the request
    Category.findOneAndUpdate({ _id: req.params.id}
     ,{  $set: req.body}
    ).then(() => {
        res.sendStatus(200);
    })
})



//delete a category
router.delete('/:id', async(req, res) => {
        
        Category.findOneAndRemove({
            _id: req.params.id
        }).then((removedCategory) => {
            res.send(removedCategory);
        })

});



module.exports = router;