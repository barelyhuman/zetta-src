module.exports = {
  entry: "./src/app.js",

  output: {
    path: __dirname + "/dist",
    filename: "bundled.js",
    publicPath:"/dist"
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      }
    ]
  }
};
