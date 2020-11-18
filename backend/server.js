'use strict';

const express = require('express');
var bodyParser = require('body-parser');
const { ApiError } = require('./ApiError');
const { DevicesService } = require('./devicesService');

const port = 7337;
const app = express();
const service = new DevicesService();

app.use(bodyParser.json());

app.get('/devices', (req, res) => {
  res.send(service.getList());
});

app.get('/devices/quantities', (req, res) => {
  res.send(service.getDevicesQuantities());
});

app.get('/devices/:id', (req, res) => {
  const device = service.getItem(req.params.id);
  res.send(device);
});

app.put('/devices/:id/quantity', (req, res) => {
  const { delta } = req.body;
  const quantity = service.changeItemQuantity(req.params.id, delta);
  res.send({ quantity });
});

app.use(function (err, req, res, next) {
  if (err instanceof ApiError) {
    res.status(err.httpStatus).send(err.message);
  } else {
    next(err);
  }
});

app.listen(port, () => console.log(`running on port ${port}`));
