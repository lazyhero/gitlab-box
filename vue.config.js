const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: [
    'quasar'
  ],
  pluginOptions: {
    quasar: {
      importStrategy: 'kebab',
      rtlSupport: false
    }
  },
  devServer: {
    proxy: {
      '/x': {
        target: '',
        ws: true,
        changeOrigin: true
      },
    }
  }
})
