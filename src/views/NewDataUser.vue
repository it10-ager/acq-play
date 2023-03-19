<template>
	<div class="new-data">
		<!--Title for page-->
		<div class="text-center title">Найди любовь играя!</div>

		<!--Name-->
		<input class="input-text" type="text" :placeholder="nameValue" v-model="text"
		:class="{ 'is-invalid': nameInvalid, 'is-valid': nameValid }" />
		
		<!--Gender-->
		<div class="block-text">
			<div class="placeholder-txt">
				<span>{{ gender }}</span>
			</div>
			<div class="arrow">
				<span></span>
				<span></span>
			</div>
		</div>

		<!--Date birthday-->
		<input class="input-text" type="text" :placeholder="birthValue" v-model="birth"
		:class="{ 'is-invalid': birthInvalid, 'is-valid': birthValid }" />

		<!--City-->
		<input class="input-text" type="text" :placeholder="cityValue" v-model="city"
		:class="{ 'is-invalid': cityInvalid, 'is-valid': cityValid }" />

		<!--Company-->
		<input class="input-text" type="text" :placeholder="companyValue" v-model="company"
		:class="{ 'is-invalid': companyInvalid, 'is-valid': companyValid }" />

		<!--Busy-->
		<div class="block-text">
			<div class="placeholder-txt">
				<span>{{ busy }}</span>
			</div>
			<div class="arrow">
				<span></span>
				<span></span>
			</div>
		</div>

		<!--Target-->
		<div class="block-text">
			<div class="placeholder-txt">
				<span>{{ target }}</span>
			</div>
			<div class="arrow">
				<span></span>
				<span></span>
			</div>
		</div>

		<!---Email--->
		<input class="input-text" type="email" :placeholder="emailPlaceholder" v-model="email"
		:class="{ 'is-invalid': emailInvalid, 'is-valid': emailValid }" />

		<!--Main block to next page-->
		<b-row class="join d-flex justify-content-center my-2">
			<b-col>
				<div class="next-block">
					<span class="w-100 text-center">Далее</span>
					<img src="../assets/img/elements/arrows-11.png" alt="arrow-right">
				</div>
			</b-col>
		</b-row>
	</div>
</template>

<script>
	export default {
		name: 'NewDataUser',

		data() {
			return {
				text: '',
				nameValue: 'Введите имя',
				nameInvalid: false,
				nameValid: false,

				gender: 'Выберите пол',
				busy: 'Выберите род занятий',
				target: 'Выберите цель в проекте',

				birth: '',
				birthValue: 'Введите дату рождения',
				birthInvalid: false,
				birthValid: false,

				city: '',
				cityValue: 'Введите город',
				cityInvalid: false,
				cityValid: false,

				company: '',
				companyValue: 'Введите компанию',
				companyInvalid: false,
				companyValid: false,

				email: '',
				emailInvalid: false,
				emailValid: false,
				emailPlaceholder: 'Введите e-mail (для отправки пароля)',
    		}
		},

		methods: {
			
		},
	}
</script>

<style scoped lang="scss">
	@import '../assets/extend';
	@import '../assets/vars';

	.new-data {
		@extend %mainWrapper;
		font-size: 18px;
		.title {@extend %titleFont;}
	
		.input-text, .block-text{
			border: 0;
			outline: none;
			padding: 15px 30px;
			border-radius: 50px;
			box-shadow: 0px 1px 2px 0px rgb(187 187 187 / 72%);
			text-align: left;
			margin-bottom: 20px;

			&.is-invalid {
				&::placeholder {
					color: $errorColor;
				}
			}
			&::placeholder {color: $placeholderColor;}
		}

		.block-text{
			display: flex;
			justify-content: space-between;
			align-items: center;
			background: #fff;

			.placeholder-txt{
				color: $placeholderColor;
				width: 100%;
			}

			.arrow{
				display: flex;
				width: 10px;
				align-items: center;
				justify-content: center;

				>span{
					height: 10px;
					width: 2px;
					background-color: $placeholderColor;

					&:first-of-type{
						transform: rotate(-45deg);
						margin-right: 4px;
					}

					&:last-of-type{transform: rotate(45deg);}
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