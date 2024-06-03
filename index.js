// console.log("Hello World")
// console.log (22+22)
// console.log ("Consistency is Key")

const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;

// const server = http.createServer((req,res) => 
// {
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/plain');
//     res.end ('Hello World \n');
// });

const server = http.createServer((req, res) => {
     res.statusCode = 200;
      res.setHeader('Content-Type', 'text/html');
    
        switch (req.url) {
            case "/":
                res.write('<body style="color: grey"></body>')
                res.write('<h1 style="color: orange">Welcome To My Universe</h1>');
                res.write('<p style= "color: brown">The most important thing is, whatever you do decide to choose, take it seriously and do your best</p>');
              break;
            case "/login":
              res.write('<h1 style="color: orange"> Lindsey Weche App!!! </h1>');
              res.write('<p style="color: brown">To bring about change, you must not be afraid to take the first step. We will fail when we fail to try </p>')
              break;
            default:
              res.statusCode = 404;
              res.write("Error: 404 Not Found");
              break;
          }
      
          res.end();
        })

server.listen(port, hostname, () =>{
    console.log(`Server running at http://${hostname}:${port}/`);
});