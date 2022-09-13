const path = require('path');
const CracoAlias = require('craco-alias');

module.exports = {
  webpack: {
    alias: {
      '@Components': path.resolve(__dirname, 'src/components'),
      '@Styles': path.resolve(__dirname, 'src/styles'),
      '@Constants': path.resolve(__dirname, 'src/constants'),
    }
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
