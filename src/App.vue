<template>
	<div id="app">
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
		src: url('./assets/fonts/MyriadPro-Regular.woff2') format('truetype');
		font-weight: normal;
		font-style: normal;
	}

	html, body{
		min-height: 100%!important;
	}

	body {
		font-family: 'Myriad Pro', sans-serif!important;
		background-image: url(./assets/img/background/photo_fon.jpg);
		background-repeat: repeat;
		background-size: cover;
	}

	#app {
		margin: auto!important;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		max-width: 540px;
		position: relative;
		min-height: 100%;
	}
</style>
