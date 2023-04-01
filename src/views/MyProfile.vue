<template>
	<div class="user-container">
		<SliderProfile />

		<b-row class="photo-user d-flex justify-content-center my-2">
			<b-col class="col-block">
				<div class="download-block">
					<span class="w-100 text-center">Загрузить фото</span>
					<img src="../assets/img/elements/arrows-11.png" alt="arrow-right">
				</div>
			</b-col>
		</b-row>

		<!--Title for page-->
		<div class="text-center title mb-3">Моя игра</div>

		<div class="attemps">
			<div class="main-image">
				<div class="name">
					<span>Смайлы </span>
					<span>| Редактировать</span>
				</div>
				<b-row class="m-0 w-100">
					<b-col class="col-block">
						<div class="img-block">
							<img src="../assets/img/emoji/scream.png" alt="scream">
						</div>
						<div class="img-block add" @click="goToAdd">
							<img src="../assets/img/elements/add.png" alt="question">
						</div>
					</b-col>
				</b-row>
			</div>

			<div class="main-image">
				<div class="name">
					<span>Алкоголь </span>
					<span>| Редактировать</span>
				</div>
				<b-row class="m-0 w-100">
					<b-col class="col-block">
						<div class="img-block">
							<img src="../assets/img/food/beer.png" alt="beer">
						</div>
						<div class="img-block add" @click="goToAdd">
							<img src="../assets/img/elements/add.png" alt="question">
						</div>
					</b-col>
				</b-row>
			</div>

			<div class="main-image">
				<div class="name">
					<span>Еда </span>
					<span>| Редактировать</span>
				</div>
				<b-row class="m-0 w-100">
					<b-col class="col-block">
						<div class="img-block">
							<img src="../assets/img/food/spaggeti.png" alt="spaggeti">
						</div>
						<div class="img-block">
							<img src="../assets/img/food/salat.png" alt="salat">
						</div>
						<div class="img-block add" @click="goToAdd">
							<img src="../assets/img/elements/add.png" alt="question">
						</div>
					</b-col>
				</b-row>
			</div>

			<div class="main-image">
				<div class="name">
					<span>Безалкогольные напитки </span>
					<span style="color: #ff7200">| Последнее невозможно удалить</span>
				</div>
				<b-row class="m-0 w-100">
					<b-col class="col-block">
						<div class="img-block">
							<img src="../assets/img/food/latte.png" alt="latte">
						</div>
						<div class="img-block add" @click="goToAdd">
							<img src="../assets/img/elements/add.png" alt="question">
						</div>
					</b-col>
				</b-row>
			</div>

			<div class="main-image">
				<div class="name">
					<span>Выберите категорию и изображение</span>
					<span></span>
				</div>
				<b-row class="m-0 w-100">
					<b-col class="col-block">
						<div class="img-block add" @click="goToAdd">
							<img src="../assets/img/elements/add.png" alt="question">
						</div>
					</b-col>
				</b-row>
			</div>
		</div>

		<!--Title for page-->
		<div class="text-center title mb-3">Мои данные</div>

		<div class="my-info">
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

		<!--Main block to next page-->
		<b-row class="save d-flex justify-content-center my-2">
			<b-col class="col-block">
				<div class="save-block">
					<span class="w-100 text-center">Сохранить</span>
					<img src="../assets/img/elements/arrows-11.png" alt="arrow-right">
				</div>
			</b-col>
		</b-row>

		<!--Title for page-->
		<div class="text-center title mb-3">Мой фильтр</div>

		<div class="interests">
			<span :class="{ active: isInterestActive === 'all' }" @click="all('all')">Все</span>
			<span :class="{ active: isInterestActive === 'girls' }" @click=" girls('girls')">Девушки</span>
			<span :class="{ active: isInterestActive === 'boys' }" @click=" boys('boys')">Парни</span>
		</div>

		<div class="age">
			<span :class="{ active: isAgeActive === 'age_first' }" @click="age_first('age_first')">12 лет</span>
			<span :class="{ active: isAgeActive === 'age_second' }" @click=" age_second('age_second')">19-33</span>
			<span :class="{ active: isAgeActive === 'age_third' }" @click=" age_third('age_third')">90 лет</span>
		</div>

		<div class="my-info">
			<!--City2-->
			<div class="block-text city-settings" @click="showCitySettings = !showCitySettings">
				<div class="placeholder-txt">
					<span>{{ citySettings }}</span>
				</div>

				<div class="arrow">
					<span></span>
					<span></span>
				</div>

				<ul v-if="showCitySettings" class="list">
					<li v-for="(citySettingsOptions, index) in citySettingsOptions" :key="index">
						<span @click="selectCitySettings(citySettingsOptions)">{{ citySettingsOptions }}</span>
					</li>
				</ul>
			</div>

			<!--Target2-->
			<div class="block-text target-settings" @click="showSettingsTarget = !showSettingsTarget">
				<div class="placeholder-txt">
					<span>{{ targetSettings }}</span>
				</div>

				<div class="arrow">
					<span></span>
					<span></span>
				</div>

				<ul v-if="showSettingsTarget" class="list">
					<li v-for="(targetSettingsOption, index) in targetSettingsOptions" :key="index">
						<span @click="selectTargetSettings(targetSettingsOption)">{{ targetSettingsOption }}</span>
					</li>
				</ul>
			</div>
		</div>

		<b-row class="save d-flex justify-content-center my-2">
			<b-col class="col-block">
				<div class="save-block">
					<span class="w-100 text-center">Сохранить</span>
					<img src="../assets/img/elements/arrows-11.png" alt="arrow-right">
				</div>
			</b-col>
		</b-row>

		<!--Title for page-->
		<div class="text-center title mb-3">Помощь и информация</div>

		<div class="my-info">
			<div class="block-text help" @click="goToHelp">
				<div class="txt">
					<span>Помощь и поддержка</span>
				</div>
				<div class="arrow link">
					<img src="../assets/img/elements/link.png" alt="link">
				</div>
			</div>

			<div class="block-text help" @click = "goToRules">
				<div class="txt">
					<span>Правила сообщества</span>
				</div>
				<div class="arrow link">
					<img src="../assets/img/elements/link.png" alt="link">
				</div>
			</div>

			<div class="block-text help">
				<div class="txt">
					<span>Политика конфеденциальности</span>
				</div>
				<div class="arrow link">
					<img src="../assets/img/elements/link.png" alt="link">
				</div>
			</div>

			<div class="block-text help" @click="goToStore">
				<div class="txt">
					<span>Условия обслуживания</span>
				</div>
				<div class="arrow link">
					<img src="../assets/img/elements/link.png" alt="link">
				</div>
			</div>
		</div>

		<!--Title for page-->
		<div class="text-center title mb-3">Уведомления</div>

		<div class="my-info">
			<div class="block-text notice">
				<div class="txt">
					<span>Электронная почта</span>
				</div>
				<span>Включены</span>
			</div>

			<div class="block-text notice">
				<div class="txt">
					<span>Push-уведомления</span>
				</div>
				<span>Отключены</span>
			</div>
		</div>

		<b-row class="save d-flex justify-content-center my-2">
			<b-col class="col-block">
				<div class="save-block">
					<span class="w-100 text-center">Сохранить</span>
					<img src="../assets/img/elements/arrows-11.png" alt="arrow-right">
				</div>
			</b-col>
		</b-row>

		<!--Title for page-->
		<div class="text-center title mb-3">Приватность</div>

		<b-row class="save d-flex justify-content-center my-2">
			<b-col class="col-block">
				<div class="save-block" style="margin-bottom: 110px;">
					<span class="w-100 text-center">Отключить анкету</span>
					<!-- <img src="../assets/img/elements/arrows-11.png" alt="arrow-right"> -->
				</div>
			</b-col>
		</b-row>

		<MenuBlock />
	</div>
