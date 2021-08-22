const express=require('express');
const mongoose=require('mongoose');
const morgan=require('morgan');
const uuid=require('uuid');
var app=express();
require('dotenv/config');



/* app.use((req,res,next)=>{
    console.log("Middleware");
    next();
}); */

const myperson=[
    {
        id:uuid.v4(),
        name:'muthuvel',
        age:'26',
    },
    {
        id:uuid.v4(),
        name:'Avanish',
        age:'26',
    },
    {
        id:uuid.v4(),
        name:'naveen',
        age:'26',
    }
];

//body-parser
app.use(express.json());


//Third party custom middleware
app.use(morgan('dev'));

/* 

app.get('/',function(req,res){
    res.json(myperson);
});

app.get('/about',function(req,res){ 
    res.json('Hi Iam about');
});


app.get('/:id',async(req,res)=>{ 
    var getOne=await myperson.filter(e=>e.id === req.params.id);
    res.status(200).json(getOne);
});

app.post('/',async(req,res)=>{ 
     console.log(req.body); 
    myperson.push(req.body);
    res.status(200).json(req.body);
}); 
*/

const PersonRouter=require('./Personroute');
app.use('/persons',PersonRouter);   

const PORT=process.env.PORT ||8080
app.listen(PORT, ()=>{
    console.log(`Serve start on On ${PORT}`);
});

mongoose.set("useNewUrlParser",true);
mongoose.set("useUnifiedTopology",true);
mongoose.connect(process.env.MYDB_CONNECTION,(err)=>{
    if(err){console.log('DB is not connected')}
    console.log('DB is connected');

});


