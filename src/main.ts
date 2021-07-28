import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vant from 'vant'
import VueCookies from 'vue-cookies'
import 'vant/lib/index.css'

const app = createApp(App)

app.config.globalProperties.$cookies = VueCookies

app.use(store)
app.use(router)
app.use(Vant)
app.mount('#app')