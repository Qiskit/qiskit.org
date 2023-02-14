module.exports = {
  extends: [
    '@nuxtjs/eslint-config-typescript'
  ],
  rules: {
    // TODO: Per recommendation here:
    // https://github.com/typescript-eslint/typescript-eslint/issues/342
    // The repo seems to indicate this is solved but updating to the latest
    // version does not solve it:
    // https://github.com/typescript-eslint/typescript-eslint/issues/1856
    'no-undef': 'off',
    '@typescript-eslint/no-unused-vars': ['error', {
      argsIgnorePattern: '^_'
    }],
    'no-console': ['error', { allow: ['warn', 'error'] }]
  }
}
