fis.require("jello")(fis);

fis.set('project.ignore', [
    "mock-server/**",
    "fis-conf.js",
    "conf/**",
    ".gitignore",
    ".editorconfig",
    "package.json",
    'node_modules/**'
]);



require('./conf/common')(fis);

if (process.env.NODE_ENV == 'production') {
    var productDeploy = require('./conf/prod');
    productDeploy(fis);
} else {
    var devDeploy = require('./conf/dev');
    devDeploy(fis);
}



