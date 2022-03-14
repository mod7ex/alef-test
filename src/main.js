import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import basePlugin from "./plugins";

let app = createApp(App);

app.use(basePlugin);

app.use(store);

app.use(router);

app.mount("#app");
