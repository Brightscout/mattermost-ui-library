const path = require('path');

module.exports = {
  webpack: {
    alias: {
      '@Components': path.resolve(__dirname, 'src/components'),
      '@Styles': path.resolve(__dirname, 'src/styles'),
      '@Constants': path.resolve(__dirname, 'src/constants'),
    }
  },
  jest: {
    configure: {
      rootDir: '.',
      moduleNameMapper: {
        '/^@Components(.*)$/': '<rootDir>/src/components/$1',
        '/^@Constants(.*)$/': '<rootDir>/src/constants/$1',
        '/^@Styles(.*)$/': '<rootDir>/src/components/$1',
      },
    },
  },
};
