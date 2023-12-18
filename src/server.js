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

const { data } = require('./db/data');

// routes
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// ROUTES DATA
// get /api/users paduos visus users
app.get('/api/users', (req, res) => {
  res.json(data);
});
// get /api/emails/ paduos visus emailus
app.get('/api/emails', (req, res) => {
  const emailai = data.map((arrObj) => arrObj.email);
  res.json(emailai);
});

// get /api/femaleNames/
app.get('/api/femaleNames', (req, res) => {
  const famale = 'Female';
  const famales = data.filter((arrObj) => arrObj.gender === famale);
  const famalesNames = famales.map(
    (arrObj) => `${arrObj.first_name} ${arrObj.last_name}`
  );
  res.json(famalesNames);
});

// get /api/users/:userId paduos visus users
app.get('/api/users/:userId', (req, res) => {
  const userId = +req.params.userId;
  const found = data.find((arrObj) => arrObj.id === userId);
  if (found === undefined) {
    res.status(404).json({
      msg: `user not found with id ${userId}`,
    });
    return;
  }
  res.json(found);
});

// get /api/users/:brand paduos visus users
app.get('/api/users/:brand', (req, res) => {
  const brand = req.params.brand;
  const found = data.filter((arrObj) => arrObj.car === brand);
  if (found === undefined) {
    res.status(404).json({
      msg: `user not found with car ${brand}`,
    });
    return;
  }
  res.json(found);
});

// PIRMA DALIS

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
