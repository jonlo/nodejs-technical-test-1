const DistanceSorter = require("../radar/scanner/distanceSorter");

const MAX_DISTANCE = 100;

let distanceFilter = (req, res, next) => {
    try {
        const scans = res.locals.scans;
        scans.forEach((scan, index, arr) => {
            if (scan.distance > MAX_DISTANCE) {
                arr.splice(index, 1);
            }
        });
        DistanceSorter.sortByCloserDistance(scans);
        res.locals.scans = scans;
        next();
    } catch (error) {
        res.status(500);
        res.json({
            error: "wrong scans json provided"
        })
        next();
    }

};


module.exports = distanceFilter;