<template>
	<div id="Bottom">
		<tabbar class='tabbar'>
			<tabbar-item selected link='/'>
				<span slot='label'>美搭</span>
			</tabbar-item>

			<tabbar-item link='/zhidemai'>
				<span slot='label'>值得买</span>
			</tabbar-item>

			<tabbar-item>
				<span slot='label'>发现</span>
			</tabbar-item>

			<tabbar-item link='/me'>
				<span slot='label'>我的</span>
			</tabbar-item>
		</tabbar>

	</div>
</template>

<script>
	import {
		Tabbar,
		TabbarItem
	} from 'vux'
	export default{
		data(){
			return{

			}
		},
		components:{
			Tabbar,
			TabbarItem
		}
	}
</script>

<style scoped>
	.tabbar{
		position: fixed;
	}
</style>







