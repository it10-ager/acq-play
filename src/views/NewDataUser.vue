<template>
	<div class="new-data">
		<!--Title for page-->
		<div class="text-center title">Найди любовь играя!</div>

		<!--Main block to next page-->
		<b-row class="join d-flex justify-content-center my-2">
			<b-col>
				<div class="next-block" @click="checkEmailValidity()">
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
				
			}
		},

		methods: {
			
		},
	};
</script>

<style scoped lang="scss">
	@import '../assets/extend';
	@import '../assets/vars';

	.new-data {
		@extend %mainWrapper;
		font-size: 16px;
		.title {@extend %titleFont;}
	}
</style>