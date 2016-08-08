var jsMatch = require('./prod/javascript'),
    styleMatch = require('./prod/styles'),
    packageMatch = require('./prod/package'),
    deployMatch = require('./prod/deployment'),
    jelloMatch = require('./prod/jello');

module.exports = function (fis) {
    
    const STATICS = 'static';
    
    fis.set("statics", STATICS);
    
    var prodMedia = fis.media("prod");
    
    jelloMatch(prodMedia);
    packageMatch(STATICS, prodMedia);
    jsMatch(STATICS, prodMedia);
    styleMatch(STATICS, prodMedia);
    deployMatch(STATICS, prodMedia, fis);
    
};
