<template>
	<div class="language-select">
		<!--Title for page-->
		<div class="text-center title">Выберите язык</div>
		
		<!--Blocks for choosing language-->
		<b-row class="lang-content d-flex justify-content-center align-items-center flex-column">
			<b-col class="col-width" v-for="(lang, index) in languages" :key="index">
				<div :class="['lang-block', lang.active ? 'active' : '']" @click="toggleLanguage(index)">
					{{ lang.text }}
				</div>
			</b-col>
		</b-row>

		<!--Main block to next page-->
		<b-row class="lang-content next d-flex justify-content-center" v-if="hasActiveLanguage">
			<b-col class="col-width">
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
			toggleLanguage(index) {
				this.languages.forEach((lang, i)=>{
					if (i === index) {lang.active = !lang.active;} 
					else {lang.active = false;}
				});
			},
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
		min-height: 100vh;
		max-width: inherit;
		
		.title {@extend %titleFont;}

		.lang-content {
			margin: 0 0 40%;
			&.next{
				margin-bottom: 0;
				@extend %width;
			}

			.col-width{
				margin: 0 0 3%;
				padding: 0;
				@extend %width;
			}
			
			.lang-block{
				-webkit-box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.25);
				-moz-box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.25);
				box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.25);
				border: 1px solid transparent;

				&:hover {
					border-style: solid;
					border-width: 1px;
					border-color: rgb(204, 204, 204);
					color: $fontColor;
					background-image: -moz-linear-gradient(-60deg, #339860 55%, rgb(255, 255, 255) 150%);
					background-image: -webkit-linear-gradient(-60deg, #339860 55%, rgb(255, 255, 255) 150%);
					background-image: -ms-linear-gradient(-60deg, #339860 55%, rgb(255, 255, 255) 150%);
					background-image: linear-gradient(-60deg, #339860 55%, rgb(255, 255, 255) 150%);
				}
			}

			.lang-block.active {
				color: $fontColor;
				background-image: -moz-linear-gradient(-60deg, #3cb371 55%, rgb(255, 255, 255) 150%);
				background-image: -webkit-linear-gradient(-60deg, #3cb371 55%, rgb(255, 255, 255) 150%);
				background-image: -ms-linear-gradient(-60deg, #3cb371 55%, rgb(255, 255, 255) 150%);
				background-image: linear-gradient(-60deg, #3cb371 55%, rgb(255, 255, 255) 150%);
				border-style: solid;
				border-width: 1px;
				border-color: rgb(204, 204, 204);
				-webkit-box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.25);
				-moz-box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.25);
				box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.25);
			
				&:hover {
					background-image: -moz-linear-gradient(-60deg, #3cb371 55%, rgb(255, 255, 255) 150%);
					background-image: -webkit-linear-gradient(-60deg, #3cb371 55%, rgb(255, 255, 255) 150%);
					background-image: -ms-linear-gradient(-60deg, #3cb371 55%, rgb(255, 255, 255) 150%);
					background-image: linear-gradient(-60deg, #3cb371 55%, rgb(255, 255, 255) 150%);
				}
			}

			.next-block, .lang-block {
				-webkit-box-shadow: 0px 1px 2px 0px rgb(187 187 187 / 72%);
				-moz-box-shadow: 0px 1px 2px 0px rgb(187 187 187 / 72%);
				box-shadow: 0px 1px 2px 0px rgb(187 187 187 / 72%);
				font-size: 16px;
				color: #000;
				background: #ffffff;
				border-radius: 50px;
				padding: 15px 30px;
				cursor: pointer;
			}

			.next-block {
				display: flex;
				justify-content: space-between;
				align-items: center;
				color: $fontColor;
				background-image: -moz-linear-gradient(-60deg, #3cb371 55%, rgb(255, 255, 255) 150%);
				background-image: -webkit-linear-gradient(-60deg, #3cb371 55%, rgb(255, 255, 255) 150%);
				background-image: -ms-linear-gradient(-60deg, #3cb371 55%, rgb(255, 255, 255) 150%);
				background-image: linear-gradient(-60deg, #3cb371 55%, rgb(255, 255, 255) 150%);
				border-style: solid;
				border-width: 1px;
				border-color: rgb(204, 204, 204);
				-webkit-box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.25);
				-moz-box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.25);
				box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.25);
				
				>img {width: 8px;}
				&:hover {
					color: $fontColor;
					background-image: -moz-linear-gradient(-60deg, #339860 55%, rgb(255, 255, 255) 150%);
					background-image: -webkit-linear-gradient(-60deg, #339860 55%, rgb(255, 255, 255) 150%);
					background-image: -ms-linear-gradient(-60deg, #339860 55%, rgb(255, 255, 255) 150%);
					background-image: linear-gradient(-60deg, #339860 55%, rgb(255, 255, 255) 150%);
				}
			}
		}
	}
</style>