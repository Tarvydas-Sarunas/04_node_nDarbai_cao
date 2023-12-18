const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const app = express();
const port = 3000;

// Middleware
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

// DATA
const cars = {
  bmw: ['i3', 'i8', '1 series', '3 series', '5 series'],
  mb: ['A class', 'C class', 'E class', 'S class'],
  vw: ['Golf', 'Arteon', 'UP'],
};

// routes
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// app.get/api/cars paduoda visus cars
app.get('/api/cars', (req, res) => {
  res.json(cars);
});
// app.get/api/cars paduoda visus cars
app.get('/api/cars/:brand', (req, res) => {
  const brand = req.params.brand;
  const allModels = cars[brand];
  res.json(allModels);
});

// listen
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
