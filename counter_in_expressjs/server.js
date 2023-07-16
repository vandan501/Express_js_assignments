const express = require('express');
const app = express();

// Initial counter value
let counter = 0;

// Endpoint to get the counter value
app.get('/', (req, res) => {
  res.json({ counter });
});

// Endpoint to increment the counter
app.get('/increment', (req, res) => {
  counter++;
  res.json({ counter });
});

// Endpoint to decrement the counter
app.get('/decrement', (req, res) => {
  counter--;
  res.json({ counter });
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
