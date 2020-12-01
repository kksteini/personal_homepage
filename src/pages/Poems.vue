<template>
    <div class="page column q-pt-xl">
      <help-button title="poemGenerator.aboutTitle" body="poemGenerator.about" />
      <div class="row justify-center" v-if="poem.length == 0">
          <q-spinner
            class="q-mt-xl"
            color="white"
            size="4.5em"
          />
      </div>
      <div class="row justify-center">
          <div class="column">
              <div v-for="sentence in poem" :key="sentence">
                  <div class="text-h5 lt-md">
                      {{ sentence }}
                  </div>
                  <div class="text-h4 md">
                      {{ sentence }}
                  </div>
                  <div class="text-h2 gt-md">
                      {{ sentence }}
                  </div>
              </div>
         </div>
      </div>
      <div class="column items-center q-mt-xl">
          <div class="col">
            <q-btn color="primary" @click="fetchPoem">
                {{ $t('poemGenerator.new') }}
            </q-btn>
          </div>
          <div class="col q-mt-lg">
            <q-btn-toggle
              v-model="selection"
              toggle-color="secondary"
              :options="[
                {label: $t('poemGenerator.four'), value: 'jafn'},
                {label: 'Haiku', value: 'haiku'},
              ]"
            />
          </div>
      </div>
      <div class="row justify-around q-mt-xl" v-if="selection == 'jafn'">
        <q-slider
              class="slider"
              v-model="slider"
              :min="4"
              :max="20"
              :step="1"
              :label-value="slider + ' ' + $t('poemGenerator.syllables')"
              label
              color="secondary"
        />
      </div>
    </div>
</template>

<script>
import { getPoem, getHaiku } from '../services/ruby-api'
import HelpButton from '../components/HelpButton'
export default {

  name: 'Poems',
  components: {
    HelpButton
  },
  data() {
    return {
      poem: [],
      slider: 7,
      selection: 'jafn'
    }
  },
  created() {
    this.fetchPoem()
  },
  methods: {
    async fetchPoem() {
      this.poem = []

      if(this.selection === 'jafn') {
        this.poem = await getPoem(this.slider)
      } else if(this.selection === 'haiku') {
        this.poem = await getHaiku()
      }
    }
  },
  watch: {
    selection: function (old, select) {
      this.poem = []
      this.fetchPoem()
    }
  }
}
</script>

<style lang="scss" scoped>
  .slider {
    max-width: 40%;
  }

  .page {
    position: relative;
  }
</style>
