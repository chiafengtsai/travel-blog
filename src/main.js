import Vue from 'vue';
import App from './App.vue';
import VueLazyload from 'vue-lazyload';

Vue.use(VueLazyload, {
	preLoad: 1.3,
	attempt: 1,
	lazyComponent: true
});
Vue.config.productionTip = false;

new Vue({
	render: (h) => h(App)
}).$mount('#app');
