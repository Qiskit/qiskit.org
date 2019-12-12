// Created following:
// https://github.com/Al-un/learn-nuxt-ts/blob/master/docs/06.test.md

module.exports = {
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
  ]
}
