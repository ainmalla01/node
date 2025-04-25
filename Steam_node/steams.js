import fs from 'fs';

// createReadStream creates a readable stream from a file.

const readstream =new fs.createReadStream("steam.txt");

// data event is fired each time a chunk is read.
readstream.on('data',(chuck)=>{
    console.log("recieve chuck", chuck);
})
// end event is fired when the reading is finished.

readstream.on('end',()=>{
    console.log("File reading finished.");
})

// error event is fired in case of an error during reading.

readstream.on('error', (err) => {
    console.error("Error reading file:", err);
});

const writableStream = fs.createWriteStream('output.txt');

// Write data in chunks
writableStream.write('This is some data.\n');
writableStream.write('This is more data.\n');

// Close the stream after writing
writableStream.end(() => {
    console.log('File has been written successfully!');
});