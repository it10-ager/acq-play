<template>
	<div class="search-love">
		<!--bg img-->
		<div class="bg-image"></div>

		<div class="text-center title">Знакомься по новому!</div>

		<!--Slider-->
		<SliderFirst />

		<!---Email input--->
		<input class="input-email" type="email" :placeholder="emailPlaceholder" v-model="email" :class="{ 'is-invalid': emailInvalid, 'is-valid': emailValid}" />

		<!--User checkbox-->
		<div class="user-choose d-flex justify-content-between align-items-center px-2">
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
				<div class="next-block" @click="checkEmailValidity()">
					<span class="w-100 text-center">Выслать новый пароль</span>
					<img src="../assets/img/elements/arrows-11.png" alt="arrow-right">
				</div>
			</b-col>
		</b-row>

		<!--Reset password-->
		<b-row class="my-2">
			<b-col class="text-center">
				<span>Забыли свой пароль?</span>
			</b-col>
		</b-row>
	</div>
</template>

<script>
	import SliderFirst from '../components/SliderFirst.vue'
	export default {
		name: 'PassReset',

		components: {
			SliderFirst,
		},

		data() {
			return {
				email: '',
				emailInvalid: false,
				emailValid: false,
				emailPlaceholder: 'Введите e-mail для отправки нового пароля',
			}
		},

		methods: {
			checkEmailValidity() {
				var emailExam = /^\S+@\S+\.\S+$/;

				if (!this.email.trim()) {
					this.emailInvalid = true;
					this.emailValid = false;
					this.email = '';
					this.emailPlaceholder = 'Поле e-mail пустое!';
				} else if (!emailExam.test(this.email)) {
					this.emailInvalid = true;
					this.emailValid = false;
					this.email = '';
					this.emailPlaceholder = 'E-mail не найден';
				} else {
					this.emailInvalid = false;
					this.email = '';
					this.emailValid = true;
					this.emailPlaceholder = 'Новый пароль отправлен на e-mail';
					this.emailPlaceholder.style.color = 'green';
				}
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

		.bg-image {@extend %backgroundImg;}
		.title {@extend %titleFont;}

		.input-email {
			border: 0;
			outline: none;
			padding: 10px;
			border-radius: 50px;
			box-shadow: 0px 1px 2px 0px rgb(187 187 187 / 72%);
			text-align: center;
			margin-bottom: 140px;

			&.is-invalid {
				&::placeholder {
					font-weight: bold;
					color: rgb(255, 174, 0);
				}
			}

			&.is-valid {
				&::placeholder {
					font-weight: bold;
					color: $bgMain;
				}
			}
			&::placeholder {color: #999;}
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
			.next-block{
				display: flex;
				justify-content: space-between;
				align-items: center;
				background: $bgMain;
				color: $fontColor;
				border-radius: 50px;
				padding: 15px 30px;
				cursor: pointer;
				transition: background 0.2s;

				>img {width: 8px;}
				&:hover {background: #339860;}
			}
		}
	}
</style>