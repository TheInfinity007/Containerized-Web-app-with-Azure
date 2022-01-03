const express = require("express"); // Express is a minimal and flexible web application framework ... blah blah blah ... https://expressjs.com
const morgan = require("morgan"); // HTTP request logger middleware ... blah blah blah ... https://www.npmjs.com/package/morgan

const app = express(); // creates an express application ... https://expressjs.com/en/4x/api.html#express
const PORT = process.env.PORT || 3000; // define a port to listen to for incoming requests

// Middleware - refer to https://www.youtube.com/watch?v=lY6icfhap2o

app.use((req, res, next) => {
  // request and response objects are passed through each middleware and next refers to the next middleware or route in line
  console.log(
    "Request Received: ",
    new Date().toLocaleString("en-US", {
      timeZone: "Asia/Calcutta",
    })
  );
  next(); // moving on to the next middleware or route in line, like a break statement
});
/*
purpose: this middleware will log time of each request on the console
*/

app.use(morgan("dev")); // output format -> :method :url :status :response-time ms - :res[content-length]
app.use(express.json()); // to parse/interpret incoming raw data in JSON format in request body

//Routes

app.get("/", (req, res) => {
  res.send("<html><body><h1>Hello World!</h1></body></html>");
});

app.get("/queryParams", (req, res) => {
  // requesting /queryParams with GET method
  res.send(req.query);
});

app.post("/bodyJSON", (req, res) => {
  // requesting /bodyJSON with POST method
  res.json(req.body);
});

app.get("/pathVars/:ping", (req, res) => {
  // requesting /pathVars with GET method
  res.send(req.params.ping);
});

app.get("/favicon.ico", (req, res) => {
  res.send("https://unsplash.com/photos/4kCGEB7Kt4k");
});
//Error Handling

app.use((req, res, next) => {
  const error = new Error("Not Found"); // basic javascript, nothing node here
  error.status = 404; // could also use 500 (google 'HTTP codes')
  next(error); // passing the error object to the next middleware or route in line
});
/*
purpose: this middleware is to throw errors when their is no route specified for the requested resource or some error occurs on the server-side
*/

//Server Config

var server = app.listen(PORT, () => {
  console.log(`Listening At ${PORT} ...`); // callback function after the express app has started listening at PORT
});
/*
purpose: this starts up your express app on whatever PORT you defined on #5
*/
