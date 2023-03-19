import Vue from 'vue';
import VueRouter from 'vue-router';
import Lang from '../views/Lang.vue';
import Registration from '../views/Registration.vue';

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		name: 'Lang',
		component: Lang,
	},
	{
		path: '/registration',
		name: 'Registration',
		component: Registration,
	},
];

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
});

export default router;