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
    </div>
</template>

<script>
import { getPoem } from '../services/ruby-api'
export default {

  name: 'Poems',
  data() {
    return {
      poem: []
    }
  },
  created() {
    this.fetchPoem()
  },
  methods: {
    async fetchPoem() {
      this.poem = []
      this.poem = await getPoem()
    }
  }
}
</script>
