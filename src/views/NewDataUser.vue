<template>
	<div class="new-data">
		<!--Title for page-->
		<div class="text-center title">Найди любовь играя!</div>

		<input class="input-text" type="text" :placeholder="nameValue" v-model="text"
		:class="{ 'is-invalid': nameInvalid, 'is-valid': nameValid }" />

		<!--Main block to next page-->
		<b-row class="join d-flex justify-content-center my-2">
			<b-col>
				<div class="next-block" @click="check()">
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
    		}
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
	
		.input-text {
			border: 0;
			outline: none;
			padding: 15px 30px;
			border-radius: 50px;
			box-shadow: 0px 1px 2px 0px rgb(187 187 187 / 72%);
			text-align: left;
			margin-bottom: 30px;

			&.is-invalid {
				&::placeholder {
					color: $errorColor;
				}
			}
			&::placeholder {color: $placeholderColor;}
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