<template>
  <div class="login-bg row justify-center items-center">
  </div>
</template>
<script>
import { ref } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import get from "lodash/get";
export default {
  setup() {
    const store = useStore();
    const router = useRouter();
    const loginForm = ref(null);
    const loginInfo = ref({
      username: "",
      password: "",
    });
    async function onSubmit() {
      const success = await loginForm.value.validate();
      if (success) {
        const res = await store.dispatch("login", {
          username: loginInfo.value.username,
          password: loginInfo.value.password,
        });
        if (get(res, "errcode", 0) === 200) {
          router.replace({
            path: "/",
          });
        }
      }
    }
    function onReset() {
      loginInfo.value.username = "";
      loginInfo.value.password = "";
    }
    // to reset validations:
    function reset() {
      loginForm.value.resetValidation();
    }
    return {
      onSubmit,
      onReset,
      loginInfo,
      loginForm,
      reset,
    };
  },
};
</script>
<style lang="stylus" scoped>
.login-bg {
  width: 100vw;
  height: 100vh;
  background #1D1D1D
}
</style>