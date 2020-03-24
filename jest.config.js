module.exports = {
  roots: ['<rootDir>/src'],
  testMatch: ['**/__tests__/**/*.+(js)', '**/?(*.)+(spec|test).+(js)'],
  transform: {
    '^.+\\.[t|j]sx?$': 'babel-jest'
  }
};