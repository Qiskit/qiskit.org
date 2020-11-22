import AppLink from './AppLink.vue'

export default { title: 'AppLink' }

const Template: any = (args: any, { argTypes }: {argTypes: any}) => ({
  components: { AppLink },
  props: Object.keys(argTypes),
  template: '<AppLink :is-static="isStatic" :segment="segment" :url="url">{{ vSlot }}</AppLink>'
})

export const Default = Template.bind({})
Default.args = {
  isStatic: false,
  segment: undefined,
  url: 'https://example.com',
  vSlot: 'Lorem ipsum'
}
