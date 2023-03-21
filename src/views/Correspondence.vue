<template>
	<div class="user-container">
		<div class="navigation">
			<div class="back-page">
				<span>Вернуться к диалогам</span>
			</div>
			
			<div class="user-info">
				<div class="avatar-title">
					<div class="avatar">
						<img src="../assets/img/elements/user_avatar.png" alt="user">
					</div>
					<div class="title">
						<span>Марина, 27</span>
						<span>Москва</span>
						<span>Вы угадали 24.05.17 | Вас не отгадали</span>
						<span>Последнее сообщение 17:20, 19.05.17</span>
					</div>
				</div>
				
				<div class="favorite-trash">
					<div>
						<img src="../assets/img/elements/star.png" alt="star">
					</div>
					<div>
						<img src="../assets/img/elements/trash.png" alt="trash">
					</div>
				</div>
			</div>
		</div>
		


		<MenuBlockInput />
	</div>
</template>

<script>
	import MenuBlockInput from '../components/MenuBlockInput.vue';

	export default {
		name: 'Correspondence',
		components: {
			MenuBlockInput,
		},

		methods: {
			
		}
	};
</script>
  
<style scoped lang="scss">
	@import '../assets/extend';
	@import '../assets/vars';

	.user-container {
		@extend %mainWrapper;
		justify-content: flex-start;
		padding: 0;
		font-size: 18px;
		position: relative;
		max-width: 425px;

		.navigation{
			padding: 30px 20px 0;
			/* position: fixed;
			top: 0;
			right: 0;
			left: 0;
			max-width: inherit;
			margin: 0 auto;
			z-index: 10; */

			.back-page{
				font-size: 12px;
				padding-bottom: 10px;
				margin-bottom: 10px;
				border-bottom: 1px solid #6dc695;
				@media screen and (min-width: 410px){font-size: 14px;}
			}

			.user-info{
				display: flex;
				justify-content: space-between;
				border-bottom: 1px solid #6dc695;
				padding-bottom: 10px;

				.avatar-title{
					display: flex;
					align-items: center;

					.avatar{
						width: 55px;
						height: 55px;
						>img{width: inherit;}
						margin-right: 8px;
						border-radius: 50%;
						@media screen and (min-width: 410px){
							width: 70px;
							height: 70px;
						}
					}

					.title{
						display: flex;
						flex-direction: column;
						font-size: 11px;
						line-height: 14px;
						
						@media screen and (min-width: 410px){
							font-size: 14px;
							line-height: 17px;
						}

						>span:first-of-type{
							font-size: 14px;
							font-weight: bold;
							margin-bottom: 2px;
							@media screen and (min-width: 410px){font-size: 18px;}
						}

						>span:last-of-type{
							color: #b6b6b6;
						}
					}
				}

				.favorite-trash{
					display: flex;
					flex-direction: column;
					align-items: center;
					justify-content: space-between;

					>div{
						width: 15px;
						&:first-of-type{
							width: 20px;
							@media screen and (min-width: 410px){width: 23px;}
						}
						>img{
							width: inherit;
							cursor: pointer;
						}
						@media screen and (min-width: 410px){width: 17px;}
					}
				}
			}
		}

		/* .message-user {
			width: 85%;
			margin: 0 auto;

			.col-block{
				padding: 0!important;
				.next-block {
					@extend %mainBtnNextPage;
					margin-bottom: 20px
				}
			}
		} */

		

		
	}
</style>