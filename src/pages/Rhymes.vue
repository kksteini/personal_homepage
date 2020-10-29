<template>
  <q-page class="flex flex-center">
    <div class="column">
      <q-btn
        color="secondary"
        icon-right="mail"
        label="Get me some funky rhymes"
        @click="updateRhymes" />

      <div class="column">
        <div class="col-3 text-h5" v-for="item in rhymes" :key="item">
          {{ item }}
        </div>
      </div>
   </div>
 </q-page>
</template>

<script>
import { getRhymes } from '../services/ruby-api'
export default {
  name: 'Rhymes',
  data() {
    return {
      rhymes: []
    }
  },
  methods: {
    async updateRhymes() {
      this.rhymes = await getRhymes()
    }
  }
}
</script>
