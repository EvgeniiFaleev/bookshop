const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ErrorOverlayPlugin = require('error-overlay-webpack-plugin');
const webpack = require('webpack');

module.exports = (env) => {
  let isProd = false;
  if (env.production) isProd = env.production;

  return {
    entry: './src/index.tsx',
    output: {
      publicPath: '/', // This option specifies the public URL of
      // the output directory when referenced in a browser.
      // A relative URL is resolved relative to the HTML page (or <base> tag).
      // Server-relative URLs, protocol-relative URLs or absolute URLs are also possible and sometimes required
      filename: 'scripts/main.[hash].js',
      path: path.resolve(__dirname, 'build'),
    },
    resolve: {
      alias: {
        '@ui': path.resolve(__dirname, 'src/ui'),
        '@lib': path.resolve(__dirname, 'src/lib'),
        '@templates': path.resolve(__dirname, 'src/ui/templates'),
        '@features': path.resolve(__dirname, 'src/features'),
        '@books': path.resolve(__dirname, 'src/features/books'),
        '@authentication': path.resolve(__dirname, 'src/features/authentification'),
        '@images': path.resolve(__dirname, 'src/ui/assets/images'),
        '@fonts': path.resolve(__dirname, 'src/ui/assets/fonts'),
        '@pages': path.resolve(__dirname, 'src/pages'),
        '@store': path.resolve(__dirname, 'src/lib/store'),
        '@api': path.resolve(__dirname, 'src/api'),
        '@icons': path.resolve(__dirname, 'src/ui/assets/icons'),
      },
      extensions: ['.js', '.jsx', '.scss', '.css', '.img', 'gif', '.png',
        '.svg', '.ts', '.tsx'],
    },
    plugins: [new ErrorOverlayPlugin(), new webpack.ProvidePlugin({
      process: 'process/browser',
    }), new CleanWebpackPlugin(), new HtmlWebpackPlugin({
      template: './public/index.html',
    }), new MiniCssExtractPlugin({
      filename: 'styles/[name].[contenthash].css',
    })],
    devServer: {
      historyApiFallback: true,
      port: 9000,
      open: true,
      hot: true,
    },
    devtool: isProd
      ? false
      : 'source-map',
    module: {
      rules: [

        {
          test: /\.(js|jsx)$/,
          exclude: /(node_modules)/,
          use: {
            loader: 'babel-loader',
          },
        }, {
          test: /\.tsx?$/,
          exclude: /(node_modules)/,
          use: ['babel-loader', 'ts-loader'],
        }, {
          test: /\.css$/i,
          use: [MiniCssExtractPlugin.loader, {
            loader: 'css-loader',
            options: {
              modules: true,
            },
          }],
        }, {
          test: /\.(sa|sc|c)ss$/,
          use: [{
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '../', // specify path to external
              // resources of css file. It adds to output path of file
              // loader
            },
          }, // Translates CSS into CommonJS
          {
            loader: 'css-loader',
            options: {
              modules: {
                auto: /\.module\.\w+$/i, // enable module css for
                // files with name filename.module.
                localIdentName: '[name]__[local]___[hash:base64:5]', // classNames based on hash and name
              },
            },
          }, {
            loader: 'resolve-url-loader', // Resolve url`s path for
            // scss modules(relative url in import file)
            options: {
              debug: true,
            },
          }, // Compiles Sass to CSS
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          }, {
            loader: 'sass-resources-loader', // Allow us to use
            // sass variables/mixins/functions globally
            options: {
              resources: [
                './src/ui/assets/styles/_variables.scss',
                './src/ui/assets/styles/_placeholders.scss',
                './src/ui/assets/styles/_mixins.scss',
              ],
              hoistUseStatements: true,
            },
          },
          ],
        }, {
          test: /\.(png|jpe?g|gif|svg|img|webp)$/,
          loader: 'file-loader',
          options: {
            outputPath: 'assets/images',
            name: '[name][contenthash].[ext]',
            // publicPath: '../assets/images',
          },
        }, {
          test: /\.(ttf|woff|gif|woff2|eot)$/,
          loader: 'file-loader',
          options: {
            outputPath: 'assets/fonts',
            name: '[name][contenthash].[ext]',
            // publicPath: '../assets/fonts',
          },
        }],
    },
  };
};
