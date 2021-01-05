const VueLoaderPlugin = require('vue-loader/lib/plugin');
var webpack = require('webpack');
<system.webServer>
    <staticContent>
      <clientCache cacheControlCustom="public" cacheControlMode="UseMaxAge" cacheControlMaxAge="365.00:00:00" />
      <remove fileExtension=".woff" />
      <remove fileExtension=".woff2" />
      <mimeMap fileExtension=".woff" mimeType="application/x-font-woff" />
      <mimeMap fileExtension=".woff2" mimeType="application/font-woff2" />
    </staticContent>
</system.webServer>

module.exports = {
  
    pages: {
      'index': {
         entry: [
            "webpack-dev-server/client?http://127.0.0.0:8081",
            "webpack/hot/only-dev-server",
            "./src"
          ],
        template: 'public/index.html',
        title: 'Welcome to my vue generator project',
        chunks: ['chunk-vendors', 'chunk-common', 'index'],
        css: ['@mdi/font/css/materialdesignicons.css'],
      },
      'bad': {
        entry: './src/error-instance.ts',
        template: 'public/bad.html',
        title: 'Error page',
        chunks: ['chunk-vendors', 'chunk-common', 'index'],
        css: ['@mdi/font/css/materialdesignicons.css'],
      },
  
    },
    dev_server: {
        host: '127.0.0.0',
        port: 8081,
        disableHostCheck: true,
    },
    proxy: {
        '/*.html': {
            target: 'https://something.else',
            changeOrigin: true
        }
    },
    plugins: [
        // make sure to include the plugin!
        new VueLoaderPlugin()
      ]
   
  }