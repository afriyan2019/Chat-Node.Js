var app  = require('express')();
var http = require('http').Server(app);
var io   = require('socket.io')(http);

app.get('/',function(req, res){
//   res.send('<h1>Halo semuanya</h1>')
     res.sendfile(__dirname + '/index.html'); 
});

//socket.io
io.on('connection',function(socket){
     
    //New Message
    socket.on('newMessage',function(msg){
       //Metode
       io.emit('newMessage',msg);
       console.log('New Chat = ' + msg);  
    });

    //User disconnect
    socket.on('Disconnect',function(msg){
         console.log('User Disconnect');
     });

});

http.listen(3000,function(){
  console.log('listen on 300');  
});