const http = require('http');

//third party packages 
const express = require('express');

const server = http.createServer((req, res) => {

    const url = req.url;
    const method = req.method;

    if (url === '/') {
        // console.log(url);
        res.setHeader('Content-Type','text/html');
        res.write('<html>');
        res.write('<head><title>Main Page</title></head>');
        res.write('<body><h1>Greetings!</h1>');
        res.write('<form action="/create-user" method="POST"><input type="text" name="username"></input>');
        res.write('<button type="submit">Create User</button>')
        res.write('</body>')
        res.write('</html>');
        return res.end();
    }

    if (url === '/users') {
        // console.log(url);
        res.setHeader('Content-Type','text/html');
        res.write('<html>');
        res.write('<head><title>Users</title></head>');
        res.write('<body><h1>Users:</h1>');
        res.write('<ul><li>Crystal</li></ul>');
        res.write('<ul><li>Tanha</li></ul>');
        res.write('<ul><li>Danny</li></ul>');
        res.write('<ul><li>Rachel</li></ul>');
        res.write('</body>')
        res.write('</html>');
        return  res.end();
    }

    if (url === '/create-user' && method === "POST") {
        const body = [];
        req.on('data', (chunk)=> {
            body.push(chunk);
        });
        req.on('end',()=>{ //we can expect all the chunks of data to be finished reading by now 
            const parsedBody = Buffer.concat(body).toString();
            console.log(parsedBody.split('=')[1]);
        });
        res.statusCode = 302;
        res.setHeader('Location','/'); //redirect back to / after submitting form 
        res.end();

    };

});

server.listen(3000);