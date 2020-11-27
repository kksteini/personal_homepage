<template>

  <div class="page">
   <q-btn @click="help = true" round color="primary" class="help-button" icon="help" />
    <div class="column q-pa-xl">
      <q-dialog class="help-modal" v-model="help">
        <q-card>
          <q-card-section>
            <div class="text-h6">{{ $t('anagrams.aboutTitle') }}</div>
          </q-card-section>

          <q-card-section class="q-pt-none">
            {{ $t('anagrams.about') }}
          </q-card-section>

          <q-card-actions align="right">
            <q-btn flat label="OK" color="secondary" v-close-popup />
          </q-card-actions>
        </q-card>
      </q-dialog>

      <q-input class="col q-mb-lg anagram-input" v-model="text" :label="$t('anagrams.query')" @keyup.enter="updateGrams(text)" maxlength="30">
        <template v-slot:append>
          <q-icon v-if="text !== ''" name="close" @click="text = ''; resetState()" class="cursor-pointer" />
        </template>

        <template v-slot:after>
          <q-btn @click="updateGrams(text)" round dense flat icon="send" />
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
        {{ $t('anagrams.nores') }}
      </div>

      <div v-else v-for="sentence in grams" :key=sentence>
        <div class="row justify-center q-pb-xs">
          <div class="col-md-auto text-h5">
            {{ sentence.join(" ") }}
          </div>
        </div>
      </div>
   </div>
  </div>
</template>

<script>
import { getAnagrams } from '../services/ruby-api'
export default {
  name: 'Anagrams',
  data() {
    return {
      grams: [],
      text: '',
      loading: false,
      nores: false,
      help: false

    }
  },
  methods: {
    async updateGrams(sentence) {
      this.nores = false

      if(sentence.length === 0) {
        return
      }

      this.loading = true
      this.grams = []
      var grams = await getAnagrams(sentence)

      if(grams.length === 0) {
        this.nores = true
      }

      grams.sort((a, b) => {
        if(a.length > b.length) {
          return 1
        }
        return -1
      })

      this.grams = grams
      this.loading = false
    },

    resetState() {
      this.grams = []
      this.nores = false
      this.text = ''
      this.loading = false
    }
  }
}
</script>

<style lang="scss" scoped>
  @media (min-width: 1200px) {
    .anagram-input {
      margin-right: 25%;
      margin-left: 25%;
    }
  }

  .anagram-input {
    font-size: 1.75em;
  }

  .page {
    position: relative;
  }

  .help-button {
    position: absolute;
    top: 10px;
    left: 10px;
  }

  .help-modal {
    position: absolute;
    top: 50%;
    left: 50%;
    /* bring your own prefixes */
  }
</style>
