const { build } = require("esbuild");
const inlineImage = require("esbuild-plugin-inline-image");
const { sassPlugin } = require("esbuild-sass-plugin");
const postcss = require('postcss');
const autoprefixer = require('autoprefixer');
const { dependencies } = require("./package.json");
const svgrPlugin = require('esbuild-plugin-svgr');

const entryFile = "src/index.tsx";
const shared = {
  bundle: true,
  entryPoints: [entryFile],
  external: ['react/jsx-runtime'],
  logLevel: "info",
  minify: true,
  sourcemap: true,
  plugins: [
    svgrPlugin({ exportType: 'named' }),
    inlineImage(),
    sassPlugin({
      async transform(source) {
        const { css } = await postcss([autoprefixer]).process(source, { from: undefined });
        return css;
      },
    }),
  ],
};

build({
  ...shared,
  format: "esm",
  outfile: "./build/index.esm.js",
  target: ["esnext"],
});

build({
  ...shared,
  format: "cjs",
  outfile: "./build/index.cjs.js",
  target: ["esnext"],
});
