import App from './App.vue'
const comment = {
	install: function(Vue) {
		Vue.component(App.name, App)
	}
}
// 这里的判断很重要
if (typeof window !== 'undefined' && window.Vue) { 
	window.Vue.use(comment) 
}
export default comment;
