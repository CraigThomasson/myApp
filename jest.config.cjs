module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleFileExtensions: ['ts', 'js'],
  transform: {
    '^.+\\.ts$': 'ts-jest',
    '^.+\\.js$': 'babel-jest'
  },
  testMatch: ['**/src/scripts/**/*.test.ts', '**/?(*.)+(spec|test).[tj]s'],
  moduleDirectories: ['node_modules', 'src'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1'
  }
};
