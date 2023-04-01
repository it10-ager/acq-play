<template>
	<div class="search-love">
		<!--Slider-->
		<SliderFirst />

		<!--Button of Registration or Authorization-->
		<div class="registration">
			<span :class="{ active: isActive === 'register' }" @click="setRegist('register')">Регистрация</span>
			<span :class="{ active: isActive === 'auth' }" @click="setAuth('auth')">Авторизация</span>
		</div>

		<!--Social links-->
		<div class="social d-flex justify-content-center">
			<a href="">
				<div><img src="../assets/img/elements/vk_icon.png" alt="vk"></div>
			</a>
			<a href="">
				<div><img src="../assets/img/elements/logo_google_plus_icon.png" alt="vk"></div>
			</a>
		</div>

		<!---Email input--->
		<input class="input-email" type="email" :placeholder="emailPlaceholder" v-model="email"
		:class="{ 'is-invalid': emailInvalid }" />

		<!--User checkbox-->
		<div class="user-choose d-flex justify-content-between align-items-center px-2">
			<div class="remember">
				<b-form-checkbox id="checkbox-1" v-model="status" name="checkbox-1" value="accepted" unchecked-value="not_accepted">
					<span>&nbsp;Запомнить меня</span>
				</b-form-checkbox>
			</div>

			<div class="lang">
				<span>Язык: </span>
				<span class="change-lang" @click="goToLangPage">Русский</span>
			</div>
		</div>

		<!--Main block to next page-->
		<b-row class="join d-flex justify-content-center my-2">
			<b-col class="p-0">
				<div class="next-block" @click="checkEmailValidity()">
					<span class="w-100 text-center">Присоединиться</span>
					<img src="../assets/img/elements/arrows-11.png" alt="arrow-right">
				</div>
			</b-col>
		</b-row>

		<!--Reset password-->
		<b-row class="my-2">
			<b-col class="text-center">
				<span @click="passReset" style="cursor: pointer;">Забыли свой пароль?</span>
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
				email: '',
				emailInvalid: false,
				emailValid: false,
				emailPlaceholder: 'Введите e-mail для регистрации',
			}
		},

		methods: {
			setRegist(action) {
				this.isActive = action;
				this.$router.push('/registration');
			},

			setAuth(action) {
				this.isActive = action;
				this.$router.push('/authorization');
			},

			checkEmailValidity() {
				var emailCheck = /^\S+@\S+\.\S+$/;

				if (!this.email.trim()) {
					this.emailInvalid = true;
					this.emailValid = false;
					this.email = '';
					this.emailPlaceholder = 'Поле e-mail пустое!';
				} else if(!emailCheck.test(this.email)) {
					this.emailInvalid = true;
					this.emailValid = false;
					this.email = '';
					this.emailPlaceholder = 'E-mail содержит ошибку';
				} else {
					this.emailInvalid = false;
					this.emailValid = true;
					this.email = '';
					this.emailPlaceholder = 'Введите e-mail для регистрации';
				}

				/* go to next page if all fields full and right*/
				if(this.emailValid){
       				this.$router.push('/new-data-user');
    			}
			},

			goToLangPage(){
				return this.$router.push('/');
			},

			passReset(){
				this.$router.push('/passreset');
			},
		},
	};
</script>

<style scoped lang="scss">
	@import '../assets/extend';
	@import '../assets/vars';

	.search-love {
		@extend %mainWrapper;
		max-width: inherit;

		.registration {
			display: flex;
			@extend %width;
			margin: 0 auto 6%;
			justify-content: space-between;
			align-items: center;
			border-radius: 50px;
			background: #fff;
			color: $placeholderColor;
			-webkit-box-shadow: 0px 1px 2px 0px rgb(187 187 187 / 72%);
			-moz-box-shadow: 0px 1px 2px 0px rgb(187 187 187 / 72%);
			box-shadow: 0px 1px 2px 0px rgb(187 187 187 / 72%);

			span {
				display: inline-block;
				text-align: center;
				cursor: pointer;
				
				&:first-of-type{padding-left:  50px;}
				&:last-of-type{padding-right: 50px;}

				@media screen and (max-width: 385px){
					&:first-of-type{padding-left:  30px;}
					&:last-of-type{padding-right: 30px;}
				}

				@media screen and (max-width: 340px){
					&:first-of-type{padding-left:  20px;}
					&:last-of-type{padding-right: 20px;}
				}

				&.active {
					@extend %activeBtnBlack;
					padding: 12px 40px;
					@media screen and (min-width: 340px){padding: 12px 50px;}
					@media screen and (min-width: 385px){padding: 12px 60px;}
					@media screen and (min-width: 500px){padding: 12px 70px;}
				}
			}
		}

		.social{
			margin-bottom: 5%;
			a{
				&:first-of-type{margin-right: 15px;}
				div{
					width: 70px;
					>img{width: inherit;}
				}
			}
		}

		.input-email {
			border: 0;
			outline: none;
			padding: 10px;
			border-radius: 50px;
			-webkit-box-shadow: 0px 1px 2px 0px rgb(187 187 187 / 72%);
			-moz-box-shadow: 0px 1px 2px 0px rgb(187 187 187 / 72%);
			box-shadow: 0px 1px 2px 0px rgb(187 187 187 / 72%);
			text-align: center;
			margin: 0 auto 14%;
			@extend %width;

			&.is-invalid {
				&::placeholder {
					color: $errorColor;
				}
			}
			&::placeholder {color: $placeholderColor;}
		}

		.user-choose{
			@extend %width;
			margin-bottom: 6%;
			.lang{
				.change-lang{
					color: $bgMain;
					cursor: pointer;
				}
			}
		}

		.join {
			@extend %width;
			.next-block{@extend %mainBtnNextPage;}
		}
	}
</style>