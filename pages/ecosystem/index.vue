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
    return {
      members: []
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
      const membersArray = Object.values(res.data.MAIN).concat(Object.values(res.data.COMMUNITY))
      const shuffled = this.fyShuffle(membersArray)
      this.members = shuffled
    } catch (err) {
      console.error(err)
    }
  },
  methods: {
    fyShuffle (array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1))
        const temp = array[i]
        array[i] = array[j]
        array[j] = temp
      }
      return array
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
</style>
