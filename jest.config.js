module.exports = {
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1',
    '^~/(.*)$': '<rootDir>/$1',
    '^vue$': 'vue/dist/vue.common.js'
  },
  transform: {
    '^.+\\.ts?$': 'ts-jest',
    '^.+\\.js$': 'babel-jest',
    '.*\\.(vue)$': 'vue-jest'
  },
  moduleFileExtensions: ['ts', 'js', 'vue', 'json'],
  collectCoverage: true,
  collectCoverageFrom: [
    'hooks/**/*.ts'
  ],
  setupFiles: [
    './jest.setup.js'
  ],
  testEnvironment: 'jsdom'
}
