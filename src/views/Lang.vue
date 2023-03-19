<template>
	<div class="language-select">
		<!--bg img-->
		<div class="bg-image"></div>
		
		<!--Title for page-->
		<div class="text-center title">Выберите язык</div>
		
		<!--Blocks for choosing language-->
		<b-row class="lang-content d-flex justify-content-center flex-column mt-4">
			<b-col class="col-width my-2" v-for="(lang, index) in languages" :key="index">
				<div :class="['lang-block', lang.active ? 'active' : '']" @click="toggleLanguage(index)">{{ lang.text }}
				</div>
			</b-col>
		</b-row>

		<!--Main block to next page-->
		<b-row class="lang-content d-flex justify-content-center my-2" v-if="hasActiveLanguage">
			<b-col>
				<div class="next-block" @click="goToRegistration">
					<span class="w-100 text-center">Далее</span>
					<img src="../assets/img/elements/arrows-11.png" alt="arrow-right">
				</div>
			</b-col>
		</b-row>
	</div>
</template>
  
<script>
	export default {
		name: 'Lang',
		data() {
			return {
				/* languages */
				languages: [
					{ text: 'Русский', active: false },
					{ text: 'English', active: false },
					{ text: 'Español', active: false }
				]
			};
		},

		computed: {
			hasActiveLanguage() { return this.languages.some(lang => lang.active); }
		},

		methods: {
			toggleLanguage(index) { this.languages[index].active = !this.languages[index].active; },
			/* go to next page */
			goToRegistration() {this.$router.push('/registration');},
		}
	};
</script>
  
<style scoped lang="scss">
	@import '../assets/extend';
	@import '../assets/vars';
	
	.language-select {
		padding: $wrapperPadding;
		position: relative;
		display: flex;
		flex-direction: column;
		height: 100vh;

		.bg-image {@extend %backgroundImg;}
		.title {@extend %titleFont;}

		.lang-content {
			margin: 0 0 80px;
			
			.lang-block.active {
				color: $fontColor;
				background: $bgMain;
			}

			.next-block, .lang-block {
				-webkit-box-shadow: 0px 1px 2px 0px rgb(187 187 187 / 72%);
				-moz-box-shadow: 0px 1px 2px 0px rgb(187 187 187 / 72%);
				box-shadow: 0px 1px 2px 0px rgb(187 187 187 / 72%);
				font-size: 16px;
				color: #000;
				font-weight: bold;
				background: #ffffff;
				border-radius: 50px;
				padding: 15px 30px;
				cursor: pointer;
				transition: background 0.2s;
			}

			.next-block {
				display: flex;
				justify-content: space-between;
				align-items: center;
				background: $bgMain;
				color: $fontColor;

				>img {width: 8px;}
				&:hover {background: #339860;}
			}
		}
	}
</style>