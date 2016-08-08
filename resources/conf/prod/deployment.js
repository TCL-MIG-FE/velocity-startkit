const needDeploy = function (path) {
    var excludes = [
        '/test/.*',
        "/static/node_modules",
        '/static/src/layouts',
        '/static/src/modules',
        '/static/src/constants',
        '/static/src/utils',
        '/static/test.json',
        '/WEB-INF/server.*'
    ];
    
    var testExclude = function (path) {
        return excludes.some(function (item) {
            return new RegExp(item).test(path)
        })
    };
    
    if (testExclude(path)) {
        return false;
    }
    
    return true;
    
};

module.exports = function (prefix, media, fis) {
    return media.match("**", {
        deploy: [
            
            function (options, modified, total, next) {
                for (var i = modified.length - 1; i >= 0; i--) {
                    var path = modified[i].getHashRelease();
                    !needDeploy(path) && modified.splice(i, 1);
                }
                next();
            },
            
            fis.plugin('replace', {
                from: '/' + prefix,
                to: './' + prefix
            }),
            
            
            fis.plugin('local-deliver', {
                to: '../'
            }),
        
        
        ]
    });
}
