require("source-map-support").install();
require("ts-node").register({
    files: true,
    compilerOptions: {
        module: "commonjs",
        target: "es2017"
    }
});

exports.onCreateNode = require("./gatsby/node/onCreateNode").onCreateNode;
exports.createPages = require("./gatsby/node/createPages").createPages;
