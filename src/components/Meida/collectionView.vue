<template>
	<div id="collectionView">
		<div class="contain">
			<!--左列-->
			<div class="list">
				<div class="imgbox" v-for='img in larr'>
					<img :src="img.picUrl" width="100%">
					<p class="item_title">{{img.item_title}}</p>

					<div class="bottom">
						<ul class="status">
							<li class="iconfont icon-shoucang"></li>
							<li class="num">{{img.favoryCount}}</li>
							<li class="iconfont icon-gouwuche"></li>
							<li class="num">{{img.badCount}}</li>
						</ul>
					</div>
				</div>
			</div>

			<!--右列-->
			<div class="list">
				<div class="imgbox" v-for='img in rarr'>
						<img :src="img.picUrl" width="100%">
						<p class="item_title">{{img.item_title}}</p>
					<div class="bottom">
						<ul class="status">
							<li class="iconfont icon-shoucang"></li>
							<li class="num">{{img.favoryCount}}</li>
							<li class="iconfont icon-gouwuche"></li>
							<li class="num">{{img.badCount}}</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import axios from 'axios'
	import {XHeader} from 'vux'

	export default{
		data(){
			return{
				larr:[],
				rarr:[]
			}
		},
		mounted(){
			var list=this.$route.query.data;
			var l_arr=[];
			var r_arr=[];
			var l_height=0;
			var r_height=0;

			//根据高低差实现瀑布流
			for(var i in list){
				if(l_height==r_height){
					l_arr.push(list[i]);
					l_height+=Number(list[i].picHeight);
				}
				else if(l_height>r_height){
					r_arr.push(list[i]);
					r_height+=Number(list[i].picHeight);
				}
				else if(l_height<r_height){
					l_arr.push(list[i]);
					l_height+=Number(list[i].picHeight);
				}
			}

			this.larr=l_arr;
			this.rarr=r_arr;
		}
	}
</script>

<style scoped>
	.list{
		width: 48%;
		float: left;
		padding-left:4px;
	}

	li{
		float: left;
		list-style: none;
	}

	.bottom{
		height: 30px;
		width: 80%;
		margin: 0 auto;
		margin-top: -3px;
	}

	.status li{
		list-style: none;
		float: left;
		width: 25%;
	}

	.num{
		font-size: 15px;
		line-height: 30px;
	}

	.icon-shoucang,.icon-gouwuche{
		font-size: 15px;
		line-height: 30px;
	}

	.icon-shoucang{
		color: #d4237a;
	}

	.item_title{
		font-size: 12px;
	}
</style>