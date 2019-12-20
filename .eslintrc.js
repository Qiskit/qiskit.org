module.exports = {
  plugins: ['@typescript-eslint'],
  parserOptions: {
    parser: '@typescript-eslint/parser'
  },
  extends: [
    '@nuxtjs'
  ],
  rules: {
    // TODO: Remove when fixing:
    // https://github.com/typescript-eslint/typescript-eslint/issues/342
    // More info:
    // https://github.com/typescript-eslint/typescript-eslint/issues/342#issuecomment-484739065
    'no-undef': 'off',
    '@typescript-eslint/no-unused-vars': 'error',
    "no-console": ['error', { allow: ['warn', 'error'] }]
  }
}
