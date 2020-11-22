import AdvocateCard from './AdvocateCard.vue'

export default { title: 'components/AdvocateCard' }

const Template: any = (args: any, { argTypes }: {argTypes: any}) => ({
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
