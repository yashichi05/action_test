import { createApp } from 'vue'
import App from './App.vue'
import aa from './aa.js'
import {V5Button} from './test'

console.log(V5Button)

const app = createApp(App)
app.use(aa,{abc:545})

app.mount('#app')