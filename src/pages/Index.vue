<template>
  <q-page class="flex flex-center">
    <div class="column">
      <div class="col text-h3 text-center">Þorsteinn Sævar Kristjánsson</div>
      <div class="col text-h5 text-center">{{ $t('computerScientist') }}</div>
      <!--
      <div class="col text-center q-mt-lg">
        <q-btn color="secondary">
          <a class="q-btn" href="cv.pdf" download="cv.pdf">
            {{ $t('cv') }}
          </a>
        </q-btn>
     </div>
     -->
   </div>
 </q-page>
</template>

<script>
export default {
  name: 'PageIndex'
}
</script>
