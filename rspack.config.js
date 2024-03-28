const path = require("node:path");
const rspack = require("@rspack/core");

/**
 * @param {Record<string, any>} env
 * @returns {import('@rspack/cli').Configuration}
 */
function makeRsPackConfig(env) {
  const { useRelativePath = "false" } = env;

  const cwd = process.cwd();

  const mode = "production";

  const entry = path.resolve(cwd, "src", "index.tsx");

  const basePath = path.join("dist", "rs");

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

  const plugins = [
    new rspack.HtmlRspackPlugin({
      filename: "index.html",
      template: path.resolve(cwd, "src", "index.html"),
      favicon,
    }),
  ];

  return {
    mode,
    entry,
    output,
    plugins,
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: {
            loader: "builtin:swc-loader",
            options: {
              sourceMap: true,
              jsc: {
                parser: {
                  syntax: "typescript",
                  jsx: true,
                },
                transform: {
                  react: {
                    runtime: "automatic",
                  },
                },
              },
            },
          },
        },
      ],
    },
  };
}

module.exports = makeRsPackConfig;
