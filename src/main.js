import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { router } from './route'
import naive from "naive-ui";
import { createPinia } from 'pinia'

const app = createApp(App, {
    errorHandler: (err, instance, info) => {
      console.log(`err:${err},instance:${instance},info:${info}`)
    },
    compilerOptions: {
      isCustomElement: (tag) => tag.startsWith('n-')
    }
  })
// const pinia = createPinia();
app.use(createPinia())
app.use(naive);
app.use(router);
// app.use(pinia);
app.mount('#app');
