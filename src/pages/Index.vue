<template>
  <div class="flex flex-center column q-pa-md">
      <!--
      <div class="col text-h3 text-center">Þorsteinn Sævar Kristjánsson</div>
      <div class="q-mb-lg col text-h5 text-center">{{ $t('computerScientist') }}</div>
      <div class="col text-center q-mt-lg">
        <q-btn color="secondary">
          <a class="q-btn" href="cv.pdf" download="cv.pdf">
            {{ $t('cv') }}
          </a>
        </q-btn>
     </div>
     -->
    <div v-for="cv in cvList" :key="cv.title" class="cv-container full-width">
      <div class="col text-h3 text-center q-ma-lg">{{ $t(cv.title) }}</div>
      <div class="row full-width q-col-gutter-md">
        <div v-for="item in cv.items" :key="item"  class="col-xs-12 col-md-6 col-lg-6 flex">
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
