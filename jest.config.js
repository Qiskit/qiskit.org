// Created following:
// https://github.com/Al-un/learn-nuxt-ts/blob/master/docs/06.test.md

module.exports = {
  preset: 'ts-jest/presets/js-with-ts',
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1',
    '^~/(.*)$': '<rootDir>/$1'
  },
  transform: {
    '^.+\\.ts?$': 'ts-jest',
    '.*\\.(vue)$': 'vue-jest'
  },
  moduleFileExtensions: ['ts', 'js', 'vue', 'json'],
  testMatch: ['**/tests/**/*.spec.ts'],
  collectCoverageFrom: [
    'hooks/**/*.ts'
  ],
  setupFiles: [
    './jest.setup.js'
  ]
}
