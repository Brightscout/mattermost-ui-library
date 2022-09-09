const path = require('path');
const CracoAlias = require('craco-alias');

module.exports = {
  webpack: {
    configure: {
      entry: './src/App.jsx',
    },
  },
  plugins: [
    {
      plugin: CracoAlias,
      options: {
        source: 'tsconfig',
        baseUrl: './src',
        tsConfigPath: './tsconfig.paths.json',
      },
    },
  ],
};
