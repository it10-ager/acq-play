import Vue from 'vue';
import VueRouter from 'vue-router';
import Lang from '../views/Lang.vue';
import Registration from '../views/Registration.vue';
import Authorization from '../views/Authorization.vue';
import PassReset from '../views/PassReset.vue';

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
	{
		path: '/authorization',
		name: 'Authorization',
		component: Authorization,
	},
	{
		path: '/passreset',
		name: 'PassReset',
		component: PassReset,
	},
];

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
});

export default router;