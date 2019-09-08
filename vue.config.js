module.exports = {
  devServer: {
    host: "localhost",
    port: 3001
  },
  outputDir: "dist",
  pages: {
    index: {
      entry: "src/main.ts",
      filename: "index.html",
      chunks: ["chunk-vendors", "chunk-common", "index"]
    }
  }
};
