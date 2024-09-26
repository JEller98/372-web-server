import http from "http";

//createServer is looking for a callback function
//create my own little webserver
const server = http.createServer((req, res) => {
    console.log(req.url);
    console.log(req.statusCode);

    //send status code and MIME type
    res.writeHead(200, {
        "Content-Type": "text/html"
    });

    res.write(`<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>My Node.js Server</title>
    </head>
    <body>
        <p>Content offered using the <code>http</code> module!</p>
    </body>
</html>`);

    res.end();

});


const PORT = 9000;

server.listen(PORT, () => {
    console.log(`The server started on port ${PORT}`);
})