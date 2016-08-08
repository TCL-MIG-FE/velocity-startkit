module.exports = function (fis) {
    
    fis.set('project.md5Length', 8);
    
    fis.hook('commonjs', {
        extList: ['.js', '.jsx']
    });
    
    fis.unhook('components');
    fis.hook('node_modules');
    
    
    fis.hook('relative')
        .match('**', {
            relative: true
        });
    
    
    return fis.match('{node_modules,src}/**.js', {
        isMod: true
    }).match('src/components/mod/**.js', {
        isMod: false,
    }).match('src/**.js', {
        rExt: 'js',
        parser: fis.plugin('babel-5.x', {}, {
            presets: ["es2015", "react", "stage-0"]
        }),
        
        preprocessor: [
            fis.plugin('js-require-css'),
            fis.plugin('js-require-file', {
                useEmbedWhenSizeLessThan: 4 * 1024 // 小于4k用base64
            })
        ]
    }).match('**.less', {
        rExt: 'css',
        parser: fis.plugin('less-2.x'),
        postprocessor: fis.plugin('autoprefixer', {
            browsers: [
                "last 4 versions"
            ]
        })
    });
    
};
