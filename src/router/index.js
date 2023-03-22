import Vue from 'vue';
import VueRouter from 'vue-router';
import Lang from '../views/Lang.vue';
import Registration from '../views/Registration.vue';
import Authorization from '../views/Authorization.vue';
import PassReset from '../views/PassReset.vue';
import NewDataUser from '../views/NewDataUser.vue';
import ChooseImages from '../views/ChooseImages.vue';
import DownloadUserPhoto from '../views/DownloadUserPhoto.vue';
import GuessImages from '../views/GuessImages.vue';
import Success from '../views/Success.vue';
import Loss from '../views/Loss.vue';
import Timer from '../views/Timer.vue';
import UserProfile from '../views/UserProfile.vue';
import Correspondence from '../views/Correspondence.vue';
import Around from '../views/Around.vue';
import Dialog from '../views/Dialog.vue';
import Chats from '../views/Chats.vue';
import Favorite from '../views/Favorite.vue';
import Story from '../views/Story.vue';
import You from '../views/You.vue';
import Mutually from '../views/Mutually.vue';

Vue.use(VueRouter);

const routes = [
	{
		path: "/index.html",
		redirect: "/" ,
	},
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
	{
		path: '/game',
		name: 'GuessImages',
		component: GuessImages,
	},
	{
		path: '/success',
		name: 'Success',
		component: Success,
	},
	{
		path: '/loss',
		name: 'Loss',
		component: Loss,
	},
	{
		path: '/timer',
		name: 'Timer',
		component: Timer,
	},
	{
		path: '/message',
		name: 'UserProfile',
		component: UserProfile,
	},
	{
		path: '/correspondence',
		name: 'Correspondence',
		component: Correspondence,
	},
	{
		path: '/around',
		name: 'Around',
		component: Around,
	},
	{
		path: '/dialog',
		name: 'Dialog',
		component: Dialog,
	},
	{
		path: '/chats',
		name: 'Chats',
		component: Chats,
	},
	{
		path: '/favorite-dialog',
		name: 'Favorite',
		component: Favorite,
	},
	{
		path: '/story',
		name: 'Story',
		component: Story,
	},
	{
		path: '/you',
		name: 'You',
		component: You,
	},
	{
		path: '/mutually',
		name: 'Mutually',
		component: Mutually,
	},
];

const router = new VueRouter({
	base: '/dist/',
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
});

export default router;