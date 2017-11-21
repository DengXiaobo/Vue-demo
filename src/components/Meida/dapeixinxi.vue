<template>
	<div id="dapeixinxi">
		<div class="top">
			<x-header title='搭配信息'></x-header>
		</div>
		<div class="detailDown"></div>

		<div class="contain">
			<img :src="$route.query.obj.item_pic" width="100%">
			<p class="tit">搭配单品链接:</p>
		</div>
		
		<group>
			<cell-box v-for='cell in cells' is-link @click.native='tap(cell.num_iid,cell.title)'>
				<img :src="cell.pic_url" :alt="cell.title" height="65">
				<div class="cell_box_contain">
					<p class="cell_title">{{cell.title}}</p>
					<p class="cell_pay">￥{{cell.price}}</p>
				</div>
			</cell-box>
		</group>

	</div>
</template>

<script>
	import axios from 'axios'
	import {
		XHeader,
		Group,
		CellBox
	} from 'vux'

	export default{
		data(){
			return{
				cells:[],
				url:'http://cloud.yijia.com/goto/item.php?app_id=141273368&app_oid=11baea23eedc88f48cf9768919605cbd7bc1831c&app_dtoken=(null)&app_version=3.1.6&app_channel=appstore&sche=aidapei&id='
			}
		},
		components:{
			XHeader,
			Group,
			CellBox
		},
		mounted(){
			console.log(this.$route.query.obj);
			this.cells=this.$route.query.obj.data;
		},
		methods:{
			tap:function(num_iid,title){
				this.url+=num_iid;
				this.$router.push({path:'/webView',query:{url:this.url,title:title}});
			}
		}
	}
</script>

<style scoped>
	.contain{
		width: 95%;
		margin: 0 auto;
	}

	.tit{
		font-size: 14px;
	}

	.cell_title{
		font-size: 12px;
	}

	.cell_pay{
		font-size: 12px;
		color: #d4237a;
	}

	.cell_box_contain{
		margin: 0 10px 0 10px;
	}
</style>







