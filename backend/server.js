'use strict';

const express = require('express');

const port = 7337;
const app = express();

app.listen(port, () => console.log(`running on port ${port}`));

app.get('/list', (req, res) => {
  res.send([1, 2, 3]);
});
