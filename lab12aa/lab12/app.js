const express = require('express');
const app = express();
const port = 3000;


// Middleware for parsing JSON
app.use(express.json());

// Routes
const usersRouter = require('./routes/users');
const productsRouter = require('./routes/products');

app.use('/users', usersRouter);
app.use('/products', productsRouter);

// 404 Page
app.use((req, res) => {
  res.status(404).send('Page not found');
});

// Error Handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});








