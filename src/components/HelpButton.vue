<template>
  <div>
    <q-btn @click="help = true" round color="primary" class="help-button" icon="help" />
    <q-dialog class="help-modal" v-model="help">
      <q-card>
        <q-card-section>
          <div class="text-h6">{{ $t(title) }}</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          {{ $t(body) }}
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="OK" color="secondary" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
export default {
  name: 'HelpButton',
  data() {
    return {
      help: false
    }
  },
  props: {
    title: {
      type: String,
      required: true
    },

    body: {
      type: String,
      require: true
    }
  }
}
</script>

<style lang="scss" scoped>
  .help-button {
    position: absolute;
    top: 10px;
    left: 10px;
  }

  .help-modal {
    position: absolute;
    top: 50%;
    left: 50%;
  }
</style>
