<template>
    <div class="column q-pa-xl">
      <div class="text-h4 text-center q-pt-lg" v-if="halfrim">
        Engin alrím fundust, sýni hálfrím
      </div>

      <q-input class="col rhyme-input" v-model="text" label="Rímorð" @keyup.enter="updateRhymes(text)">
        <template v-slot:append>
          <q-icon v-if="text !== ''" name="close" @click="text = ''; resetState()" class="cursor-pointer" />
        </template>

        <template v-slot:after>
          <q-btn @click="updateRhymes(text)" round dense flat icon="send" />
        </template>
      </q-input>

      <div class="row justify-center">
        <q-spinner v-if="loading"
          class="q-mt-xl"
          color="white"
          size="4.5em"
        />
      </div>

      <div class="text-h4 text-center q-pt-md" v-if="nores">
        Engar niðurstöður
      </div>

      <div v-else v-for="(items, syllables) in rhymes" :key=syllables>
        <div class="text-h2 text-center q-pt-xl"> {{ syllables }} sérhljóð{{syllables == 1 ? 'i' : 'ar'}}</div>
        <div class="row justify-center">
          <div class="col-md-auto q-pa-xs text-h5" v-for="item in items" :key="item">
            {{ item }}
          </div>
        </div>
      </div>
   </div>
</template>

<script>
import { getRhymes } from '../services/ruby-api'
export default {
  name: 'Rhymes',
  data() {
    return {
      rhymes: [],
      text: '',
      loading: false,
      halfrim: false,
      nores: false
    }
  },
  methods: {
    async updateRhymes(word) {
      this.loading = true
      var rhymes = await getRhymes(word)
      this.nores = rhymes === 'Engar niðurstöður'

      if(Object.keys(rhymes).includes('Hálfrím')) {
        this.halfrim = rhymes.Hálfrím
        delete rhymes.Hálfrím
      } else {
        this.halfrim = false
      }
      this.rhymes = rhymes

      this.loading = false
    },
    resetState() {
      this.rhymes = []
      this.text = ''
      this.loading = false
      this.halfrim = false
    }
  }
}
</script>

<style lang="scss" scoped>
  .rhyme-input {
    margin-right: 25%;
    margin-left: 25%;
    font-size: 1.75em;
  }
</style>
