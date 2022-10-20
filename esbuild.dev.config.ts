const {serve} = require("esbuild");
const inlineImage = require("esbuild-plugin-inline-image");
const {sassPlugin} = require("esbuild-sass-plugin");
const postcss = require('postcss');
const autoprefixer = require('autoprefixer');
const {REACT_APP_PORT = 8000} = process.env
const svgrPlugin = require('esbuild-plugin-svgr');

serve(
    {
      servedir: "public",
      port: REACT_APP_PORT,
    },
    {
      bundle: true,
      entryPoints: ["./src/index.tsx"],
      outfile: "public/script.js",
      sourcemap: true,
      external: ['react/jsx-runtime'],
      plugins: [
        svgrPlugin({exportType: 'named'}),
        inlineImage(),
        sassPlugin({
          async transform(source) {
            const {css} = await postcss([autoprefixer]).process(source, {from: undefined});
            return css;
          },
        }),
      ],
    }
  )
  .then((response) => console.log('Listening on PORT:', response.port))
  .catch(() => process.exit());
