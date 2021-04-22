module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-prettier'],
  plugins: ['stylelint-scss'],

  // Custom configuration
  // https://stylelint.io/user-guide/configuration
  rules: {
    'at-rule-no-unknown': null,
    'scss/at-rule-no-unknown': true
  }
}
