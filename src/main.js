import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vuetify from 'vuetify'
import Http from './services/Http'

Vue.config.productionTip = false

Vue.use(Vuetify)

new Vue({
	router,
	Http,
	render: h => h(App)
}).$mount('#app')