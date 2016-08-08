module.exports = function (prefix, media) {
    var packagers = {};
    packagers[prefix + '/libs/pkg/common.js'] = [
        'src/components/index.js',
        'src/components/index.js:deps',
        'src/constants/*.js',
        'src/utils/*.js'
    ];
    
    packagers[prefix + '/css/pkg/common.css'] = [
        'src/layouts/css/index.less'
    ];
    
    return media.match('::package', {
        packager: fis.plugin('deps-pack', packagers)
    })
};
