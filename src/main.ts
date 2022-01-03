import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";
import store from "./store";
import router from "./router";
import vuetify from "./plugins/vuetify";

Vue.config.productionTip = false;
new Vue({
  store,
  vuetify,
  router,
  render: (h) => h(App),
}).$mount("#app");

Vue.use(VueRouter);
