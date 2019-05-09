module.exports = {
  transform: {
    '\\.js$': 'babel-jest',
  },
  'collectCoverage': true,
  'verbose': true,
  'collectCoverageFrom': [
    'src/**/*.js',
  ],
};
