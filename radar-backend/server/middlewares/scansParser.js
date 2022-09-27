const Scan = require('../radar/scanner/scan')

let scansParser = (req, res, next) => {
	try {
		const scansData = req.body.scan;
		const scans = [];
		scansData.forEach((scanData) => {
			scans.push(new Scan(scanData));
		});
		res.locals.scans = scans;
		next();	
	} catch (error) {
		res.status(500);
		res.json({
			error:"wrong scans json provided"
		})
	}
	
};

module.exports = scansParser;
