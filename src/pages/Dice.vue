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
                d{{ slider }}
            </q-btn>
          </div>
          <div class="col q-mt-lg">
          </div>
      </div>
      <div class="row justify-around q-mt-xl">
        <q-slider
              class="slider"
              v-model="slider"
              :min="3"
              :max="20"
              :step="1"
              :label-value="d + slider"
              label
              color="secondary"
        />
      </div>
    </div>
</template>

<script>
export default {

  name: 'Dice',
  components: {
  },
  data() {
    return {
      slider: 8,
      res: 0
    }
  },
  created() {
    this.fetchPoem()
  },
  methods: {
    fetchPoem() {
        this.res = Math.ceil(Math.random() * 20)
    }
  },
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
