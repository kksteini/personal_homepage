<template>
  <q-page class="flex flex-center">
    <div class="column">
      <q-input bottom-slots v-model="text" label="Rhymes" @keyup.enter="updateRhymes(text)">
        <template v-slot:append>
          <q-icon v-if="text !== ''" name="close" @click="text = ''" class="cursor-pointer" />
        </template>

        <template v-slot:after>
          <q-btn @click="updateRhymes(text)" round dense flat icon="send" />
        </template>
      </q-input>

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
      rhymes: [],
      text: ''
    }
  },
  methods: {
    async updateRhymes(word) {
      this.rhymes = await getRhymes(word)
    }
  }
}
</script>
