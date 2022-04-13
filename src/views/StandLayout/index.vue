<template>
  <q-layout view="hHh lpR fFf">
    <q-header bordered class="bg-primary text-white">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />

        <q-toolbar-title>
          
          <!-- <p class="user">
            <q-icon name="people" style="margin-right: 10px"></q-icon>
            {{ username }}
            <q-btn
              color="white"
              text-color="black"
              label="退出"
              size="10px"
              @click="handleLoginOut"
            ></q-btn>
          </p> -->
        </q-toolbar-title>
        <q-toolbar class="col-4 bg-primary text-white">
          <q-space />
          <q-btn flat round dense class="q-mr-sm" :label="username">
            <q-menu>
              <q-list dense style="min-width: 100px">
                <q-item clickable v-close-popup>
                  <q-item-section @click="handleLoginOut">退出</q-item-section>
                </q-item>
              </q-list>
            </q-menu>
          </q-btn>
        </q-toolbar>
        <!-- <q-btn dense flat round icon="menu" @click="toggleRightDrawer" /> -->
      </q-toolbar>
    </q-header>

    <q-drawer show-if-above v-model="leftDrawerOpen" side="left" bordered>
      <!-- drawer content -->
      <q-scroll-area class="fit">
        <q-list padding class="menu-list">
          <q-item clickable v-ripple to="/dayreport">
            <q-item-section avatar>
              <q-icon name="event" />
            </q-item-section>

            <q-item-section> 日报 </q-item-section>
          </q-item>
          <q-item clickable v-ripple to="/monthreport">
            <q-item-section avatar>
              <q-icon name="event" />
            </q-item-section>

            <q-item-section> 月报 </q-item-section>
          </q-item>
          <q-item clickable v-ripple to="/yearreport">
            <q-item-section avatar>
              <q-icon name="event" />
            </q-item-section>

            <q-item-section> 年报 </q-item-section>
          </q-item>
          <q-item clickable v-ripple to="/totalreport">
            <q-item-section avatar>
              <q-icon name="event" />
            </q-item-section>

            <q-item-section> 总报 </q-item-section>
          </q-item>
          <!-- <q-expansion-item
            expand-separator
            icon="insights"
            label="指标看板"
            default-opened
          >
            <q-item
              v-for="metricLine in metricLineDataList"
              :key="metricLine.id"
              clickable
              v-ripple
              :to="{ name: metricLine.name, params: { monitorId: metricLine.id } }"
            >
              <q-item-section avatar>
                <q-icon name="star" />
              </q-item-section>

              <q-item-section>{{ metricLine.title }}</q-item-section>
            </q-item>
          </q-expansion-item> -->
        </q-list>
      </q-scroll-area>
    </q-drawer>

    <q-drawer
      v-model="rightDrawerOpen"
      side="right"
      overlay
      bordered
      behavior="mobile"
      :width="460"
    >
      <!-- drawer content -->
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { ref, computed } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import Cookie from "js-cookie";

export default {
  components: {},
  setup() {
    const leftDrawerOpen = ref(true);
    const rightDrawerOpen = ref(false);
    const store = useStore();
    const router = useRouter();
    const username = computed(
      () => store.state.userInfo.username || Cookie.get("username") || '用户名'
    );

    function handleLoginOut() {
      store.dispatch("handleLoginOut");
      router.replace({
        path: "/login",
      });
    }
    return {
      username,
      leftDrawerOpen,
      rightDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
      toggleRightDrawer() {
        rightDrawerOpen.value = !rightDrawerOpen.value;
      },
      handleLoginOut,
    };
  },
};
</script>
<style type="text/css">
.user {
  position: fixed;
  right: 30px;
  top: 10px;
}
</style>
