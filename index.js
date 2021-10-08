// const express = require("express");
// const app = express();

// app.get("/", (req, res) => {
//     console.log("Hello World received a request.");

//     const target = process.env.TARGET || "World";
//     res.send("Hello ${target}!\n");
// });

// const port = process.env.PORT || 3000;
// app.listen(port, () => {
//     console.log("Hello world listening on port", port);
// });

// -------------------------------------------------------

// const http = require("http");

// http.createServer(function (req, res) {
//     // Send the HTTP header
//     // HTTP Status: 200: OK
//     // Content type: Text/html
//     res.writeHead(200, {"Content-Type": "text/html"});

//     // Send the response body as hello world
//     res.end("<h2>Hello World!</h2>");
// }).listen(3000);

// console.log("Server running at http://127.0.0.1:3000/");

// --------------------------------------------------------

const http = require("http");

const host = "0.0.0.0";
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end("Hello World!");
});

server.listen(port, host, () => {
    console.log("Web server running at http://%s:%s", host, port);
});