import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Tailwind CSS
import './assets/index.css'

const app = createApp(App)

app.use(router)

app.mount('#app')
