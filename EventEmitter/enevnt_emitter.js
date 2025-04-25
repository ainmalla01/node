import {EventEmitter} from 'events';

const event_emmiter=new EventEmitter();
event_emmiter.on('greet',(name)=>{
    console.log("hello, ",name);
}
)
event_emmiter.on('request',(url,method)=>{
    console.log(`Received ${method} request to ${url}`);
})
event_emmiter.emit('greet','aion');
event_emmiter.emit('request', '/home', 'GET');