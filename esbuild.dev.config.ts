const esbuild = require("esbuild");
const inlineImage = require("esbuild-plugin-inline-image");
const { sassPlugin } = require("esbuild-sass-plugin");
const postcss = require('postcss');
const autoprefixer = require('autoprefixer');
const { dependencies } = require("./package.json");

esbuild
  .serve(
    {
      servedir: "public",
      port: 8000,
    },
    {
      bundle: true,
      entryPoints: ["./src/index.tsx"],
      outfile: "public/script.js",
      sourcemap: true,
      external: [...Object.keys(dependencies), 'react/jsx-runtime'],
      plugins: [
        inlineImage(),
        sassPlugin({
          async transform(source) {
            const { css } = await postcss([autoprefixer]).process(source);
            return css;
          },
        }),
      ],
    }
  )
  .catch(() => process.exit());
