module.exports = function (media) {
    return media.match('views/(**.vm)', {
        isMod: true,
        url: '$1',
        release: '/WEB-INF/views/$1',
        extras: {
            isPage: true
        },
        preprocessor: fis.plugin('extlang')
    }).match('map.json', {
        release: '/WEB-INF/config/$0'
    });
    
};
