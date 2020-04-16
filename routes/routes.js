var Express =require('express');
var {studentModel}=require('../models/studentmodel');
const router =Express.Router();
router.get('/',(req,res)=>{
    res.send(" student details");
})
router.get('/display',(req,res)=>{
    res.send("display portal");
});
router.get('/parent',(req,res)=>{
    res.send("parent portal");
});
router.post('/students',async(req, res )=>{
    var getname =req.body.name;
    var getroll =req.body.roll;
    var getadminNo=req.body.adminNo;
    var getcollege=req.body.clg;
try {
    var studentdata = new studentModel(req.body);
    var result = await studentdata.save();
    res.json(result);
    } 
catch (error) 
    {
    console.log(error);
    res.status(500).send(error);
    }   
});
router.post('/viewall',async(req,res)=>{
    try {
        var result =await studentModel.find();
        res.send(result);
        
    } catch (error) {
        console.log(error);
    res.status(500).send(error);
    }
});
router.post('/search',async(req,res)=>{
    try {
        var searchkey =req.body.mydata;
        studentModel.find({"adminNo": searchkey},(error,data)=>{
            if (error) {
                throw error;
            } else {
                res.send(data);
            }
        });
       
    } catch (error) {
        console.log(error);
    res.status(500).send(error);
    }
});
router.post('/search1',(req,res)=>{
    try {
        studentModel.find(req.body,(error,data)=>{
            if (error) {
                throw error;
            } else {
               res.send(data);
            }
        });
        
    } catch (error) {
        
    }
});
router.post('/update',(req,res)=>{
    try {
       studentModel.findOneAndUpdate({adminNo:req.body.adminNo},req.body,(error,data)=>{
           if (error) {
               res.json({"status":"errror"});
           } else {
            res.json({"status":"success"});    
           }
       }) 
    } catch () {
        
    }
})

module.exports=router;