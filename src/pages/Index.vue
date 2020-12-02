<template>
  <div class="row flex q-pt-lg">
    <div v-for="cv in cvList" :key="cv.title" class="col-lg-6">
      <div class="col text-h3 text-center q-ma-lg">{{ $t(cv.title) }}</div>
      <div class="row full-width q-pa-lg q-col-gutter-md">
        <div v-for="item in cv.items" :key="item"  class="col-12 flex">
          <q-card class="fit cv-card">
            <q-card-section>
              <div class="text-h6">
                {{ $t(`${item}.title`)  }}
              </div>
              <div class="text-subtitle2">
                {{ $t(`${item}.year`)}}
              </div>
            </q-card-section>

            <q-separator inset />

            <q-card-section>
              {{ $t(`${item}.body`)}}
            </q-card-section>

          </q-card>
        </div>
      </div>
    </div>
    <div class="column flex-center text-center full-width q-mt-lg">
      <q-btn color="secondary">
        <a class="q-btn" href="cv.pdf" download="cv.pdf">
          {{ $t('cv.get') }}
        </a>
      </q-btn>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PageIndex',
  data () {
    return {
      cvList: [
        {
          title: 'cv.education.title',
          items: [
            'cv.education.ru',
            'cv.education.hi',
            'cv.education.ma'
          ]
        },
        {
          title: 'cv.work.title',
          items: [
            'cv.work.showdeck',
            'cv.work.assistant'
          ]
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
  .cv-container {
    max-width: 1200px;
  }
</style>
