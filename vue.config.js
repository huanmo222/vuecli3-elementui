const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}

const port = process.env.port || process.env.npm_config_port || 8089 // dev port
module.exports = {
  // 默认配置
  publicPath: process.env.NODE_ENV === 'production'
    ? '/pro-sub-path/' // 生产环境打包用根路径
    : '/', // 开发环境为根路径
  devServer: {
    host: '58.1.32.97',
    port: port, // 端口
    open: true,
    proxy: {
      '/api': {
        target: '58.1.32.97',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '/api': ''
        }
      },
      [process.env.VUE_APP_BASE_API]: {
        // target: `http://58.1.32.97:${port}/mock`, // 本地mock
        target: `${process.env.VUE_APP_URI}${process.env.VUE_APP_BASE_API}`, // 请求其他服务
        changeOrigin: true,
        pathRewrite: {
          ['^' + process.env.VUE_APP_BASE_API]: ''
        }
      }
    }
  },
  configureWebpack: {
    // provide the app's title in webpack's name field, so that
    // it can be accessed in index.html to inject the correct title.
    // name: name,
    resolve: {
      alias: {
        
      }
    }
  },
  outputDir: 'dist/docsname_' + new Date().getTime(),
  // assetsDir: 'static',
  lintOnSave: true, // 取消 eslint 验证
  chainWebpack(config) {
    // set svg-sprite-loader
    config.module
      .rule('svg')
      .exclude.add(resolve('src/icons'))
      .end()
    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(resolve('src/icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })
      .end()
  }
}
