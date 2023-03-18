import Vue from 'vue';
import VueRouter from 'vue-router';
import Screen0 from '../views/Screen0.vue';
import Screen1 from '../views/Screen1.vue';

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		name: 'Screen0',
		component: Screen0,
	},
	{
		path: '/screen1',
		name: 'Screen1',
		component: Screen1,
	},
];

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
});

export default router;