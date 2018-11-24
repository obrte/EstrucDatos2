import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import TreeView2 from './views/TreeView.vue'

Vue.use(Router)

const router = new Router({
	routes: [{
		path: '/',
		name: 'home',
		component: Home
	},
	{
		path: '/treeview2',
		name: 'treeview2',
		component: TreeView2
	}
	]
})

export default router