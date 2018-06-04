var path = require('path');
var webpack = require('webpack')
var UglifyJSPlugin = require('uglifyjs-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/js/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './dist')
    },
    module: {
     rules: [{
      test: /\.less$/,
      use: [{
          loader:'style-loader'
      },{
          loader:'css-loader'
      },{
          loader:'less-loader'
      }]
     },{
        test: /\.css$/,
        loader:[{
            loader:'style-loader'
        },{
            loader:'css-loader'
        }]
       },{ 
           test:/\.(png|woff|svg|ttf|eot|jpg|JPG)$/,
           loader:'url-loader'
        },{
            test: /\.(html)$/,
            use: {
              loader: 'html-loader'
            }
        }
    
    ]
    },
    plugins: [
      new UglifyJSPlugin({
          sourceMap:true
      }),
      // 加入 html 模板任务
      new HtmlWebpackPlugin({
          // 模板文件
          template: 'src/index.html',
          // 打包后文件名称，会自动放到 output 指定的 dist 目录
          filename: 'index.html'
      })
    ]
}