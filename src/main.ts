import { createApp } from 'vue'
import './styles/style.css'
import App from './App.vue'
import 'uno.css'
import { setupStore } from './store'

async function setupApp() {
  const app = createApp(App)
  setupStore(app)
  app.mount('#app')
}
setupApp()

