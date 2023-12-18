const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const app = express();
const port = 3000;

// Middleware
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

// routes
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// listen
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
