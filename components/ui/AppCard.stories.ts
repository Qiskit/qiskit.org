import AppCard from './AppCard.vue'

export default { title: 'AppCard' }

export const Default = () => ({
  components: { AppCard },
  template: `
    <AppCard
      ctaLabel="Learn more"
      image="https://via.placeholder.com/300"
      :tags="['documentation', 'news']"
      title="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      to="#"
    >
      Hello world!
    </AppCard>
  `
})
