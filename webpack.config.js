/*
 * GPL 3.0 (C) 2017 Stephan S. Hepper
 *
 */

var path = require('path');
var webpack = require('webpack');
const fs = require('fs-extra')

const IS_PROD = process.argv.indexOf('-p') !== -1;

const config = {
   paths: {
      main: "./assets"
   }
};



//if(IS_PROD) {
// in production mode clean the output directory
fs.removeSync(path.resolve(config.paths.main + "/static"));
//}

const BABEL_TRANSFORMS = {
   presets: ["@babel/env", "@babel/react"],
   plugins: ["@babel/plugin-proposal-class-properties"]
};

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

if (IS_PROD) {
   module.exports = {
      optimization: {
         minimizer: [
            new UglifyJsPlugin({
               test: /\.js(\?.*)?$/i,
            }),
            new OptimizeCSSAssetsPlugin({})
         ],
      },
   };
}


module.exports = {
   entry: config.paths.main + '/js/main.js',
   devtool: IS_PROD ? false : "source-map",
   mode: IS_PROD ? "production" : "development",
   output: {
      path: path.resolve("./assets/static/"),
      filename: "js/[name].js",
      publicPath: "/assets/static/js/",
      chunkFilename: 'js/[name]-[chunkhash].js'
   },

   resolve: {
      modules: [
         path.resolve(config.paths.main),
         path.resolve(config.paths.main + '/js/'),
         path.resolve('./node_modules/')
      ]
   },

   plugins: [new MiniCssExtractPlugin({
      filename: "css/[name].css",
      chunkFilename: 'css/[name]-[chunkhash].css',
   })],


   module: {
      rules: [{
            test: /\.js(x?)$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: BABEL_TRANSFORMS
         },
         {
            test: /\.(htm|html)$/,
            use: [{
               loader: 'html-loader'
            }]
         },
         {
            test: /\.(ttf|eot|svg|woff(?:2)?)(\?[a-z0-9]+)?$/,
            use: [{
               loader: 'file-loader',
               options: {
                  esModule: false, 
                  name: '[name].[ext]'
               }
            }]
         },
         {
            test: /\.(jpe?g|png|gif|cur)$/i,
            use: [{
               loader: 'file-loader',
               options: {
                  esModule: false,
                  name: '[name].[ext]'
               }
            }]
         },
         {
            test: /\.(scss|css)$/,
            use: [{
                  loader: MiniCssExtractPlugin.loader,
                  options: {
                     publicPath: "../",
                     hmr: process.env.NODE_ENV === 'development',
                  },
               },
               {
                  loader: "css-loader",
                  options: {
                     esModule: false,
                     sourceMap: !IS_PROD
                  }
               },
               {
                  loader: "postcss-loader",
                  options: {
                     plugins: [require('autoprefixer')],
                     sourceMap: !IS_PROD,
                     sourceMapContents: !IS_PROD
                  }
               },
               {
                  loader: "sass-loader",
                  options: {
                     sourceMap: !IS_PROD,
                     //sourceMapContents: !IS_PROD,
                     sassOptions: {
                        outputStyle: "expanded",
                        includePaths: [path.resolve(config.paths.main), path.resolve("./node_modules/"), path.resolve(config.paths.main + "/scss/")]
                     }
                  }
               }

            ]
         }
      ]
   }
};
