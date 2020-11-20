module.exports = {
  webpackFinal(config, options) {
    config = options.nuxtStorybookConfig.webpackFinal(config, options)
    return config;
  },

  addons: [
    {
      name: '@storybook/addon-essentials',
      options: {
        // TODO: Resolve path issues with aliases in docs addon
        docs: false,
      }
    },
  ],

  stories: ['../components/**/*.stories.@(js|mdx|ts)'],

  typescript: {
    check: false,
    checkOptions: {},
  },
}
