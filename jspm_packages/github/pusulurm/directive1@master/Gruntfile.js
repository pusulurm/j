module.exports = function(grunt){
    grunt.initConfig({
        pkg : grunt.file.readJSON('package.json'),
        html2js : {
            options: {
                base: 'directive1',
                module: 'directive1.templates',
                singleModule: true,
                useStrict: true,
                htmlmin: {
                    collapseBooleanAttributes: true,
                    collapseWhitespace: true,
                    removeAttributeQuotes: true,
                    removeComments: true,
                    removeEmptyAttributes: true,
                    removeRedundantAttributes: true,
                    removeScriptTypeAttributes: true,
                    removeStyleLinkTypeAttributes: true
                }
            },
            main: {
                src: ['templates/**/*.html'],
                dest: '_directive1_template_cache.js'
            }
        }
    });
    require('load-grunt-tasks')(grunt);
    grunt.registerTask('default', ['html2js']);
};