import fs from 'fs';
// reading file 
fs.readFile('./user.txt', 'utf-8', (err, data) => {
    if (err) {
        console.error("Error reading file", err);
        return;
    }
    console.log("User data: ", data);

});
const data="i am web developder";
fs.writeFile('./user.txt',data,(err)=>{
    if(err){
        console.error("Error writeing file", err);
        return;
    }
    console.log("writing data : ",data)
})
const data2=" data is appending";
fs.appendFile("./user.txt",data2,(err)=>{
    if(err){
        console.error("Error for appending",err);
        return;
    }
    console.log("append successful!");
})
