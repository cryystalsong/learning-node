const http = require('http');

//third party packages 
const express = require('express');

const basic_routes = require('./basic_routes');

const server = http.createServer(basic_routes);

server.listen(3000);