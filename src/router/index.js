import Vue from 'vue';
import VueRouter from 'vue-router';
import Lang from '../views/Lang.vue';
import Registration from '../views/Registration.vue';
import Authorization from '../views/Authorization.vue';
import PassReset from '../views/PassReset.vue';
import NewDataUser from '../views/NewDataUser.vue';
import ChooseImages from '../views/ChooseImages.vue';
import DownloadUserPhoto from '@/views/DownloadUserPhoto.vue';

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
	{
		path: '/new-data-user',
		name: 'NewDataUser',
		component: NewDataUser,
	},
	{
		path: '/choose-images',
		name: 'ChooseImages',
		component: ChooseImages,
	},
	{
		path: '/download-user-photo',
		name: 'DownloadUserPhoto',
		component: DownloadUserPhoto,
	},
];

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
});

export default router;