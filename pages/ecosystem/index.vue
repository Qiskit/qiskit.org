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
    <div class="bx--row">
      <div
        v-for="(member, index) in members"
        :key="index"
        class="bx--col-sm-4 bx--col-xlg-8"
      >
        <MemberCard :member="member" />
      </div>
    </div>
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
    return { members: [] }
  },
  layout: 'default-max',
  async beforeCreate () {
    let res
    try {
      // from ecosystem main
      res = await axios.get(
        'https://raw.githubusercontent.com/qiskit-community/ecosystem/master/ecosystem/resources/members.json'
      )
      // from Iskandars fork
      // res = await axios.get(
      //   'https://raw.githubusercontent.com/IceKhan13/ecosystem/master/ecosystem/resources/members.json'
      // )
      console.error(res)
      this.members = res.data.MAIN
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
  margin: 10px
}
</style>
