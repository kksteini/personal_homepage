<template>
    <div class="page column q-pt-xl">
      <div class="column items-center q-mt-xl">
          <div class="col">
            <q-btn color="primary" @click="fetchPoem">
                d{{ slider }}
            </q-btn>
            <h1 v-if="res != 0"> {{ res }}</h1>
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
              :label-value="'d' + slider.toString()"
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
