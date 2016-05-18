module.exports = function (grunt) {
	grunt.initConfig({
		watch: {
			'pug': {
				files: ['src/views/**/**/*.pug'],
				tasks: ['pug']
			},
			'ES6': {
				files: ['src/js/*.js'],
				tasks: ['babel']
			}
		},
		pug: {
			options: {},
			dev: {
				files: [{
					expand: true,
					cwd: './src/views/',
					src: ['*.pug'],
					dest: './dist/',
					ext: '.html'
				}]
			}
		},
		babel: {
			options: {
				presets: ['es2015','react'],
				sourceMap: false
			},
			dev: {
				files: [{
					expand: true,
					cwd: './src/js/',
					src: ['*.js'],
					dest: './dist/js/',
					ext: '.js'
				}]
			}
		}
	})

	grunt.loadNpmTasks('grunt-contrib-watch')
	grunt.loadNpmTasks('grunt-contrib-pug')
	grunt.loadNpmTasks('grunt-babel')

	grunt.registerTask('default',['watch'])
}