import * as webpack from "webpack";

const config: webpack.Configuration = {
  entry: {
    "euromaster.masternet-popup": "./src/index.tsx"
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: ["babel-loader"],
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"]
  },
  output: {
    filename: "[name].js",
    path: __dirname + "/dist"
  }
};

export default config;
