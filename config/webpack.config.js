const paths = require("./paths");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const port = 3000;

module.exports = {
  entry: [paths.src + "/index.js"],
  devtool: "source-map",
  optimization: {
    usedExports: true,
  },
  output: {
    path: paths.build,
    publicPath: "/",
    filename: "js/[name].[contenthash].js",
    clean: true,
  },

  resolve: {
    extensions: ["*", ".js", ".jsx"],
    alias: {
      src: paths.src,
      app: paths.src,
    },
  },

  plugins: [
    new HtmlWebpackPlugin({
      favicon: paths.assets + "/favicon.ico",
      template: paths.assets + "/index.html",
    }),
  ],

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
        options: { presets: ["@babel/env"] },
      },
      {
        // CSS
        test: /\.(s?css)$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        // images
        test: /\.(ico|gif|png|jpe?g|webp|svg)$/i,
        use: [
          {
            loader: "file-loader",
          },
        ],
      },
      {
        // Fonts
        test: /\.(woff2?|eot|ttf|otf)$/,
        use: [
          {
            loader: "file-loader",
          },
        ],
      },
    ],
  },

  devServer: {
    static: {
      directory: paths.static,
      publicPath: "http://localhost:3000/dist/",
    },
    historyApiFallback: true,
    compress: true,
    port,
    hot: true,
    open: true,
    client: {
      overlay: true,
    },
  },
};
