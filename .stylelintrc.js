module.exports = {
  extends: [
    "stylelint-config-standard-scss",
    "stylelint-config-recommended-vue/scss",
  ],

  rules: {
    "declaration-block-no-redundant-longhand-properties": null,

    "selector-class-pattern": [
      // IBM Carbon and BEM (https://bem.info) naming conventions
      "^((bx|cds)--)|(([a-z0-9]+(-[a-z]+)*(__[a-z]+(-[a-z]+)*)?(_[a-z]+(-[a-z]+)*)*)(--[a-z]+(-[a-z]+)*)?)$",
    ],
  },
};
