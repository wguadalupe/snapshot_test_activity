module.exports = {
    testEnvironment: 'jsdom',
    transform: {
      "^.+\\.[t|j]sx?$": "babel-jest",
    },
    moduleNameMapper: {
      '\\.(jpg|jpeg|png|gif|webp|svg)$': '<rootDir>/__mocks__/fileMock.js',
      '\\.(css|less)$': '<rootDir>/__mocks__/styleMock.js',
    },

  };
  