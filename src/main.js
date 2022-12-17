import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// import Nav from '@/components/Nav.vue'
import './assets/main.css'



const app = createApp(App)

app.use(router)

app.mount('#app')
