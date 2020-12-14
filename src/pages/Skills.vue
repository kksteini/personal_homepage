<template>
  <div class="q-pa-sm q-pt-xl row flex justify-center">
    <div class="q-gutter-y-md col-lg-6 full-width skillcontainer">
      <q-card class="full-width">
        <q-tabs
          v-model="tab"
          dense
          class="text-grey"
          active-color="white"
          indicator-color="primary"
          align="justify"
          narrow-indicator
        >
          <q-tab name="programming" :label="$t('skills.programming')" />
          <q-tab name="frameworks" :label="$t('skills.frameworks')" />
          <q-tab name="other" :label="$t('skills.other')" />
        </q-tabs>

        <q-separator />

        <q-tab-panels v-model="tab">
          <q-tab-panel name="programming">
            <div v-for="skill in skills.programming" :key="skill[0]" class="q-mb-sm">
              <q-linear-progress rounded size="40px" :value="skill[1] * 0.1" color="secondary">
                <div class="absolute-full q-pl-md">
                  <div class="skill-text">
                    {{ skill[0] }}
                  </div>
                </div>
              </q-linear-progress>
            </div>
          </q-tab-panel>

          <q-tab-panel name="frameworks">
            <div v-for="skill in skills.frameworks" :key="skill[0]" class="q-mb-sm">
              <q-linear-progress rounded size="40px" :value="skill[1] * 0.1" color="secondary">
                <div class="absolute-full q-pl-md">
                  <div class="skill-text">
                    {{ skill[0] }}
                  </div>
                </div>
              </q-linear-progress>
            </div>
          </q-tab-panel>

          <q-tab-panel name="other">
            <div v-for="skill in skills.other" :key="skill[0]" class="q-mb-sm">
              <q-linear-progress rounded size="40px" :value="skill[1] * 0.1" color="secondary">
                <div class="absolute-full q-pl-md">
                  <div class="skill-text">
                    {{ $t(skill[0]) }}
                  </div>
                </div>
              </q-linear-progress>
            </div>
          </q-tab-panel>

        </q-tab-panels>
      </q-card>
    </div>
  </div>
</template>

<script>
const skills = require('./pagedata/skills.json')
export default {
  name: 'Skills',
  data () {
    return {
      tab: 'programming',
      skills: skills
    }
  }
}
</script>

<style lang="scss" scoped>
  .skillcontainer {
    max-width: 1200px;
  }

  .skill-text {
    font-size: 0.6em;
    color: $primary;
  }
</style>
