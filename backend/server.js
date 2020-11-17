'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const EventEmitter = require('events');
const { ApiError } = require('./ApiError');
const { DevicesService } = require('./devicesService');

const port = 7337;
const app = express();
const service = new DevicesService();

const eventStream = new EventEmitter();
const eventType = 'updateQuantity';

app.use(bodyParser.json());

app.get('/devices', (req, res) => {
  res.send(service.getList());
});

app.get('/devices/:id', (req, res) => {
  const device = service.getItem(req.params.id);
  res.send(device);
});

app.post('/devices/:id/quantity/change', (req, res) => {
  const { delta } = req.body;
  const device = service.changeItemQuantity(req.params.id, delta);
  res.send(device);

  const { id, quantity } = device;
  eventStream.emit(eventType, { id, quantity });
});

app.get('/subscribe', (req, res) => {
  res.writeHead(200, {
    'Content-Type': 'text/event-stream',
    'Cache-Control': 'no-transform',
    Connection: 'keep-alive',
  });

  eventStream.on(eventType, function (data) {
    res.write(`event: ${eventType}\n`);
    res.write(`data: ${JSON.stringify(data)}\n`);
    res.write(`id: ${Date.now()}\n\n`);
  });
});

app.use(function (err, req, res, next) {
  if (err instanceof ApiError) {
    res.status(err.httpStatus).send(err.message);
  } else {
    next(err);
  }
});

app.listen(port, () => console.log(`running on port ${port}`));
