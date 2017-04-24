/**
   * 配置Grunt
   */
  module.exports = function(grunt)
  {
      /**
       * 定义压缩合并
       */
      grunt.initConfig(
      {
          /**
           * 合并任务
           */
          concat: 
          {
              /**
               * 将js文件内所有js，合并为all.js
               */
              dist: 
              {
                  src : ['js/*.js'],
                  dest: 'js/all.js'
              },

              /**
               * 将css文件内所有css，合并为all.css
               */
              css: 
              {
                src: ['css/*.css'],
                dest: 'css/all.css'
              }
          },

          /**
           * 压缩CSS
           */
          cssmin: 
          { 
              /**
               * 将all.css,压缩为all.min.css
               */
              css: 
              {
                  src : 'css/all.css', 
                  dest: 'css/all.min.css'  
              }  
             },

             /**
           * 压缩JS
           */
          uglify:
          {
              /**
               * 将all.js,压缩为all.min.js
               */
              build:
              {
                  src : 'js/all.js', 
                  dest: 'js/all.min.js' 
              }
          }
      })

      /**
       * 加载必要插件
       */
      grunt.loadNpmTasks('grunt-css');
      grunt.loadNpmTasks('grunt-contrib-uglify');
      grunt.loadNpmTasks('grunt-contrib-concat'); 

      /**
       * 注册必要插件
       */
      grunt.registerTask('default', ['concat','uglify','cssmin']); 
  }