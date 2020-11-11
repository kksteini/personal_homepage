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
        <div class="row justify-center q-mt-xl">
            <q-btn color="primary" @click="fetchPoem">
                Nýtt ljóð
            </q-btn>
        </div>
        <div class="row justify-around q-mt-xl">
            <q-slider
              class="slider"
              v-model="slider"
              :min="4"
              :max="20"
              :step="1"
              :label-value="slider + 'sérhljóðar'"
              label
              color="secondary"
            />
        </div>
    </div>
</template>

<script>
import { getPoem } from '../services/ruby-api'
export default {

  name: 'Poems',
  data() {
    return {
      poem: [],
      slider: 7
    }
  },
  created() {
    this.fetchPoem()
  },
  methods: {
    async fetchPoem() {
      this.poem = []
      this.poem = await getPoem(this.slider)
    }
  }
}
</script>

<style lang="scss" scoped>
  .slider {
    max-width: 40%;
  }
</style>