</template>

<script>
	import SliderProfile from '../components/SliderProfile.vue';
	import MenuBlock from '../components/MenuBlock.vue';

	export default {
		name: 'MyProfile',
		components: {
			SliderProfile,
			MenuBlock,
		},

		data(){
			return{
				isInterestActive: 'boys',
				isAgeActive: 'age_second',

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

				citySettings: 'Выберите город',
				citySettingsOptions: ['Москва', 'Могилёв', 'Другие'],
				showCitySettings: false,
				
				targetSettings: 'Выберите цель в проете',
				targetSettingsOptions: ['Знакомятся', 'Развлекаются', 'Ничего не делают'],
				showSettingsTarget: false,

				isEmailValid: false,
				isValid: false,
			}
		},

		methods: {
			goToAdd(){this.$router.push('/add')},

			all(action) {this.isInterestActive = action;},
			boys(action) {this.isInterestActive = action;},
			girls(action) {this.isInterestActive = action;},
			age_first(action) {this.isAgeActive = action;},
			age_second(action) {this.isAgeActive = action;},
			age_third(action) {this.isAgeActive = action;},

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
			
			selectCitySettings(citySettingsOptions) {
				if (citySettingsOptions === this.citySettings) {
					this.showCitySettings = false;
				} else {
					this.citySettings = citySettingsOptions;
					this.showCitySettings = true;
				}

				var arrow = document.querySelectorAll('.city-settings .arrow > span');
				arrow.forEach(function(arrow) {
  					arrow.style.backgroundColor = '#3cb371';
   		 		});

				var newColor = document.querySelector('.city-settings .placeholder-txt > span')
				newColor.style.color = '#000';
			},

			selectTargetSettings(targetSettingsOption) {
				if (targetSettingsOption === this.targetSettings) {
					this.showSettingsTarget = false;
				} else {
					this.targetSettings = targetSettingsOption;
					this.showSettingsTarget = true;
				}

				var arrow = document.querySelectorAll('.target-settings .arrow > span');
				arrow.forEach(function(arrow) {
  					arrow.style.backgroundColor = '#3cb371';
   		 		});

				var newColor = document.querySelector('.target-settings .placeholder-txt > span')
				newColor.style.color = '#000';
			},	

			goToHelp(){
				this.$router.push('/help');
			},

			goToStore(){
       			this.$router.push('/store');
			},

			goToRules(){
       			this.$router.push('/rules');
			},
		},
	};
