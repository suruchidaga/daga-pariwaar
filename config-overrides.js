var path = require("path");
const { override, fixBabelImports, addWebpackAlias } = require("customize-cra");

module.exports = function (config, env) {
  return Object.assign(
    config,
    override(
      fixBabelImports("import", {
        libraryName: "antd",
        libraryDirectory: "es",
        style: "css",
      }),
      addWebpackAlias({
        "@assets": path.resolve(__dirname, "src/assets"),
        "@components": path.resolve(__dirname, "src/components"),
        "@config": path.resolve(__dirname, "src/config"),
        "@containers": path.resolve(__dirname, "src/containers"),
        "@redux": path.resolve(__dirname, "src/redux"),
        "@lib": path.resolve(__dirname, "src/lib"),
        "@services": path.resolve(__dirname, "src/services"),
      })
    )(config, env)
  );
};
