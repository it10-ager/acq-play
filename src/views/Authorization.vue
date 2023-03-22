<template>
	<div class="search-love">
		<!--Slider-->
		<SliderFirst />

		<!--Button of Registration or Authorization-->
		<div class="registration">
			<span :class="{ active: isActive === 'register' }" @click="setRegist('register')">Регистрация</span>
			<span :class="{ active: isActive === 'auth' }" @click="setAuth('auth')">Авторизация</span>
		</div>

		<!---Email input--->
		<input class="input-email" type="email" :placeholder="emailPlaceholder" v-model="email"
		:class="{ 'is-invalid': emailInvalid, 'is-valid': emailValid}"  />
		<!---Password input--->
		<input class="input-pass" type="password" :placeholder="passPlaceholder" v-model="pass"
		:class="{ 'is-invalid': passInvalid, 'is-valid': passValid}"  />

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
			<b-col>
				<div class="next-block" @click="checkFormValidity()">
					<span class="w-100 text-center">Войти</span>
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
		name: 'Authorization',

		components: {
			SliderFirst,
		},

		data() {
			return {
				isActive: "auth",
				email: '',
				pass: '',
				emailInvalid: false,
				passInvalid: false,
				emailValid: false,
				passValid: false,
				emailPlaceholder: 'Введите e-mail / логин',
				passPlaceholder: 'Введите свой пароль',
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

			checkFormValidity() {
				var emailCheck = /^\S+@\S+\.\S+$/;
				var passCheck = 5;	/*for test*/

				if (!this.email.trim()) {
					this.emailInvalid = true;
					this.emailValid = false;
					this.email = '';
					this.emailPlaceholder = 'Поле e-mail пустое!';
				} else if (!emailCheck.test(this.email)) {
					this.emailInvalid = true;
					this.emailValid = false;
					this.email = '';
					this.emailPlaceholder = 'E-mail содержит ошибку';
				} else {
					this.emailInvalid = false;
					this.emailValid = true;
					this.email = '';
					this.emailPlaceholder = 'Введите e-mail / логин';
				}

				if (!this.pass.trim()) {
					this.passInvalid = true;
					this.passValid = false;
					this.pass = '';
					this.passPlaceholder = 'Поле пароль пустое!';
				} else if (this.pass.length < passCheck) { /*for test*/
					this.passInvalid = true;
					this.passValid = false;
					this.pass = '';
					this.passPlaceholder = 'Неверный пароль';
				} else {
					this.passInvalid = false;
					this.passValid = true;
					this.pass = '';
					this.passPlaceholder = 'Введите свой пароль';
				}
				
				/* go to next page if all fields full and right*/
				if(this.emailValid && this.passValid){
       				this.$router.push('/game');
    			}
			},

			passReset() {
				this.$router.push('/passreset');
			},
			
			goToLangPage(){
				return this.$router.push('/');
			},

		},
	};
</script>

<style scoped lang="scss">
	@import '../assets/extend';
	@import '../assets/vars';

	.search-love {
		@extend %mainWrapper;
		font-size: 16px;
		.title {@extend %titleFont;}
		.registration {
			display: flex;
			width: 100%;
			margin: 0 auto 66px;
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

				@media screen and (max-width: 385px){
					&:first-of-type{padding-left:  30px;}
					&:last-of-type{padding-right: 30px;}
				}

				@media screen and (max-width: 340px){
					&:first-of-type{padding-left:  20px;}
					&:last-of-type{padding-right: 20px;}
				}

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

				@media screen and (max-width: 385px){
					&.active {padding: 12px 50px;}
				}

				@media screen and (max-width: 340px){
					&.active {padding: 12px 40px;}
				}
			}
		}

		.social{
			margin-bottom: 30px;
			div{
				width: 60px;
				&:first-of-type{margin-right: 20px;}
				>img{width: inherit;}
			}
		}

		.input-email, .input-pass {
			border: 0;
			outline: none;
			padding: 10px;
			border-radius: 50px;
			box-shadow: 0px 1px 2px 0px rgb(187 187 187 / 72%);
			text-align: center;
			margin-bottom: 25px;

			&.input-email {margin-bottom: 15px;}

			&.is-invalid {
				&::placeholder {
					color: $errorColor;
				}
			}
			&::placeholder {color: $placeholderColor;}
		}

		.user-choose{
			margin-bottom: 20px;
			.lang{
				.change-lang{
					color: $bgMain;
					cursor: pointer;
				}
			}
		}

		.join {
			.next-block{@extend %mainBtnNextPage;}
		}
	}
</style>