</script>
  
<style scoped lang="scss">
	@import '../assets/extend';
	@import '../assets/vars';

	.user-container {
		@extend %mainWrapper;
		justify-content: flex-start;
		padding: 0;
		font-size: 14px;
		position: relative;
		max-width: inherit;

		@media screen and (min-width: 410px){font-size: 16px;}

		.photo-user, .save {
			width: 85%;
			margin: 0 auto;

			.col-block{
				padding: 0!important;
				.download-block, .save-block {
					@extend %mainBtnNextPage;
					margin-bottom: 10px;
				}
			}
		}

		.title {
			@extend %titleFont;
			margin: 0;
			font-size: 30px;

			@media screen and (min-width: 410px){
				font-size: 36px;
			}
		}

		.attemps{
			margin: 0 auto 10px;
			width: 85%;

			.name{
				margin-bottom: 5px;
				font-size: 13px;
				@media screen and (min-width: 410px){font-size: 14px;}

				>span:last-of-type{color: #b6b6b6}
			}

			.main-image{
				display: flex;
				flex-direction: column;
				align-items: flex-start;
				margin-bottom: 5px;

				.col-block{
					width: 100%;
					display: flex;
					padding: 0!important;
					&:not(:last-of-type){margin-right: 10px;}
				}

				.img-block {
					-webkit-box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.25);
					-moz-box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.25);
					box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.25);
					background-image: -moz-linear-gradient(-60deg, #f1f1f1 55%, rgb(255, 255, 255) 150%);
					background-image: -webkit-linear-gradient(-60deg, #f1f1f1 55%, rgb(255, 255, 255) 150%);
					background-image: -ms-linear-gradient(-60deg, #f1f1f1 55%, rgb(255, 255, 255) 150%);
					background-image: linear-gradient(-60deg, #f1f1f1 55%, rgb(255, 255, 255) 150%);
					border-radius: 10px;
					height: 80px;
					width: 80px;
					cursor: pointer;
					display: flex;
					align-items: center;
					&:not(:last-of-type){margin-right: 10px;}
					>img{width: inherit;}

					&.add{
						justify-content: center;
						&:hover{background: #6dc695;}
						>img{
							width: 50px;
							height: 50px;
						}
					}
				}
			}
		}

		.my-info{
			width: 85%;
			margin: 0 auto 15px;
			.input-text, .block-text {
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

				&.is-invalid {
					&::placeholder {color: $errorColor;}
				}

				&::placeholder {color: $placeholderColor;}
			}

			.check-input{
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

					&.link{height: 15px;}

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

				&.busy, &.city-settings{
					.list{height: 135px;}
				}

				&.target-settings{
					.list{height: 130px;}
					z-index: 3;
				}

				&.target{z-index: 3;}

				&.notice{
					&:first-of-type{
						>span{color: #6dc695;}
					}
					&:last-of-type{
						>span{color: #b6b6b6;}
					}
				}
			}

			.join {
				.next-block {@extend %mainBtnNextPage;}
			}
		}
		
		.interests, .age{
			display: flex;
			width: 85%;
			margin: 0 auto;
			justify-content: space-between;
			align-items: center;
			border-radius: 50px;
			background: #fff;
			color: #b6b6b6;
			font-size: 14px;
			-webkit-box-shadow: 0px 1px 2px 0px rgb(187 187 187 / 72%);
			-moz-box-shadow: 0px 1px 2px 0px rgb(187 187 187 / 72%);
			box-shadow: 0px 1px 2px 0px rgb(187 187 187 / 72%);
			@media screen and (min-width: 410px){font-size: 16px;}

			&.age{margin: 10px auto}

			span {
				display: inline-block;
				text-align: center;
				cursor: pointer;
				width: 100%;

				&.active {
					padding: 15px 20px;
					@extend %activeBtnBlack;
				}
			}
		}
	}
</style>