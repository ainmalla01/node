import fs from 'fs';
 const readstreamfile= new fs.createReadStream('./steam.txt');

 readstreamfile.on('data',(chuck)=>{
   console.log("data : ",chuck);
 })
 readstreamfile.on('error',(err)=>{
    console.error("Error reading file:", err);
 })
 readstreamfile.on('end',()=>{
    console.log("file reading is finished");
 })


//  
 fs.mkdir("data",(err)=>{
    if(err){
        console.error("console error",err)
    }
    console.log("folder/directory is made")
 })
