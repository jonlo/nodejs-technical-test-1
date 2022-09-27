let scansParser  = require('../middlewares/scansParser');
let applyProtocols = require('../middlewares/protocols');
let distanceFilter = require('../middlewares/distanceFilter');

const express = require('express');
let app = express();


app.post('/radar', scansParser, distanceFilter, applyProtocols, (req, res) => {
    try {
        res.send({ x: res.locals.scans[0].coordinates.x, y: res.locals.scans[0].coordinates.y });
    } catch (error) {
        res.status(500);
        res.json({
            error: "wrong scans json provided"
        })
    }

})

module.exports = app;