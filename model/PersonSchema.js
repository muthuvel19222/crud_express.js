const mongoose=require('mongoose');
const PersonSchema=mongoose.Schema({
    Name:{
        type:String,
        require:true,
    },
    Age:{
        type:String,
        require:true
    },
    Created_at:{
        type:Date,
        default:Date.now,
    },
    
    DetailReference:{
       type:mongoose.Schema.Types.ObjectId,
       ref:'Details'
    }


});

module.exports=mongoose.model('Persons',PersonSchema);