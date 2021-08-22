const express=require('express');
const { find } = require('./PersonSchema');
const router=express.Router();
const Persons=require('./PersonSchema')





/* router.get('/dude',(req,res)=>{
    res.json("router is running successfully");
}); */



router.post('/',async (req,res)=>{
    try{
const postPerson=await new Persons({
        Name:req.body.Name,
        Age:req.body.Age,
    });
    const savePerson=await postPerson.save();
    res.status(200).json(savePerson);
    }
    catch(err){
        res.json({"error":err});
    }
    

});


router.get('/',async (req,res)=>{
    try{
    const getAll=await Persons.find();
    res.status(200).json(getAll);
    }
    catch(err){
        res.json({"error":err});
    }
    

});

router.get('/:id',async (req,res)=>{
    try{
    const getById=await Persons.findById(req.params.id);
    res.status(200).json(getById);
    }
    catch(err){
        res.json({"error":err});
    }
    

});

router.put('/:id',async (req,res)=>{
    try{
    const updateById=await Persons.updateOne({_id:req.params.id},{$set:{Name:req.body.Name,Age:req.body.Age}});
    res.status(200).json(updateById);
    }
    catch(err){
        res.json({"error":err});
    }
    

});

router.delete('/:id',async (req,res)=>{
    try{
    const deleteById=await Persons.remove({_id:req.params.id});
    res.status(200).json(deleteById);
    }
    catch(err){
        res.json({"error":err});
    }
    

});

module.exports=router;