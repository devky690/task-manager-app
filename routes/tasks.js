const express = require('express');
const {check, validationResult} = require('express-validator');
const Task = require('../models/Task')

const bodyParser = require('body-parser');
const router = express.Router();

router.use(bodyParser.json());

//get all tasks in task
router.get('/', (req, res)=>{
    Task.find({
        _taskId: req.params.taskId
    }).then((tasks) =>
        res.send(tasks))
    })



//create a task in category
router.post('/:categoryId/tasks',
 (req, res) => {
        let newTask = new Task({
            title: req.body.title,
            _categoryId: req.params.categoryId
        })
     newTask.save().then((newTaskInfo)=>{
        res.send(newTaskInfo);
     });
    
    });

//update a task
router.patch('/:categoryId/tasks/:taskId', (req, res) => {

    Task.findOneAndUpdate({
        _id: req.params.taskId,
        _categoryId: req.params.categoryId

    }, {
        $set:(req.body)
    }
    ).then((c) => {
       res.sendStatus(200);
    })
})


//delete a task
 router.delete('/:categoryId/tasks/:id', async(req, res) => {
        
        Task.findOneAndRemove({
            _id: req.params.id
        }).then((task)=>{
            res.send(task)
        }
)}
)




module.exports = router