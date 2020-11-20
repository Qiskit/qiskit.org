module.exports = {
  webpackFinal(config, options) {
    config = options.nuxtStorybookConfig.webpackFinal(config, options)
    return config;
  },
  stories: ['~/components/**/*.stories.@(js|mdx|ts)'],
}
