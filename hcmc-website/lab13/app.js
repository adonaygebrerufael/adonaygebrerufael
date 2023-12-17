const express = require('express');
const app = express();

// Parse incoming request bodies for POST requests
app.use(express.json()); 
app.use(express.urlencoded({ extended: false }));

// Users router
const usersRouter = express.Router();
usersRouter.get('/', (req, res) => {
  res.json({message: 'Got users route'});
});

usersRouter.post('/', (req, res) => {
  const user = req.body;
  // Save user...
  res.status(201).json(user); 
});

// Products router
const productsRouter = express.Router();

productsRouter.get('/', (req, res) => {
  res.json({message: 'Got products route'});  
});

productsRouter.post('/', (req, res) => {
  const product = req.body;
  // Save product... 
  res.status(201).json(product);
});

// Register routers
app.use('/users', usersRouter);
app.use('/products', productsRouter);

// Custom 404 handler
app.use((req, res, next) => {
  res.status(404).send('Sorry, resource not found!');
});

// Error handler
app.use((err, req, res, next) => {
  console.error(err); 
  res.status(500).send('Internal Server Error'); 
});

app.listen(3000, () => console.log('Server started on port 3000'));