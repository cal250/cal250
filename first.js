// const message="good morning "


// function sayHello(){
//     console.log(window.message);
// }
// sayHello()
// function sayHello(){
//     console.log(global.message);
// }


// // console.log(global);

let http= require("http");
let server = http. createServer(function (req,res){
 res.writeHead(200,{'Content-Type':'text/plain'})
 res.end('Hello ,this is my node js server!\n ')

});

server.listen(8000,()=> {
    console.log('server running at http://localhost:8000/');
})