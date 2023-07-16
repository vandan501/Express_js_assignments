const http = require('http');

// Sample product data
const menProducts = [
  { id: 1, name: 'Men Product 1', category: 'Men' },
  { id: 2, name: 'Men Product 2', category: 'Men' },
  // Add more men products here
];

const womenProducts = [
  { id: 1, name: 'Women Product 1', category: 'Women' },
  { id: 2, name: 'Women Product 2', category: 'Women' },
  // Add more women products here
];

// Create the server
const server = http.createServer((req, res) => {
  // Set the response headers
  res.setHeader('Content-Type', 'application/json');

  // Handle the different API endpoints
  if (req.url === '/') {
    // Root endpoint
    res.statusCode = 200;
    res.end(JSON.stringify({ message: 'Welcome to Men & Women Dummy Data' }));
  } 
  else if (req.url === '/men') {
    // Men endpoint
    res.statusCode = 200;
    res.end(JSON.stringify(menProducts));
  } 
  else if (req.url === '/women') {
    // Women endpoint
    res.statusCode = 200;
    res.end(JSON.stringify(womenProducts));
  } 
  else 
  {
    // Other endpoint
    res.statusCode = 404;
    res.end(JSON.stringify({ message: 'Page not found' }));
  }
});


// Start the server
const port = 3000;
server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
