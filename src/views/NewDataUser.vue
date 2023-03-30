<template>
	<div class="new-data">
		<!--Title for page-->
		<div class="text-center title">Найди любовь играя!</div>

		<!--Name-->
		<div class="check-input name-input">
			<input class="input-text" type="text" maxlength="15" :placeholder="namePlaceholder" v-model="name" @input="checkValueLength()"
			:class="{ 'is-invalid': nameInvalid, 'is-valid': nameValid }" />

			<div class="arrow name-arrow">
				<span></span>
				<span></span>
			</div>
		</div>
		
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
   					<span @click="selectGender(genderOption)" 
					:class="{ 'is-invalid': genderInvalid, 'is-valid': genderValid }">{{ genderOption }}</span>
  				</li>
			</ul>
  		</div>

		<!--Date birthday-->
		<div class="check-input birth-input">
			<input class="input-text date" type="text" :placeholder="birthPlaceholder" v-model.lazy="birth"
			:class="{ 'is-invalid': birthInvalid, 'is-valid': birthValid }" @input="formatDateInput" @keypress="onlyNumberInput"/>

			<div class="arrow birth-arrow">
				<span></span>
				<span></span>
			</div>
		</div>
		
		<!--City-->
		<div class="check-input city-input">
			<input class="input-text" maxlength="15" type="text" :placeholder="cityValue" v-model="city" @input="checkValueLength()"
			:class="{ 'is-invalid': cityInvalid, 'is-valid': cityValid }" />

			<div class="arrow city-arrow">
				<span></span>
				<span></span>
			</div>
		</div>

		<!--Company-->
		<div class="check-input company-input">
			<input class="input-text" maxlength="15" type="text" :placeholder="companyPlaceholder" v-model="company" @input="checkValueLength()"
			:class="{ 'is-invalid': companyInvalid, 'is-valid': companyValid }" />

			<div class="arrow company-arrow">
				<span></span>
				<span></span>
			</div>
		</div>
		
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
		<div class="check-input email-input">
			<input class="input-text email" type="email" :placeholder="emailPlaceholder" v-model="email" @input="checkValueLength()"
			:class="{ 'is-invalid': emailInvalid, 'is-valid': emailValid }" />

			<div class="arrow email-arrow">
				<span></span>
				<span></span>
			</div>
		</div>

		<!--Main block to next page-->
		<b-row class="join d-flex justify-content-center my-2">
			<b-col class="p-0">
				<div class="next-block" v-if="isFormValid" @click="checkFormValidity()">
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
				showNextBlock: false,
				name: '',
				namePlaceholder: 'Введите имя',
				nameInvalid: false,
				nameValid: false,

				gender: 'Выберите пол',
				genderOptions: ['Мужской', 'Женский'],
				genderOption: null,
     			showGender: false,
				genderInvalid: false,
				genderValid: false,

				busy: 'Выберите род занятий',
				busyOptions: ['Работаю', 'Учусь', 'Ничего не делаю'],
				showBusy: false,

				target: 'Выберите цель в проекте',
				targetOptions: ['Развлекаюсь', 'Знакомлюсь'],
				showTarget: false,

				birth: '',
				birthPlaceholder: 'Введите дату рождения (числа)',
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

				isEmailValid: false,
				isValid: false,
    		}
		},

		computed: {
    		isFormValid() {
     			return this.name && this.birth && this.city && this.genderOption !== null;
   		 	},
  		},

		methods: {
			selectGender(genderOption) {
				this.genderOption = genderOption;
				if (genderOption === this.gender) {
					this.showGender = false;
				} else {
					this.gender = genderOption;
					this.showGender = true;
				}
				
				var arrow = document.querySelectorAll('.gender .arrow > span');
				arrow.forEach(function(arrow) {
					arrow.style.backgroundColor = '#3cb371';
				});

				var newColor = document.querySelector('.gender .placeholder-txt > span')
				newColor.style.color = '#000';
			},

			selectBusy(busyOption) {
				if (busyOption === this.busy) {
					this.showBusy = false;
				} else {
					this.busy = busyOption;
					this.showBusy = true;
				}

				var arrow = document.querySelectorAll('.busy .arrow > span');
				arrow.forEach(function(arrow) {
  					arrow.style.backgroundColor = '#3cb371';
   		 		});

				var newColor = document.querySelector('.busy .placeholder-txt > span')
				newColor.style.color = '#000';
			},

			selectTarget(targetOption) {
				if (targetOption === this.target) {
					this.showTarget = false;
				} else {
					this.target = targetOption;
					this.showTarget = true;
				}

				var arrow = document.querySelectorAll('.target .arrow > span');
				arrow.forEach(function(arrow) {
  					arrow.style.backgroundColor = '#3cb371';
   		 		});

				var newColor = document.querySelector('.target .placeholder-txt > span')
				newColor.style.color = '#000';
			},

			onlyNumberInput(event) {
   				if (event.keyCode < 48 || event.keyCode > 57) {
      				event.preventDefault();
    			}
  			},

			formatDateInput(event) {
				var input = event.target.value.replace(/\D/g, '').substring(0, 8);
				var day = input.substring(0, 2);
				var month = input.substring(2, 4);
				var year = input.substring(4, 8);
				var birthCheck = document.querySelector('.birth-input > .input-text');
				var birthArrow = document.querySelectorAll('.birth-input .birth-arrow > span');
				
				if (input.length > 4) {
					event.target.value = `${day}.${month}.${year}`;
				} else if (input.length > 2) {
					event.target.value = `${day}.${month}`;
				} else if (input.length > 0) {
					event.target.value = `${day}`;
				}
				this.birth = event.target.value;

				if(birthCheck.value.length == 0){
					birthArrow.forEach(function(arrow) {
  						arrow.style.backgroundColor = '#b6b6b6';
   		 			});
					
				} else if(birthCheck.value.length > 0 && birthCheck.value.length < 10){
					birthArrow.forEach(function(arrow) {
  						arrow.style.backgroundColor = '#ff7200';
   		 			});
				} else {
					birthArrow.forEach(function(arrow) {
  						arrow.style.backgroundColor = '#3cb371';
   		 			});
				}
			},

			checkValueLength(){
				var nameCheck = document.querySelector('.name-input > .input-text');
				var nameArrow = document.querySelectorAll('.name-input .name-arrow > span');
				var cityCheck = document.querySelector('.city-input > .input-text');
				var cityArrow = document.querySelectorAll('.city-input .city-arrow > span');
				var companyCheck = document.querySelector('.company-input > .input-text');
				var companyArrow = document.querySelectorAll('.company-input .company-arrow > span');
				var emailCheck = document.querySelector('.email-input > .input-text');
				var emailArrow = document.querySelectorAll('.email-input .email-arrow > span');
				var emailInput = /^\S+@\S+\.\S+$/;
				
				if(nameCheck.value.length == 0){
					nameArrow.forEach(function(arrow) {
  						arrow.style.backgroundColor = '#b6b6b6';
   		 			});
				} else if(nameCheck.value.length > 0 && nameCheck.value.length <= 2){
					nameArrow.forEach(function(arrow) {
  						arrow.style.backgroundColor = '#ff7200';
   		 			});
				} else if(nameCheck.value.length > 2){
					nameArrow.forEach(function(arrow) {
  						arrow.style.backgroundColor = '#3cb371';
   		 			});
				}

				if(cityCheck.value.length == 0){
					cityArrow.forEach(function(arrow) {
  						arrow.style.backgroundColor = '#b6b6b6';
   		 			});
				} else {
					cityArrow.forEach(function(arrow) {
  						arrow.style.backgroundColor = '#3cb371';
   		 			});
				}

				if(companyCheck.value.length == 0){
					companyArrow.forEach(function(arrow) {
  						arrow.style.backgroundColor = '#b6b6b6';
   		 			});
				} else if(companyCheck.value.length > 0 && companyCheck.value.length <= 2){
					companyArrow.forEach(function(arrow) {
  						arrow.style.backgroundColor = '#ff7200';
   		 			});
				} else if(companyCheck.value.length > 2){
					companyArrow.forEach(function(arrow) {
  						arrow.style.backgroundColor = '#3cb371';
   		 			});
				}

				if (emailCheck.value.length == 0) {
					emailArrow.forEach(function(arrow) {
  						arrow.style.backgroundColor = '#b6b6b6';
   		 			});
				} else if(!emailInput.test(this.email)) {
					emailArrow.forEach(function(arrow) {
  						arrow.style.backgroundColor = '#ff7200';
   		 			});
				} else {
					emailArrow.forEach(function(arrow) {
  						arrow.style.backgroundColor = '#3cb371';
   		 			});
				}
			},

			checkFormValidity() {
				var nameLength = 2;
				var companyLength = 2;
				var lengthBirth = 10;

				/* name check */
				if (!this.name.trim()) {
					this.nameInvalid = true;
					this.nameValid = false;
					this.name = '';
					this.namePlaceholder = 'Поле имя пустое!';
				} else if (this.name.length < nameLength) { 
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
				
				/* city check */
				if (!this.city.trim()) {
					this.cityInvalid = true;
					this.cityValid = false;
					this.city = '';
					this.cityPlaceholder = 'Поле город пустое!';
				} else {
					this.cityInvalid = false;
					this.cityValid = true;
					this.city = '';
					this.cityPlaceholder = 'Введите город';
				}

				/* birth check */
				if (!this.birth.trim()) {
					this.birthInvalid = true;
					this.birthValid = false;
					this.birth = '';
					this.birthPlaceholder = 'Поле дата рождения пустое!';
				} else if (this.birth.length < lengthBirth) { 
					this.birthInvalid = true;
					this.birthValid = false;
					this.birth = '';
					this.birthPlaceholder = 'Не верно введена дата рождения';
				} else {
					this.birthInvalid = false;
					this.birthValid = true;
					this.birth = '';
					this.birthPlaceholder = 'Введите дату рождения (цифры)';
				}

				/* company check */
				if (this.company.length < companyLength) {
					this.companyInvalid = true;
					this.companyValid = false;
					this.company = '';
					this.companyPlaceholder = 'Поле должно содержать от 2 букв';
				}

				/* email check */
				/* var emailCheck = /^\S+@\S+\.\S+$/;
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
				} */

				if (this.nameValid && this.birthValid ) {this.isValid = true;}
				else {this.isValid = false;}

				if(this.isValid == true){this.$router.push('choose-images');}
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
		max-width: inherit;
		@media screen and (max-width: 415px){justify-content: center;}
		
		.title {
			@extend %titleFont;
			margin: 5% 0 3%;
		}
	
		.input-text, .block-text {
			@extend %width;
			border: 0;
			outline: none;
			padding: 15px 30px;
			border-radius: 50px;
			-webkit-box-shadow: 0px 1px 2px 0px rgb(187 187 187 / 72%);
			-moz-box-shadow: 0px 1px 2px 0px rgb(187 187 187 / 72%);
			box-shadow: 0px 1px 2px 0px rgb(187 187 187 / 72%);
			text-align: left;
			margin-bottom: 2%;

			&.date{
				&::placeholder{color: #b6b6b6}
			}

			&.input-text{
				&.email{margin-bottom: 4%;}
			}

			&.is-invalid {
				&::placeholder {color: $errorColor;}
			}

			&::placeholder {color: $placeholderColor;}
		}

		.check-input{
			@extend %width;
			position: relative;

			.input-text{width: 100%;}
			.arrow {
				display: flex;
				width: 10px;
				justify-content: center;
				position: absolute;
				top: 22px;
				right: 30px;

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
			@extend %width;
			.next-block {
				@extend %mainBtnNextPage;
			}
		}
	}
</style>