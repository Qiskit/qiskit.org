<template>
  <main>
    <AppPageHeaderFixed>
      Explore <br>
      <TypewriterEffect
        :values="[
          'core packages',
          'tools',
          'research assets',
          'community projects'
        ]"
      />
      <br>
      from Qiskit and the Qiskit community
    </AppPageHeaderFixed>
    <cv-tabs class="the-learning-resources-list__filter-level">
      <cv-tab id="tab-1" label="Main">
        <div class="bx--row">
          <div
            v-for="(member, index) in mainMembers"
            :key="index"
            class="bx--col-sm-4 bx--col-xlg-8"
          >
            <MemberCard :member="member" />
          </div>
        </div>
      </cv-tab>
      <cv-tab
        id="tab-2"
        label="Community"
      >
        <div class="bx--row">
          <div
            v-for="(member, index) in communityMembers"
            :key="index"
            class="bx--col-sm-4 bx--col-xlg-8"
          >
            <MemberCard :member="member" />
          </div>
        </div>
      </cv-tab>
    </cv-tabs>
  </main>
</template>

<script lang="ts">
import axios from 'axios'
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
      mainMembers: [],
      communityMembers: []
    }
  },
  layout: 'default-max',
  async beforeCreate () {
    let res
    try {
      // from ecosystem main
      res = await axios.get(
        'https://raw.githubusercontent.com/qiskit-community/ecosystem/master/ecosystem/resources/members.json'
      )
      console.error(res)
      this.mainMembers = res.data.MAIN
      this.communityMembers = res.data.COMMUNITY
    } catch (err) {
      console.error(err)
    }
  }

})
export default class EcosystemPage extends QiskitPage {
  routeName: string = 'ecosystem'
}
</script>

<style lang="scss" scoped>
.bx--row {
  margin-top: 10px
}
.the-learning-resources-list__filter-level {
  margin-left: $spacing-08;
  width: 90%;
}
</style>
