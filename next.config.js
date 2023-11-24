const { i18n } = require('./next-i18next.config')
const path = require('path');

const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  swcMinify: true,

  pageExtensions: ['page.tsx', 'page.ts', 'page.jsx', 'page.js'],

  // Set for server info hide
  poweredByHeader: false,
  // Set loader and plugin
  webpack: config => {
    config.module.rules.push(
      {
        test: /\.js$/,
        use: [
          {
            loader: 'babel-loader',
          },
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.[ts | tsx]$/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              configFile: './tsconfig.json',
            },
          },
        ],
        exclude: /node_modules/,
      },
      {test: /\.svg$/, use: ['@svgr/webpack']},
    );

    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.join(__dirname, 'src'),
    };
    return config;
  },

  i18n
};

module.exports = nextConfig;
