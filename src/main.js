import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import BootstrapVue from "bootstrap-vue";
import AppSpinner from "@/components/AppSpinner";

Vue.use(BootstrapVue);
Vue.component("AppSpinner", AppSpinner);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
