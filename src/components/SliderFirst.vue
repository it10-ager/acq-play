<template>
	<div class="main-slider">
		<div class="slides">
			<!------1------>
			<div class="slide" :class="{ active: activeBlock === 1 }">
				<div class="text-center title">Найди любовь играя!</div>
				<div class="img-slide">
					<img src="../assets/img/presentpage/Музыка-(Интересы).gif" alt="girl">
					<img src="../assets/img/presentpage/Сноубордист2-(Интересы).gif" alt="boy">
				</div>
			</div>
			
			<!------2------>
			<div class="slide" :class="{ active: activeBlock === 2 }">
				<div class="text-center title">Прокачай психологию!</div>
				<div class="img-slide">
					<img src="../assets/img/presentpage/Девушка-(Психология).gif" alt="girl">
					<img src="../assets/img/presentpage/Парень-(Психология).gif" alt="boy">
				</div>
			</div>

			<!------3------>
			<div class="slide" :class="{ active: activeBlock === 3 }">
				<div class="text-center title">Знакомься по новому!</div>
				<div class="img-slide">
					<img src="../assets/img/presentpage/Приветливая-(границы).gif" alt="girl">
					<img src="../assets/img/presentpage/Приветливый-(границы).gif" alt="boy">
				</div>
			</div>

			<!------4------>
			<div class="slide" :class="{ active: activeBlock === 4 }">
				<div class="text-center title">По всему миру!</div>
				<div class="img-slide">
					<img src="../assets/img/presentpage/Девушка-(Иностранка).gif" alt="girl">
					<img src="../assets/img/presentpage/Парень-(Иностранец).gif" alt="boy">
				</div>
			</div>

			<!------5------>
			<div class="slide" :class="{ active: activeBlock === 5 }">
				<div class="text-center title">Крепкие отношения!</div>
				<div class="img-slide">
					<img src="../assets/img/presentpage/Пара-(Отношения).gif" alt="together">
				</div>
			</div>

			<!------6------>
			<div class="slide" :class="{ active: activeBlock === 6 }">
				
				<div class="text-center title">Без условностей!</div>
				<div class="img-slide">
					<img src="../assets/img/presentpage/Девушка-3(Обсуждения).gif" alt="girl">
					<img src="../assets/img/presentpage/Парень-(Обсуждения).gif" alt="boy">
				</div>
			</div>
			
			<!------7------>
			<div class="slide" :class="{ active: activeBlock === 7 }">
				
				<div class="text-center title">Без пошлостей!</div>
				<div class="img-slide">
					<img src="../assets/img/presentpage/Стриптизерша-(пошлости).gif" alt="girl">
					<img src="../assets/img/presentpage/Курильщик-(пошлости).gif" alt="boy">
				</div>
			</div>

			<!------8------>
			<div class="slide" :class="{ active: activeBlock === 8 }">
				
				<div class="text-center title">Без скуки!</div>
				<div class="img-slide">
					<img src="../assets/img/presentpage/Девушка-(Скука).gif" alt="girl">
					<img src="../assets/img/presentpage/Парень-(Скука).gif" alt="boy">
				</div>
			</div>

			<!------9------>
			<div class="slide" :class="{ active: activeBlock === 9 }">
				<div class="img-slide">
					<img src="../assets/img/presentpage/Пара-(Отношения).gif" alt="pickout">
				</div>
			</div>
		</div>

		<div class="dot-btn">
			<span class="dot" :class="{ active: activeBlock === 1 }" @click="activeDot(1)"></span>
			<span class="dot" :class="{ active: activeBlock === 2 }" @click="activeDot(2)"></span>
			<span class="dot" :class="{ active: activeBlock === 3 }" @click="activeDot(3)"></span>
			<span class="dot" :class="{ active: activeBlock === 4 }" @click="activeDot(4)"></span>
			<span class="dot" :class="{ active: activeBlock === 5 }" @click="activeDot(5)"></span>
			<span class="dot" :class="{ active: activeBlock === 6 }" @click="activeDot(6)"></span>
			<span class="dot" :class="{ active: activeBlock === 7 }" @click="activeDot(7)"></span>
			<span class="dot" :class="{ active: activeBlock === 8 }" @click="activeDot(8)"></span>
			<span class="dot" :class="{ active: activeBlock === 9 }" @click="activeDot(9)"></span>
		</div>
	</div>
</template>
  
<script>
	export default {
		name: 'SliderFirst',
		data() {
			return {activeBlock: 1}
		},
		methods: {
			activeDot(tab) {this.activeBlock = tab;}
		}
	}
</script>

<style scoped lang="scss">
	@import "../assets/extend";
	@import "../assets/vars";

	.main-slider{
		margin-bottom: 6%;
		display: flex;
		justify-content: space-between;
		align-items: flex-end;
		max-width: inherit;

		.slides{
			width: 100%;
			.slide{
				opacity: 0;
				transition: opacity 0.5s ease;
				display: none;

				&.active{
					display: block;
					opacity: 1;
				}

				.title {
					@extend %titleFont;
					margin: 5% 0 2%;
				}

				.img-slide{
					display: flex;
					justify-content: center;
					>img{height: 200px;}
				}

				&:last-of-type{margin-top: 19%;}
			}
		}

		.dot-btn{
			display: flex;
			flex-direction: column;

			.dot{
				width: 9px;
				height: 9px;
				background-color: #fff;
				border-radius: 50%;
				margin-bottom: 10px;
				cursor: pointer;
				&:hover{background-color: #59be86;}
				&.active{background-color: $bgMain;}
			}
		}
	}
</style>