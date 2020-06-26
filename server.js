const express = require('express');
const http = require('http');

const app = express();



const server = http.createServer(app)


app.use(express.static(__dirname+ "/public"))

server.listen(3000, () => {
    console.log('RUNNING')
})


