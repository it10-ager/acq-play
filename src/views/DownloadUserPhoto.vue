<template>
	<div class="user-container">
		<SliderSecond />
	
		<div class="buttons">
			<!--Download Block-->
			<b-row class="join" @click="activeNextBtn()">
				<b-col class="p-0">
					<div class="next-block photo-download">
						<span class="w-100 text-center">Загрузить фото</span>
						<img src="../assets/img/elements/arrows-11.png" alt="arrow-right">
					</div>
				</b-col>
			</b-row>

			<!--Main block to next page-->
			<b-row class="join next-page" @click="goToGuessImages()">
				<b-col class="p-0">
					<div class="next-block">
						<span class="w-100 text-center">Далее</span>
						<img src="../assets/img/elements/arrows-11.png" alt="arrow-right">
					</div>
				</b-col>
			</b-row>
		</div>
	</div>
</template>
  
<script>
	import SliderSecond from '../components/SliderSecond.vue';

	export default {
		name: 'DownloadUserPhoto',

		components: {
			SliderSecond,
		},

		data() {
			return {
				
			};
		},

		methods: {
			activeNextBtn(){
				var next = document.querySelector('.buttons .next-page');
				next.style.display = 'block';
			},

			goToGuessImages(){this.$router.push('/game');}
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
		position: relative;
		max-width: inherit;
		
		.buttons{
			.next-page{
				display: none;
				margin-bottom: 3%;
			}
			.join {
				@extend %widthNoPadding;
				.photo-download{margin-bottom: 3%;}
				.next-block {@extend %mainBtnNextPage;}
			}
		}
	}
</style>