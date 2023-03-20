<template>
	<div class="user-container">
		
		<div class="users-photos-first">
			<div class="another-photos">
				<div>
					<img src="../assets/img/background/around_user.png" alt="user">
				</div>
				<div>
					<img src="../assets/img/background/around_user.png" alt="user">
				</div>
			</div>
			<div class="main-photo">
				<img src="../assets/img/background/around_user.png" alt="user">
			</div>
		</div>

		<!--Main block to next page-->
		<b-row class="search d-flex justify-content-center my-2">
			<b-col>
				<div class="next-block">
					<span class="w-100 text-center">Расширенный поиск</span>
					<img src="../assets/img/elements/arrows-11.png" alt="arrow-right">
				</div>
			</b-col>
		</b-row>

		<MenuBlock />
	</div>
</template>

<script>
	import MenuBlock from '../components/MenuBlock.vue';

	export default {
		name: 'Around',

		components: {
			MenuBlock,
		},

		data() {
			return {
				
			};
		},

		computed: {
			
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
		
		.users-photos-first{
			display: flex;
			justify-content: space-between;
			margin-bottom: 40px;

			.another-photos{
				display: flex;
				flex-direction: column;
				margin-right: 10px;
				justify-content: space-between;
				
				>div{
					width: 91px;
					>img{
						width: inherit;
						border-radius: 8px;
					}
				}
			}

			.main-photo{
				width: 80%;
				>img{
					width: inherit;
					border-radius: 8px;
				}
			}
		}

		.search{
			.next-block {@extend %mainBtnNextPage;}
		}
	}
</style>