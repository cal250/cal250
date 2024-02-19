// const message="good morning "


// function sayHello(){
//     console.log(window.message);
// }
// sayHello()
// function sayHello(){
//     console.log(global.message);
// }


// // console.log(global);

let http= require('http');
let server=http.createServer((req,res)=>{
    res.writeHead(200,{
        'content-Type':'text/plain' });
        res.end('this  is my server and may be you too if you want ');
})

server.listen(8000,()=>{
    console.log('server is running at http:/localhost:8000/.')
});