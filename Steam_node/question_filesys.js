import fs from 'fs';

// asysnc

fs.access('file_folder',(err)=>{
if (err){
fs.mkdir('file_folder',(err)=>{
    if(err){
        console.error("error in making file",err);
    }
    console.log("folder file sucessful");

})}
else{
console.log("file already exist");
}
;
});


// sysc

if(!fs.existsSync(newfolder)){
    try{
        fs.mkdirSync('newfolder');
        console.log('Folder created successfully!');
    }catch(err){
        console.error('Error creating folder:', err);
    }
}
