const path = require('path');
const rootDir = require('../util/path');

const express = require('express');
const router = express.Router();

router.get('/users',(req,res) => {
    //sends a file ***globally*** aka requires global path 
    res.sendFile(path.join(rootDir,'views','users.html')); 
});

router.post('/create-user',(req,res) => {
    console.log(req.body.username);
    // const body = [];
    // req.on('data', (chunk)=> {
    //     body.push(chunk);
    // });
    // req.on('end',()=>{ //we can expect all the chunks of data to be finished reading by now 
    //     const parsedBody = Buffer.concat(body).toString();
    //     console.log(parsedBody.split('=')[1]);
    // });
    // res.statusCode = 302;
    res.redirect('/');
});  

module.exports = router;