<template>
	<div class="search-love">
		<!--bg img-->
		<div class="bg-image"></div>

		<!--Title for block-->
		<div class="text-center title">Найди любовь играя!</div>

		<SliderFirst />

		<div class="registration">
			<span :class="{ active: isActive === 'register' }" @click="setActive('register')">Регистрация</span>
			<span :class="{ active: isActive === 'auth' }" @click="setActive('auth')">Авторизация</span>
		</div>

		<div class="social d-flex justify-content-center">
			<a href="">
				<div><img src="../assets/img/elements/vk_icon.png" alt="vk"></div>
			</a>
			<a href="">
				<div><img src="../assets/img/elements/logo_google_plus_icon.png" alt="vk"></div>
			</a>
		</div>

		<input class="input-email" type="email" placeholder="Введите e-mail для регистрации" v-model="email" @input="checkEmailValidity()" :class="{ 'is-invalid': emailInvalid }"/>

		<div class="user-choose d-flex justify-content-between px-2">
			<div class="remember">
				<b-form-checkbox id="checkbox-1" v-model="status" name="checkbox-1" value="accepted" unchecked-value="not_accepted">
					<span>&nbsp;Запомнить меня</span>
				</b-form-checkbox>
			</div>

			<div class="lang">
				<span>Язык: </span>
				<span class="change-lang">Русский</span>
			</div>
		</div>

		<!--Main block to next page-->
		<b-row class="join d-flex justify-content-center my-2">
			<b-col>
				<div class="next-block" >
					<span class="w-100 text-center">Присоединиться</span>
					<img src="../assets/img/elements/arrows-11.png" alt="arrow-right">
				</div>
			</b-col>
		</b-row>
	</div>
</template>

<script>
	import SliderFirst from '../components/SliderFirst.vue'
	export default {
		name: 'Registration',
		components: {
			SliderFirst,
		},
		data() {
			return {
				isActive: "register",
			}
		},
		

		methods: {
			setActive(action) {
				this.isActive = action;
			},
			
		},
	};
</script>

<style scoped lang="scss">
	@import '../assets/extend';
	@import '../assets/vars';

	.search-love {
		@extend %mainWrapper;

		.bg-image {@extend %backgroundImg;}
		.title {@extend %titleFont;}

		.registration {
			display: flex;
			width: 100%;
			margin: 0 auto 30px;
			justify-content: space-between;
			align-items: center;
			border-radius: 50px;
			background: #fff;
			color: #b6b6b6;
			font-size: 16px;
			-webkit-box-shadow: 0px 1px 2px 0px rgb(187 187 187 / 72%);
			-moz-box-shadow: 0px 1px 2px 0px rgb(187 187 187 / 72%);
			box-shadow: 0px 1px 2px 0px rgb(187 187 187 / 72%);

			span {
				display: inline-block;
				text-align: center;
				cursor: pointer;
				
				&:first-of-type{padding-left:  50px;}
				&:last-of-type{padding-right: 50px;}
				
				&.active {
					padding: 12px 60px;
					color: $fontColor;
					border-radius: 50px;
					background: $bgMain;
					-webkit-box-shadow: 0px 1px 2px 0px rgb(187 187 187 / 72%);
					-moz-box-shadow: 0px 1px 2px 0px rgb(187 187 187 / 72%);
					box-shadow: 0px 1px 2px 0px rgb(187 187 187 / 72%);
					transition: background 0.2s ease;
				}
			}
		}

		.social{
			margin-bottom: 30px;
			div{
				width: 70px;
				&:first-of-type{margin-right: 20px;}
				>img{width: inherit;}
			}
		}

		.input-email {
			border: 0;
			outline: none;
			padding: 10px;
			border-radius: 50px;
			box-shadow: 0px 1px 2px 0px rgb(187 187 187 / 72%);
			text-align: center;
			margin-bottom: 30px;
  		}

		.user-choose{
			margin-bottom: 30px;
			.lang{
				.change-lang{
					color: $bgMain;
					cursor: pointer;
				}
			}
		}
	}
</style>