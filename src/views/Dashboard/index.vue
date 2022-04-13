<template>
  <q-layout view="hHh lpR fFf">
    <q-header bordered class="bg-primary text-white">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />

        <q-toolbar-title>  
          <p class="user">
            <q-icon name="people" style="margin-right: 10px;"></q-icon>
              {{ username }}
            <q-btn color="white" text-color="black" label="退出" size="10px" @click="loginOut"></q-btn>
          </p>
        </q-toolbar-title>

        <!-- <q-btn dense flat round icon="menu" @click="toggleRightDrawer" /> -->
      </q-toolbar>
    </q-header>

    <q-drawer show-if-above v-model="leftDrawerOpen" side="left" bordered>
      <!-- drawer content -->
      <q-scroll-area class="fit">
        <q-list padding class="menu-list">
          <q-item
            clickable
            v-ripple
            to="/dayreport"
          >
            <q-item-section avatar>
              <q-icon name="event" />
            </q-item-section>

            <q-item-section> 1 </q-item-section>
          </q-item>
          <q-item
            clickable
            v-ripple
            to="/monthreport"
          >
            <q-item-section avatar>
              <q-icon name="event" />
            </q-item-section>
          
            <q-item-section> 2 </q-item-section>
          </q-item>
          <q-item
            clickable
            v-ripple
            to="/yearreport"
          >
            <q-item-section avatar>
              <q-icon name="event" />
            </q-item-section>
          
            <q-item-section> 3 </q-item-section>
          </q-item>
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

// import eventBus from '@/utils/event-bus';
export default {
  components: {
  },
  setup() {
    const leftDrawerOpen = ref(true);
    const rightDrawerOpen = ref(false);
    const store = useStore();
    const router = useRouter();
    const username = computed(() => store.state.userInfo.username || Cookie.get('username'));
    
    function loginOut () {
      store.dispatch("loginout")
      router.replace({
        path: "/login",
      });
    }
    return {
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },

      rightDrawerOpen,
      toggleRightDrawer() {
        rightDrawerOpen.value = !rightDrawerOpen.value;
      },
      username,
      loginOut,
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
