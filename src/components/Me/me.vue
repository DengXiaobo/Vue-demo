<template>
	<div id="me">
		<div class="top">
			<x-header title='个人中心'></x-header>
		</div>
		<div class="detailDown"></div>

		<group>
			<cell title='登录淘宝' @click.native='login'>
				<img slot='icon' src="../../assets/Me/geren_00@2x.png" width="50%">
			</cell>
		</group>
		
		<group>
			<cell v-for='cell in cells_1' :title='cell' is-link></cell>
		</group>

		<group>
			<cell v-for='cell in cells_2' :title='cell' is-link></cell>
		</group>

		<group>
			<cell v-for='cell in cells_3' :title='cell' is-link></cell>
		</group>

		<Bottom style="padding-top: 50px"></Bottom>

		
	</div>
</template>

<script>
	import {
		XHeader,
		Group,
		Cell,
		CellBox
	} from 'vux'

	import Bottom from '../Bottom'

	export default{
		data(){
			return{
				cells_1:['我的订单','购物车','我的物流'],
				cells_2:['我的收藏','最近浏览','联系我们'],
				cells_3:['常见问题','商家报名','设置']
			}
		},
		components:{
			XHeader,
			Group,
			Cell,
			CellBox,
			Bottom
		},
		methods:{
			login:function(){
				this.$router.push({path:'/webView',query:{url:'http://h5.m.taobao.com/my/index.htm'}})
			}
		}
	}
</script>

<style scoped>
	#me{
		background-color: #e6e6e6;
	}
</style>