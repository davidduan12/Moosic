const Task = require('../models/task')
const mongoose = require('mongoose')

exports.getTasks = async (req, res, next) => {
    try {
        const tasks = await Task.find();

        return res.status(200).json({
            success:true,
            count:tasks.length,
            data:tasks
        });
    } catch (err){
        return res.status(500).json({
            success: false,
            error: 'Server Error'
        });
    }
} 


exports.AddTasks = async (req, res, next) => {
    try {
        const {text, category, day} = req.body;

        const task = await Task.create(req.body);

        return res.status(201).json({
            success:true,
            data:task
        })
    } catch (error) {
        
    }
    
} 


exports.DeleteTasks = async (req, res, next) => {
    try {
        const task = await Task.findById(req.params.id);
         
        if(!task){
            return res.status(404).json({
                success: false,
                error: 'No task found'
            });
        }

        await task.remove();

        return res.status(200).json({
            success: true,
            data: {}
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            error: 'Server Error'
        });
    }
} 

exports.EditTasks = async (req, res, next) => {
    try {
        const task = await Task.findById(req.params.id);
        await Task.updateOne(
            {_id : mongoose.Types.ObjectId(req.params.id)},
            {$set: {"text": req.params.body.toString()}}
        );
        return res.status(200).json({
            success: true,
            data: {}
        });
    } catch (error) {
        console.log(error)
    }
} 
