const path = require("node:path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

/**
 * @param {Record<string, any>} env
 * @returns {import('webpack').Configuration}
 */
function makeWebpackConfig(env) {
  const { useRelativePath = "false" } = env;

  const cwd = process.cwd();

  const mode = "production";

  const entry = path.resolve(cwd, "src", "index.tsx");

  const basePath = path.join("dist", "webpack");

  const distFolder =
    useRelativePath === "true"
      ? path.join(basePath, "relative")
      : path.join(basePath, "absolute");

  const output = {
    path: path.resolve(cwd, distFolder),
    filename: "[name].[chunkhash].js",
    publicPath: "/",
  };

  const favicon =
    useRelativePath === "true"
      ? path.join("static", "favicon.ico")
      : path.resolve(cwd, "static", "favicon.ico");

  const module = {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  };

  const plugins = [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: path.resolve(cwd, "src", "index.html"),
      favicon,
    }),
  ];

  return {
    mode,
    entry,
    output,
    module,
    plugins,
  };
}

module.exports = makeWebpackConfig;
