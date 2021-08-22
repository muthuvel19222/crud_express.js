const mongoose=require('mongoose');

const DetailsSchema=mongoose.Schema({
    Country:{
        type:String,
        require:true,
    },
    City:{
        type:String,
        require:true
    },
    Created_at:{
        type:Date,
        default:Date.now,
    }

});

module.exports=mongoose.model('Details',DetailsSchema);