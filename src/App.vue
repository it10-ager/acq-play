<template>
	<div id="app">
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
		height: 100%;
	}

	body {font-family: 'Myriad Pro', sans-serif!important;}

	#app {
		margin: 0 auto!important;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		max-width: 425px;
	}
</style>
