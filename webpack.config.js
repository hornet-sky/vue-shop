const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  entry: path.join(__dirname, 'src/main.js'),
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  devServer: {
    open: true,
    port: 3001,
    //contentBase: '/dist',
    hot: true
  },
  module: {
    rules: [
      { test:/\.vue$/, use: 'vue-loader' },
      { test: /\.css$/, use: ['vue-style-loader', 'css-loader'] },
      { test: /\.scss$/, use: ['vue-style-loader', 'css-loader', 'sass-loader'] },
      { test: /\.(jpg|png|gif|bmp)$/, use: 'url-loader?limit=17341&name=[hash:8]-[name].[ext]' }, // 处理css里的图片url
      { test: /\.(ttf|eot|svg|woff|woff2)$/, use: ['url-loader'] }, // 处理css里的字体url
      { test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ } // ES6 转 ES5
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({ // 具体生成到哪个目录下 和 output.path有关
      template: path.join(__dirname, 'index.html'),
      filename: 'index.html'
    })
  ],
  resolve: {
    alias: {
      // 'vue$': 'vue/dist/vue.esm.js' // 有了vue-loader之后，如果只用render函数，可以只用runtime包也不会报错，减小了打包vue时的体积
    }
  }
}


