const ProtocolFactory = require('../radar/protocols/protocolFactory')

let applyProtocols = (req, res, next) => {
    try {
        let scans = res.locals.scans;
        req.body.protocols.forEach(protocolName => {
            const protocol = ProtocolFactory.createProtocol(protocolName);
            scans = protocol.apply(scans);
        });
        res.locals.scans = scans;
        next();
    } catch (error) {
        res.status(500);
        res.json({
            error: "wrong protocol provided"
        })
    }

};

module.exports = applyProtocols;
