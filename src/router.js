import Vue from 'vue'
import Router from 'vue-router'
import TreeView1 from './views/TreeView1.vue'
// import TreeView2 from './views/TreeView2.vue'

Vue.use(Router)

const router = new Router({
	routes: [{
		path: '/TreeView1',
		name: 'TreeView1',
		component: TreeView1
	}]
})

export default router