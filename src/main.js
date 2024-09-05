import './output.css'

import { vScrollReveal } from 'vue-scroll-reveal'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faTwitter, faGithub, faFacebook)

const app = createApp(App)

app.use(vScrollReveal)
app.component('font-awesome-icon', FontAwesomeIcon)

app.use(router)

app.mount('#app')
