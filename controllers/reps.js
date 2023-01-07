const Rep = require('../models/rep')
const mongoose = require('mongoose')

exports.getReps = async (req, res, next) => {
    try {
        const reps = await Rep.find();

        return res.status(200).json({
            success:true,
            data:reps
        });
    } catch (err){
        return res.status(500).json({
            success: false,
            error: 'Server Error'
        });
    }
} 


exports.AddReps = async (req, res, next) => {
    try {
        const {text, comments, link, date} = req.body;

        const rep = await Rep.create(req.body);

        return res.status(201).json({
            success:true,
            data:rep
        })
    } catch (error) {
        
    }
    
} 

exports.DeleteRep = async (req, res, next) => {
    try {
        const rep = await Rep.findById(req.params.id);
         
        if(!rep){
            return res.status(404).json({
                success: false,
                error: 'No task found'
            });
        }

        await rep.remove();

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
