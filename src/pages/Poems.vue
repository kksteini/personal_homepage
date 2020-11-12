<template>
    <div class="column q-pt-xl">
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
                  Nýtt ljóð
              </q-btn>
            </div>
            <div class="col q-mt-lg">
              <q-btn-toggle
                v-model="selection"
                toggle-color="secondary"
                :options="[
                  {label: 'Jöfn ferskeytla', value: 'jafn'},
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
              :label-value="slider + ' atkvæði'"
              label
              color="secondary"
            />
        </div>
    </div>
</template>

<script>
import { getPoem, getHaiku } from '../services/ruby-api'
export default {

  name: 'Poems',
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
  }
}
</script>

<style lang="scss" scoped>
  .slider {
    max-width: 40%;
  }
</style>
