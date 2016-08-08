module.exports = function (prefix, media) {
    
    return media.match("**.js", {
        optimizer: fis.plugin('uglify-js'),
        useHash: true,
    }).match("src/pages/(**)", {
        release: prefix + "/libs/$1"
    })
};
