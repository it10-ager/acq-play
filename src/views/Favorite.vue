<template>
	<div class="dialog-container">
		
		<div class="registration">
			<span :class="{ active: isActive === 'all' }" @click="allDialogs('all')">Все</span>
			<span :class="{ active: isActive === 'chat' }" @click=" chatDialog('chat')">Чаты</span>
			<span :class="{ active: isActive === 'favorite' }" @click=" favoriteDialog('favorite')">Избранное</span>
		</div>

		<div class="user-info">
			<div class="avatar-title">
				<div class="avatar">
					<img src="../assets/img/elements/user_avatar.png" alt="user">
				</div>

				<!---->
				<div class="title">
					<span>Марина, 27</span>
					<span>Москва</span>
					<span>Вы угадали 24.05.17 | Вас не отгадали</span>
					<span @click="goToMessage">1 новое сообщение 18:37, 25.05.17</span>
				</div>
			</div>

			<!---->
			<div class="favorite-trash">
				<div>
					<img src="../assets/img/elements/star_green.png" alt="star">
				</div>
			</div>
		</div>

		<!---->
		<div class="user-info">
			<div class="avatar-title">
				<div class="avatar">
					<img src="../assets/img/elements/user_avatar.png" alt="user">
				</div>

				<!---->
				<div class="title">
					<span>Марина, 27</span>
					<span>Москва</span>
					<span>Вы угадали 24.05.17 | Вас не отгадали</span>
					<span>Последнее сообщение 17:20, 19.05.17</span>
				</div>
			</div>

			<!---->
			<div class="favorite-trash">
				<div>
					<img src="../assets/img/elements/star_green.png" alt="star">
				</div>
			</div>
		</div>

		<!---->
		<div class="user-info">
			<div class="avatar-title">
				<div class="avatar">
					<img src="../assets/img/elements/user_avatar.png" alt="user">
				</div>

				<!---->
				<div class="title">
					<span>Марина, 27</span>
					<span>Москва</span>
					<span>Вы угадали 24.05.17 | Вас не отгадали</span>
					<span>Последнее сообщение 17:20, 19.05.17</span>
				</div>
			</div>

			<!---->
			<div class="favorite-trash">
				<div>
					<img src="../assets/img/elements/star_green.png" alt="star">
				</div>
			</div>
		</div>

		<MenuBlock />
	</div>
</template>

<script>
	import MenuBlock from '../components/MenuBlock.vue';

	export default {
		name: 'Favorite',
		components: {
			MenuBlock,
		},

		data(){
			return{
				isActive: 'favorite',
			}
		},

		methods: {
			allDialogs(action) {
				this.isActive = action;
				this.$router.push('/dialog');
			},

			chatDialog(action) {
				this.isActive = action;
				this.$router.push('/chats');
			},

			favoriteDialog(action) {
				this.isActive = action;
				this.$router.push('/favorite-dialog');
			},

			goToMessage(){
				this.$router.push('/correspondence');
			}
		}
	};
</script>
  
<style scoped lang="scss">
	@import '../assets/extend';
	@import '../assets/vars';

	.dialog-container {
		@extend %mainWrapper;
		justify-content: flex-start;
		padding: 0;
		font-size: 18px;
		position: relative;
		max-width: inherit;

		.registration {
			display: flex;
			width: 90%;
			margin: 30px auto 20px;
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

			span {
				display: inline-block;
				text-align: center;
				cursor: pointer;
				width: 100%;

				&.active {
					padding: 12px 20px;
					@extend %activeBtnBlack;
				}
			}
		}

		.user-info {
			display: flex;
			justify-content: space-between;
			border-top: 1px solid #6dc695;
			border-bottom: 1px solid #6dc695;
			padding: 10px 0;
			width: 90%;
			margin: 0 auto;

			&:nth-child(3){border: 0;}

			&:nth-child(2){
				.avatar-title {
					.title {
						>span:last-of-type{
							color: #6dc695;
							text-decoration: underline;
							cursor: pointer;
						}
					}
				}
			}

			.avatar-title {
				display: flex;
				align-items: center;

				.avatar {
					width: 55px;
					height: 55px;

					>img {
						width: inherit;
					}

					margin-right: 8px;
					border-radius: 50%;

					@media screen and (min-width: 410px) {
						width: 70px;
						height: 70px;
					}
				}

				.title {
					display: flex;
					flex-direction: column;
					font-size: 11px;
					line-height: 14px;

					@media screen and (min-width: 410px) {
						font-size: 14px;
						line-height: 17px;
					}

					>span:first-of-type {
						font-size: 14px;
						font-weight: bold;
						margin-bottom: 2px;

						@media screen and (min-width: 410px) {
							font-size: 18px;
						}
					}

					>span:last-of-type {
						color: #b6b6b6;
					}
				}
			}

			.favorite-trash {
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: space-between;

				>div {
					width: 15px;

					&:first-of-type {
						width: 20px;

						@media screen and (min-width: 410px) {
							width: 23px;
						}
					}

					>img {
						width: inherit;
						cursor: pointer;
					}

					@media screen and (min-width: 410px) {
						width: 17px;
					}
				}
			}
		}
	}
</style>