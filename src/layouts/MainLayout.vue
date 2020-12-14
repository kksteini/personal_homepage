<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />
        <q-toolbar-title>Munum að vera kurteis</q-toolbar-title>
        <div>
          <q-btn flat @click="setLang('is')">IS</q-btn>
          <q-btn flat @click="setLang('en')">EN</q-btn>
        </div>
     </q-toolbar>

   </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
    >
      <q-img class="profile-img absolute-top" src="../assets/profile.jpg">
        <div class="absolute-bottom bg-transparent">
          <div class="text-weight-bold">Þorsteinn Sævar</div>
          <div>kjaftfor@kurte.is</div>
        </div>
      </q-img>

      <q-scroll-area class="repositioned">
        <q-list>
          <template v-for="(menuItem, index) in menuList">
            <q-item v-if="!menuItem.separator" :key="index" clickable :to="menuItem.to" exact v-ripple>
              <q-item-section avatar>
                <q-icon :name="menuItem.icon" />
              </q-item-section>
              <q-item-section>
                {{ $t(menuItem.label) }}
              </q-item-section>
            </q-item>
            <q-separator class="q-mt-sm q-mb-sm" :key="'sep' + index" size="2px" v-else />
          </template>
        </q-list>
      </q-scroll-area>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'MainLayout',
  data () {
    return {
      leftDrawerOpen: false,
      menuList: [{
        icon: 'person',
        to: '/',
        label: 'home'
      },
      {
        icon: 'rowing',
        to: '/skills',
        label: 'skills.title'
      },
      {
        separator: true
      },
      {
        icon: 'book',
        to: '/rim',
        label: 'rhymingDictionary.title'
      },
      {
        icon: 'all_inclusive',
        to: '/anagram',
        label: 'anagrams.title'
      },
      {
        icon: 'text_snippet',
        to: '/poems',
        label: 'poemGenerator.title'
      }
      ],
      lang: this.$i18n.locale
    }
  },
  watch: {
    lang(lang) {
      this.$i18n.locale = lang
      // import(`quasar/lang/${lang}`).then(language => {
      //   this.$q.lang.set(language.default)
      // })
    }
  },
  methods: {
    setLang(language) {
      this.lang = language
    }
  }
}
</script>

<style lang="scss" scoped>
  .q-router-link--active {
    color: white;
    font-size: 1.5em;
  }

  .repositioned {
    height: calc(100% - 400px);
    margin-top: 400px;
  }

  .profile-img {
    height: 350px;
  }
</style>
