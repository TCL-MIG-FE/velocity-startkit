module.exports = function (prefix, media) {
    return media.match("**.{css,less}", {
        optimizer: fis.plugin('clean-css'),
        useHash: true,
    }).match('src/(**.css)', {
        release: prefix + '/css/$1',
        useHash: true
    }).match('(*.png)', {
        useHash: false,
        release: prefix + '/css/images/$1',
        optimizer: null
    }).match('(*.gif)', {
        useHash: false,
        release: prefix + '/css/images/$1'
    }).match(/fonts\/(.*\.eot)/i, {
        release: prefix + '/css/fonts/$1'
    }).match(/fonts\/(.*\.svg)/i, {
        release: prefix + '/css/fonts/$1'
    }).match(/fonts\/(.*\.ttf)/i, {
        release: prefix + '/css/fonts/$1'
    }).match(/fonts\/(.*\.woff)/i, {
        release: prefix + '/css/fonts/$1'
    });
    
};
