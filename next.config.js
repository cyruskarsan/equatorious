module.exports = {
  reactStrictMode: true,
  externals: {
    react: 'commonjs react',
    'react-dom': 'commonjs react-dom',
  },
  output: {
    libraryTarget: 'commonjs2',
  },
};
