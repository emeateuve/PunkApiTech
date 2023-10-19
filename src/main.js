import { createApp } from 'vue'
import App from './App.vue'
import 'vuetify/styles'
import router from './router'
import store from './store'
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import * as labsComponents from "vuetify/labs/components";
import { fa } from "vuetify/iconsets/fa";
import { mdi, aliases } from "vuetify/iconsets/mdi";
import "@mdi/font/css/materialdesignicons.css";

const vuetify = createVuetify({
	directives,
	labsComponents,
	components: {
	  ...components,
	  ...labsComponents
	},
	icons: {
	  defaultSet: "mdi",
	  aliases,
	  sets: {
		mdi,
		fa
	  }
	}
  });

const appInstance = createApp(App);
appInstance.use(router);
appInstance.use(store);
appInstance.use(vuetify);
appInstance.mount("#app");
