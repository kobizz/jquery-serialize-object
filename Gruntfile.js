module.exports = function (grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> v<%= pkg.version %> | (c) <%= pkg.author %> | https://github.com/cobicarmel/jquery-serialize-object/blob/master/LICENSE.txt \n <%= grunt.template.today("yyyy-mm-dd HH:MM") %> */\n'
            },
            dist: {
                files: [{
					expand: true,
					cwd: 'src',
					src: '*.js',
					dest: 'dist',
					ext: '.min.js'
				}]
            }
        },
        watch: {
            scripts: {
                files: ['src/*.js'],
                tasks: ['scripts']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask( 'default', [
        'scripts'
    ] );

    grunt.registerTask( 'scripts', [
        'uglify'
    ] );
};