// Wrapper函数
module.exports = function(grunt) {
  'use strict';

  // 构建配置任务
  grunt.initConfig({

    // 读取package.json的内容，形成个json数据
    pkg: grunt.file.readJSON('package.json'),

    // 注释信息
    banner: '/*!\n' +
          ' * name:<%= pkg.name %>\n' +
          ' * version:<%= pkg.version %>\n' +
          ' * date:<%= grunt.template.today("yyyy-mm-dd") %>\n' +
          ' * Copyright (c)<%= grunt.template.today("yyyy") %>\n' +
          ' */',

    // 清除发布文件
    clean: {
      dist: {
        src: ['dist']
      }
    },

    // 编译less
    less: {
      dist: {
        options: {
          banner: '<%= banner %>',
          compress: true
        },
        files: [
          {
            expand: true,
            cwd: 'static/less',
            src: ['**/*.less','!common/**/*'],
            dest: 'dist/css',
            ext: '.min.css'
          }
        ]
      }
    },

    // Js语法检查
    jshint: {
      options: {
        jshintrc: true,
        force: true
      },
      files: {
        src: [
          'static/js/**/*.js',
          '!static/js/lib/*.js'
        ]
      }
    },

    //压缩js文件
    uglify: {
      dist: {
        options: {
          banner: '<%= banner %>'
        },
        files: [
          {
            expand: true,
            cwd: 'static/js',
            src: ['**/*.js',
                  '!lib/**/*.js'],
            dest: 'dist/js',
            ext: '.min.js'
          }
        ]
      }
    },

    // 复制文件
    copy: {
      fonts: {
        files: [
          {
            expand: true,
            cwd: 'static/fonts',
            src: ['**/*'],
            dest: 'dist/fonts'
          }
        ]
      },
      images: {
        files: [
          {
            expand: true,
            cwd: 'static/images',
            src: ['**/*'],
            dest: 'dist/images'
          }
        ]
      },
      scripts: {
        files: [
          {
            expand: true,
            cwd: 'static/js/lib',
            src: ['**/*'],
            dest: 'dist/js/lib'
          }
        ]
      },
      html: {
        files: [
          {
            expand: true,
            cwd: 'views',
            src: ['**/*.html'],
            dest: 'dist'
          }
        ]
      },
      server: {
        files: [
          {
            expand: true,
            cwd: 'server',
            src: ['**/*'],
            dest: 'dist/server'
          }
        ]
      },
      other: {
        files: [
          {
            expand: true,
            cwd: 'views/opus',
            src: ['**/*','!**/*.jade'],
            dest: 'dist/opus'
          }
        ]
      }
    },

    //jade编译
    jade: {
      dist: {
        options: {
          banner: '<%= banner %>',
          data: function() {
            return require('./server/data.json');
          }
        },
        files: [
          {
            expand: true,
            cwd: 'views',
            src: ['**/*.jade', '!common/**/*.jade'],
            dest: 'dist',
            ext: '.html'
          }
        ]
      }
    },

    // 本地服务
    connect: {
      options: {
        port: 9000,
        hostname: '*', //默认就是这个值，可配置为本机某个 IP，localhost 或域名
        livereload: 35729  //声明给 watch 监听的端口
      },
      server: {
        options: {
          open: false, //自动打开网页 http://
          base: [
            'dist'  //主目录
          ]
        }
      }
    },

    // 监听文件修改
    watch: {
      options: {
        dateFormat: function(time) {
          grunt.log.writeln('此次监听共历时' + time + '毫秒');
          grunt.log.writeln('程序监听中...');
        }
      },
      less: {
        files: ['static/less/**/*.less'],
        tasks: ['less']
      },
      html: {
        files: ['views/**/*.html'],
        tasks: ['copy']
      },
      jade: {
        files: ['views/**/*.jade'],
        tasks: ['jade']
      },
      uglify: {
        files: ['static/js/**/*.js'],
        tasks: ['uglify']
      },
      images: {
        files: ['static/images/**/*'],
        tasks: ['copy']
      },
      livereload: {
        options: {
          livereload: '<%=connect.options.livereload%>'  //监听前面声明的端口  35729
        },
        files: [  //下面文件的改变就会实时刷新网页
          'static/**/*',
          'views/**/*'
        ]
      }
    }
  });

  // 加载Grunt插件
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jade');

  // 默认的Grunt任务
  grunt.registerTask('default',
    ['clean:dist',
     'less',
     'jshint',
     'uglify',
     'copy',
     'jade',
     'connect',
     'watch']);
};