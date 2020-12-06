const http = require('http'); //looks for global http, which node.js ships with
const path = require('path');

// const basic_routes = require('./basic_routes');
// const server = http.createServer(basic_routes); //execute function stored in `basic routes` in the incoming request

const mainRoute = require('./routes/main');
const usersRoute = require('./routes/users');

//third party packages 
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded()); //allows us to parse incoming requests 

app.use(mainRoute);
app.use(usersRoute);

app.listen(3000);