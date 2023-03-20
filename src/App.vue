<template>
	<div id="app">
		<!--bg img-->
		<!-- <div class="bg-image"></div> -->
		<!-- <nav>
			<router-link to="/">Home</router-link> |
			<router-link to="/about">About</router-link>
		</nav> -->
		<router-view />
	</div>
</template>

<script>
	
</script>


<style lang="scss">
	@import './assets/vars';
	@import './assets/extend';

	@font-face {
		font-family: 'Myriad Pro';
		src: url('./assets/fonts/MyriadPro-Regular.ttf') format('truetype');
		font-weight: normal;
		font-style: normal;
	}

	html, body{
		min-height: 100%!important;
	}

	body {
		font-family: 'Myriad Pro', sans-serif!important;
		background-image: url(./assets/img/background/Fon-3.png);
		background-size: cover;
		background-repeat: no-repeat;
	}

	#app {
		margin: auto!important;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		max-width: 425px;
		position: relative;
		min-height: 100%;

		/* .bg-image {
			position: absolute;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
			background-image: url(./assets/img/background/Fon-3.png);
			background-size: cover;
			z-index: -1;
		} */
	}
</style>
