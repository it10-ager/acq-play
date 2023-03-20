<template>
	<div class="new-data">
		<!--Title for page-->
		<div class="text-center title">Найди любовь играя!</div>

		<!--Name-->
		<input class="input-text" type="text" :placeholder="namePlaceholder" v-model="name"
		:class="{ 'is-invalid': nameInvalid, 'is-valid': nameValid }" />
		
		<!--Gender-->
		<div class="block-text gender" @click="showGender = !showGender">
			<div class="placeholder-txt">
				<span>{{ gender }}</span>
			</div>

			<div class="arrow">
				<span></span>
				<span></span>
			</div>

			<ul v-if="showGender" class="list">
				<li v-for="(genderOption, index) in genderOptions" :key="index">
					<span @click="selectGender(genderOption)">{{ genderOption }}</span>
				</li>
			</ul>
  		</div>

		<!--Date birthday-->
		<input class="input-text" type="text" :placeholder="birthPlaceholder" v-model="birth"
		:class="{ 'is-invalid': birthInvalid, 'is-valid': birthValid }" />

		<!--City-->
		<input class="input-text" type="text" :placeholder="cityValue" v-model="city"
		:class="{ 'is-invalid': cityInvalid, 'is-valid': cityValid }" />

		<!--Company-->
		<input class="input-text" type="text" :placeholder="companyPlaceholder" v-model="company"
		:class="{ 'is-invalid': companyInvalid, 'is-valid': companyValid }" />

		<!--Busy-->
		<div class="block-text busy" @click="showBusy = !showBusy">
			<div class="placeholder-txt">
				<span>{{ busy }}</span>
			</div>

			<div class="arrow">
				<span></span>
				<span></span>
			</div>

			<ul v-if="showBusy" class="list">
				<li v-for="(busyOption, index) in busyOptions" :key="index">
					<span @click="selectBusy(busyOption)">{{ busyOption }}</span>
				</li>
			</ul>
  		</div>

		<!--Target-->
		<div class="block-text target" @click="showTarget = !showTarget">
			<div class="placeholder-txt">
				<span>{{ target }}</span>
			</div>

			<div class="arrow">
				<span></span>
				<span></span>
			</div>

			<ul v-if="showTarget" class="list">
				<li v-for="(targetOption, index) in targetOptions" :key="index">
					<span @click="selectTarget(targetOption)">{{ targetOption }}</span>
				</li>
			</ul>
  		</div>

		<!---Email--->
		<input class="input-text email" type="email" :placeholder="emailPlaceholder" v-model="email"
		:class="{ 'is-invalid': emailInvalid, 'is-valid': emailValid }" />

		<!--Main block to next page-->
		<b-row class="join d-flex justify-content-center my-2">
			<b-col>
				<div class="next-block" @click="checkFormValidity()">
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
				name: '',
				namePlaceholder: 'Введите имя',
				nameInvalid: false,
				nameValid: false,

				gender: 'Выберите пол',
				genderOptions: ['Мужской', 'Женский'],
     			showGender: false,

				busy: 'Выберите род занятий',
				busyOptions: ['Работаю', 'Учусь', 'Ничего не делаю'],
				showBusy: false,

				target: 'Выберите цель в проекте',
				targetOptions: ['Развлекаюсь', 'Знакомлюсь'],
				showTarget: false,

				birth: '',
				birthPlaceholder: 'Введите дату рождения',
				birthInvalid: false,
				birthValid: false,

				city: '',
				cityValue: 'Введите город',
				cityInvalid: false,
				cityValid: false,

				company: '',
				companyPlaceholder: 'Введите компанию',
				companyInvalid: false,
				companyValid: false,

				email: '',
				emailInvalid: false,
				emailValid: false,
				emailPlaceholder: 'Введите e-mail (для отправки пароля)',
    		}
		},

		methods: {
			selectGender(genderOption) {
				this.gender = genderOption;
				this.showGender = false;

				var arrow = document.querySelectorAll('.gender .arrow > span');
				arrow.forEach(function(arrow) {
  					arrow.style.backgroundColor = '#3cb371';
   		 		});

				var newColor = document.querySelector('.gender .placeholder-txt > span')
				newColor.style.color = '#000';
			},

			selectBusy(busyOption) {
				this.busy = busyOption;
				this.showBusy = false;

				var arrow = document.querySelectorAll('.busy .arrow > span');
				arrow.forEach(function(arrow) {
  					arrow.style.backgroundColor = '#3cb371';
   		 		});

				var newColor = document.querySelector('.busy .placeholder-txt > span')
				newColor.style.color = '#000';
			},

			selectTarget(targetOption) {
				this.target = targetOption;
				this.showTarget = false;

				var arrow = document.querySelectorAll('.target .arrow > span');
				arrow.forEach(function(arrow) {
  					arrow.style.backgroundColor = '#3cb371';
   		 		});

				var newColor = document.querySelector('.target .placeholder-txt > span')
				newColor.style.color = '#000';
			},

			checkFormValidity() {
				var emailCheck = /^\S+@\S+\.\S+$/;
				var nameCheck = 2;	
				var companyCheck = 2;	
				/* var birthCheck = /^\d{2}\.\d{2}\.\d{2}$/;
				let parts = this.birth.split('.')
      			let day = parseInt(parts[0], 10)
      			let month = parseInt(parts[1], 10)
      			let year = parseInt(parts[2], 10) */

				/* name check */
				if (!this.name.trim()) {
					this.nameInvalid = true;
					this.nameValid = false;
					this.name = '';
					this.namePlaceholder = 'Поле имя пустое!';
				} else if (this.name.length < nameCheck) { 
					this.nameInvalid = true;
					this.nameValid = false;
					this.name = '';
					this.namePlaceholder = 'Имя должно содержать от 2 букв';
				} else {
					this.nameInvalid = false;
					this.nameValid = true;
					this.name = '';
					this.namePlaceholder = 'Введите имя';
				}

				/* email check */
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
					this.emailPlaceholder = 'Введите e-mail (для отправки пароля)';
				}

				/* birth check and day month year */
				/* if (!birthCheck.test(this.birth) && (day < 1 || day > 31 || month < 1 || month > 12 || year < 99 || year > 99)) {
					this.birthInvalid = true;
					this.birthValid = false;
					this.birth = '';
					this.birthPlaceholder = 'Некорректная дата (31.12.99)';
				} */

				/* company check */
				if (!this.company.trim()) {
					this.companyInvalid = true;
					this.companyValid = false;
					this.company = '';
					this.companyPlaceholder = 'Поле компания пустое!';
				} else if (this.company.length < companyCheck) {
					this.companyInvalid = true;
					this.companyValid = false;
					this.company = '';
					this.companyPlaceholder = 'Поле должно содержать от 2 букв';
				} else {
					this.companyInvalid = false;
					this.companyValid = true;
					this.company = '';
					this.companyPlaceholder = 'Введите компанию';
				}
				
				/* go to next page if all fields full and right*/
				if(this.nameValid && this.companyValid && this.emailValid){
       				this.$router.push('/choose-images');
    			}
			},
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

		.input-text, .block-text {
			border: 0;
			outline: none;
			padding: 15px 30px;
			border-radius: 50px;
			box-shadow: 0px 1px 2px 0px rgb(187 187 187 / 72%);
			text-align: left;
			margin-bottom: 20px;


			&.input-text{
				&.email{margin-bottom: 50px;}
			}

			&.is-invalid {
				&::placeholder {color: $errorColor;}
			}

			&::placeholder {color: $placeholderColor;}
		}

		.block-text {
			display: flex;
			justify-content: space-between;
			align-items: center;
			background: #fff;
			position: relative;
			cursor: pointer;

			.placeholder-txt {
				color: $placeholderColor;
				width: 100%;
				position: relative;
				z-index: 7;
			}

			.arrow {
				display: flex;
				width: 10px;
				justify-content: center;
				z-index: 12;

				>span {
					height: 10px;
					width: 2px;
					background-color: $placeholderColor;

					&:first-of-type {
						transform: rotate(-45deg);
						margin-right: 4px;
					}

					&:last-of-type {transform: rotate(45deg);}
				}
			}

			.list {
				position: absolute;
				top: 55%;
				left: 0;
				height: 105px;
				width: 100%;
				padding: 0;
				list-style: none;
				background-color: #fff;
				box-shadow: 0 2px 2px rgba(0, 0, 0, 0.1);
				border-radius: 0 0 29px 29px;
				z-index: 5;
				display: flex;
				flex-direction: column;
				justify-content: flex-end;
				overflow: hidden;
				cursor: default;

				li {
					padding: 8px 30px;
					&:last-of-type{padding-bottom: 12px;}
					
					>span{
						cursor: pointer;
						&:hover {color: $bgMain;}
					}
				}
			}

			&.busy{
				.list{height: 150px;}
			}

			&.target{z-index: 3;}
		}

		.join {
			.next-block {@extend %mainBtnNextPage;}
		}
	}
</style>