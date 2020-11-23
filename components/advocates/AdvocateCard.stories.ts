import { Meta, Story } from '../../node_modules/@storybook/vue/types-6-0'
import AdvocateCard from './AdvocateCard.vue'

export default {
  title: 'Components/Advocate card',
  component: AdvocateCard
} as Meta

const Template: Story = (args, { argTypes }) => ({
  components: { AdvocateCard },
  props: Object.keys(argTypes),
  template: '<AdvocateCard :areas="areas" :image="image" :location="location" :name="name" />'
})

export const Default = Template.bind({})
Default.args = {
  areas: 'Tutorials, Circuits',
  image: 'abraham-asfaw.jpg',
  location: 'New York, NY',
  name: 'John Doe'
}
