const http = require("http");
const calculatorHome = require("./calculatorHome");

const server = http.createServer(calculatorHome);

server.listen(1234, console.log("Server is runnin on https://localhost:1234"));
