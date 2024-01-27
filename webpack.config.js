const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const Dotenv = require('dotenv-webpack');

const PORT = process.env.PORT || 3000;
const isProduction = process.env.NODE_ENV === 'production';
const stylesHandler = isProduction
  ? MiniCssExtractPlugin.loader
  : 'style-loader';

module.exports = () => ({
  mode: isProduction ? 'production' : 'development',
  entry: path.resolve(__dirname, 'src/app/index.tsx'),
  devtool: isProduction ? 'source-map' : 'eval',
  output: {
    path: path.resolve(__dirname, 'build'),
    ...(isProduction ? {} : { publicPath: '/' }),
  },
  devServer: {
    open: true,
    host: 'localhost',
    port: PORT,
    client: {
      logging: 'info',
    },
    historyApiFallback: true,
    hot: true,
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      template: './src/app/template/template.html',
      filename: 'index.html'
    }),
    new Dotenv()
  ],
  module: {
    rules: [
      {
        test: /\.m?[jt]sx$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              ['@babel/preset-react', { runtime: 'automatic' }],
            ],
          },
        },
      },
      {
        test: /\.(ts|tsx)$/i,
        exclude: ['/node_modules/'],
        use: {
          loader: 'ts-loader',
          options: {
            compilerOptions: {
              noEmit: false,
            },
          },
        },
      },
      {
        test: /\.css$/i,
        use: [stylesHandler, 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: ['@svgr/webpack'],
      },
      {
        test: /\.(eot|ttf|woff|woff2|png|jpg|gif)$/i,
        type: 'asset',
      },
    ],
  },
  resolve: {
    conditionNames: ['import', 'node'],
    extensions: ['.tsx', '.ts', '.jsx', '.js', '...'],
    alias: {
      app: path.resolve(__dirname, 'src/app/'),
      pages: path.resolve(__dirname, 'src/pages/'),
      widgets: path.resolve(__dirname, 'src/widgets/'),
      features: path.resolve(__dirname, 'src/features/'),
      entities: path.resolve(__dirname, 'src/entities/'),
      shared: path.resolve(__dirname, 'src/shared/'),
      providers: path.resolve(__dirname, 'src/providers/'),
    },
  },
});
