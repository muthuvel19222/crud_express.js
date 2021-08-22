const express=require('express');
const router=express.Router();
const Details=require('../model/DetailsSchema')

/* router.get('/dude',(req,res)=>{
    res.json("router is running successfully");
}); */

router.post('/',async (req,res)=>{
    try{
const postDetail=await new Details({
        Country:req.body.Country,
        City:req.body.City,
    });
    const saveDetails=await postDetail.save();
    res.status(200).json(saveDetails);
    }
    catch(err){
        res.json({"error":err});
    }
    

});


router.get('/',async (req,res)=>{
    try{
    const getAllDetails=await Details.find();
    res.status(200).json(getAllDetails);
    }
    catch(err){
        res.json({"error":err});
    }
    

});

router.get('/:id',async (req,res)=>{
    try{
    const getDetailsById=await Details.findById(req.params.id);
    res.status(200).json(getDetailsById);
    }
    catch(err){
        res.json({"error":err});
    }
    

});

router.put('/:id',async (req,res)=>{
    try{
    const updateDetailsById=await Details.updateOne({_id:req.params.id},{$set:{Country:req.body.Country,City:req.body.City}});
    res.status(200).json(updateDetailsById);
    }
    catch(err){
        res.json({"error":err});
    }
    

});

router.delete('/:id',async (req,res)=>{
    try{
    const deleteDetailsById=await Persons.remove({_id:req.params.id});
    res.status(200).json(deleteDetailsById);
    }
    catch(err){
        res.json({"error":err});
    }
    

});

module.exports=router;