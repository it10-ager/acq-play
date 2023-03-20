<template>
	<div class="user-container">
		<!--Title for page-->
		<div class="text-center title">Загрузите 1 фото!</div>

		

		<!--Download Block-->
		<b-row class="join d-flex justify-content-center my-2">
			<b-col>
				<div class="next-block photo-download">
					<span class="w-100 text-center">Загрузить фото</span>
					<img src="../assets/img/elements/arrows-11.png" alt="arrow-right">
				</div>
			</b-col>
		</b-row>

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
		name: 'DownloadUserPhoto',
		data() {
			return {
				
			};
		},
	};
</script>
  
<style scoped lang="scss">
	@import '../assets/extend';
	@import '../assets/vars';

	.user-container {
		@extend %mainWrapper;
		font-size: 18px;
	
		.title {
			@extend %titleFont;
			font-size: 38px;
		}

		.join {
			.photo-download{margin-bottom: 20px;}
			.next-block {@extend %mainBtnNextPage;}
		}
	}
</style>