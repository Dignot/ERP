const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const Dotenv = require("dotenv-webpack");

const PORT = process.env.PORT || 8080;

const isProduction = process.env.NODE_ENV === "production";

const stylesHandler = isProduction
  ? MiniCssExtractPlugin.loader
  : "style-loader";

module.exports = {
  entry: path.join(__dirname, "./src/app/", "index.tsx"),
  output: {
    path: path.resolve(__dirname, "dist"),
  },
  devServer: {
    open: true,
    host: "localhost",
    port: PORT,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "./src/app/template", "template.html"),
      filename: "index.html",
    }),
    new Dotenv({
      path: isProduction ? "./.env.prod" : "./.env.dev",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/i,
        loader: "ts-loader",
        exclude: ["/node_modules/"],
      },
      {
        test: /\.css$/i,
        use: [stylesHandler, "css-loader", "postcss-loader"],
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
        type: "asset",
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js", "..."],
    alias: {
      shared: path.resolve(__dirname, "src/shared/"),
    },
  },
};
