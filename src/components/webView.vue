<template>
	<div id="webView">
		<div class="top">
			<x-header :title='$route.query.title'></x-header>
		</div>
		<div class="detailDown"></div>

		<iframe :src="$route.query.url" frameborder="0" class="iframe"></iframe>
		
	</div>
</template>

<script>
	import {
		XHeader
	} from 'vux'
	export default{
		mounted(){
			document.getElementsByTagName('iframe')[0].style.height=window.innerHeight+'px';
		},
		components:{
			XHeader
		}
	}
</script>