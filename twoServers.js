// ```Instructions

// Using the previous example as a guide, create an app that has two web servers.
// One that listens on port 7000 and one that listens on port 7500.
// The one listening on port 7000 will always tell the user something good about themselves.
// The one listening on 7500 will always tell the user something bad about themselves.
// Make sure you create a Github repo and commit this code!
// Bonus

// Look for other ways to expand what your server can do. As possibilities:
// Generate the good/bad phrase randomly from a list of predefined phrases
// Use the twitter package inside the response to also return a random tweet```

// Require/import the HTTP module
const http = require("http");

// Define a port to listen for incoming requests
const PORT = 7000;
const WINE = 7500;

// Create a generic function to handle requests and responses
function handleRequest(request, response) {

  // Send the below string to the client when the user visits the PORT URL
  response.end("You're not a spazz! " + request.url);
}

function handleRequestTwo(request, response) {
  response.end("You are a dweeby spazz! " + request.url)
}
// Use the Node HTTP package to create our server.
// Pass the handleRequest function to empower it with functionality.
const server = http.createServer(handleRequest);
const serverTwo = http.createServer(handleRequestTwo);

// Start our server so that it can begin listening to client requests.
server.listen(PORT, function() {

  // Log (server-side) when our server has started
  console.log("Server listening on port " + PORT);
});

serverTwo.listen(WINE, function() {
  console.log("Server is listening on port " + WINE);
});