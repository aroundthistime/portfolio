const path = require('path');

const nextConfig = {
  compiler: {
    styledComponents: true,
  },

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

  i18n: {
    locales: ['en-US', 'ko-KR'],
    defaultLocale: 'en-US',
  }
};

module.exports = nextConfig;
