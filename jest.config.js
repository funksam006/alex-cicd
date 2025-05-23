module.exports = {
  preset: 'react-native',
  setupFiles: ['./jest/setup.js'], // Include setup files if needed for environment setup
  transform: {
    '^.+\\.[jt]sx?$': 'babel-jest', // Transforms JS/TS files using babel-jest
  },
  transformIgnorePatterns: [
    'node_modules/(?!(react-native' +
      '|@react-native' +
      '|@react-navigation' +
      '|@react-native-community/datetimepicker' +
      '|react-native-gesture-handler' +
      '|react-native-toast-message' +
      '|react-native-splash-screen' +
      '|react-native-status-bar-height' +
      '|react-native-modal-datetime-picker' +
      '|react-native-country-codes-picker' +
      ')/)' // Specify which node_modules to transform
  ],
  moduleNameMapper: {
    // Mocks for non-JS files (images, styles, etc.)
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)$': '<rootDir>/jest/__mocks__/fileMock.js',
    '\\.(css|less)$': '<rootDir>/jest/__mocks__/styleMock.js',
    '^@react-native-async-storage/async-storage$': '<rootDir>/jest/__mocks__/@react-native-async-storage/async-storage.js',
    '^react-native-install-referrer$': '<rootDir>/__mocks__/react-native-install-referrer.js' // Mock the install-referrer module
  },
  testEnvironment: 'jest-environment-jsdom', // Use jsdom environment for browser-like testing
};
