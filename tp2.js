const tp1 = require("./tp1");
const srv1 = tp1.http.createServer((req,resp)=>{
    console.log("Hellor this is a response on the server nodeJS");
    resp.end("<h1>Hi this is my server NodeJS </h1>");
});

srv1.listen(4500,console.log("My Server is ready on port 4500"));


