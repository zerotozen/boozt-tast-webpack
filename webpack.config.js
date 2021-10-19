const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

const ruleForImages = {
  test: /\.(png|svg|jpg|jpeg|gif|ico)$/i,
  type: "asset",
};

const ruleForFonts = {
  test: /\.ttf$/,
  use: ["ttf-loader"],
};

const ruleForStles = {
  test: /\.(css|sass|scss)$/,
  use: ["style-loader", "css-loader", "sass-loader"],
};

const ruleForJavaScript = {
  test: /\.(js|jsx)$/,
  loader: "babel-loader",
  exclude: /node_modules/,
  options: {
    presets: [
      [
        "@babel/preset-react",
        {
          runtime: "automatic",
        },
      ],
    ],
  },
};

const rules = [ruleForJavaScript, ruleForStles, ruleForFonts, ruleForImages];

module.exports = (env, argv) => {
  const { mode } = argv;
  const isProduction = mode === "production";
  return {
    entry: "./src/index.js",
    output: {
      filename: isProduction ? "[name].[contenthash].js" : "main.js",
      path: path.resolve(__dirname, "build"),
    },
    plugins: [new HtmlWebpackPlugin({ template: "./public/index.html" })],
    devServer: {
      open: true,
      compress: true,
      port: 3000,
    },
    module: { rules },
  };
};
