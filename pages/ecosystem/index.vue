<template>
  <main>
    <AppPageHeaderFixed>
      Explore <br>
      <TypewriterEffect
        :values="[
          'core packages',
          'tools',
          'prototypes',
          'community projects'
        ]"
      />
      <br>
      from Qiskit and the Qiskit community
    </AppPageHeaderFixed>
    <AppFieldset label="Tier">
      <client-only>
        <cv-checkbox
          v-for="option in tiers"
          :key="option"
          :label="option"
          :value="option"
          :checked="isTierFilterChecked(option)"
          @change="updateTierFilter(option, $event)"
        />
      </client-only>
    </AppFieldset>
    <div class="bx--row">
      <div
        v-for="(member, index) in filteredMembers"
        :key="index"
        class="bx--col-sm-4 bx--col-xlg-8"
      >
        <MemberCard :member="member" />
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { mapGetters } from 'vuex'
import { Component } from 'vue-property-decorator'
import QiskitPage from '~/components/logic/QiskitPage.vue'

@Component({
  head () {
    return {
      title: 'Qiskit Ecosystem'
    }
  },
  data () {
    return {
      tiers: ['MAIN', 'COMMUNITY']
    }
  },
  layout: 'default-max',
  computed: {
    ...mapGetters('ecosystem', [
      'filteredMembers',
      'tierFilters'
    ])
  },
  async fetch ({ store }) {
    await store.dispatch('ecosystem/fetchMembers')
  },
  methods: {
    updateTierFilter (tier: string, isChecked: boolean): void {
      const tierFilters = (this as any).tierFilters.filter((oldOption: any) => oldOption !== tier)

      if (isChecked) {
        tierFilters.push(tier)
      }
      this.$store.commit('ecosystem/setTierFilters', tierFilters)
    },
    isTierFilterChecked (filterValue: string): boolean {
      return (this as any).tierFilters.includes(filterValue)
    }
  }

})

export default class EcosystemPage extends QiskitPage {
  routeName: string = 'ecosystem'
}
</script>

<style lang="scss" scoped>
.bx--row {
  margin-top: $spacing-08;
  margin-left: $spacing-08;
  width: 90%;
}
.app-fieldset {
  margin-bottom: 0;
  margin-top: 0;
  margin-left: $spacing-08;
}
</style>
