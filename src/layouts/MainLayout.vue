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
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
    >
      <q-img class="absolute-top" src="../assets/profile.jpg" style="height: 350px">
        <div class="absolute-bottom bg-transparent">
          <div class="text-weight-bold">Þorsteinn Sævar</div>
          <div>kjaftfor@kurte.is</div>
        </div>
      </q-img>

      <q-scroll-area class="repositioned">
        <q-list>
          <template v-for="(menuItem, index) in menuList">
            <q-item :key="index" clickable :to="menuItem.to" exact v-ripple>
              <q-item-section avatar>
                <q-icon :name="menuItem.icon" />
              </q-item-section>
              <q-item-section>
                {{ menuItem.label }}
              </q-item-section>
            </q-item>
            <q-separator :key="'sep' + index"  v-if="menuItem.separator" />
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
        icon: 'home',
        to: '/',
        label: 'Home'
      },
      {
        icon: 'work',
        to: '/Rhymes',
        label: 'Projects'
      }]
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
</style>
