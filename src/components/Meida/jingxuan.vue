<template>
	<div id="jingxuan">
		<!--轮播-->
		<swiper :list='banner' auto :show-desc-mask='false' dots-position='center'  class='swiper' :aspect-ratio='400/1000'></swiper>
		<!--商品列表-->
		<div class="contain">
			<!--左列-->
			<div class="list">
				<div class="imgbox" v-for='img in larr'>
					<img :src="img.item_pic" width="100%" v-on:click='gotoNext(img.content_id)'>

					<div class="bottom">
						<ul class="status">
							<li class="iconfont icon-shoucang"></li>
							<li class="num">{{img.love}}</li>
							<li class="iconfont icon-gouwuche"></li>
							<li class="num">{{img.count_num}}</li>
						</ul>
					</div>
				</div>
			</div>

			<!--右列-->
			<div class="list">
				<div class="imgbox" v-for='img in rarr'>
						<img :src="img.item_pic" width="100%" v-on:click='gotoNext(img.content_id)'>
					<div class="bottom">
						<ul class="status">
							<li class="iconfont icon-shoucang"></li>
							<li class="num">{{img.love}}</li>
							<li class="iconfont icon-gouwuche"></li>
							<li class="num">{{img.count_num}}</li>
						</ul>
					</div>
				</div>
			</div>
		</div>

	</div>
</template>

<script>
	import {
		Swiper
	} from 'vux'
	import axios from 'axios'

	export default{
		data(){
			return{
				banner:[],
				larr:[],
				rarr:[]
			}
		},
		components:{
			Swiper
		},
		mounted(){
			//取banner图
			axios.get('http://cloud.yijia.com/yunying/zhuanti.php?app_id=141273368&app_oid=11baea23eedc88f48cf9768919605cbd7bc1831c&app_dtoken=(null)&app_version=3.1.6&app_channel=appstore&sche=aidapei')
			.then((result)=>{
				var list=result.data.data;
				for(var i in list){
					this.banner.push({
						img:list[i].iphoneimg
					});
				}
			})

			//取精选图
			axios.get('http://app.api.repaiapp.com/sx/yangshijie/jiekou/zuimei_jingxuan/zuimei_jingxuan_json.php?app_id=141273368&app_oid=28f0a1ca67a5c8025961a2ab667e0c563aacd06d&app_dtoken=(null)&app_version=3.1.6&app_channel=appstore&sche=aidapei&page=4')
			.then((result)=>{
				var list=result.data;
				var l_arr=[];
				var r_arr=[];
				var l_height=0;
				var r_height=0;

				//根据高低差实现瀑布流
				for(var i in list){
					if(l_height==r_height){
						l_arr.push(list[i]);
						l_height+=Number(list[i].height);
					}
					else if(l_height>r_height){
						r_arr.push(list[i]);
						r_height+=Number(list[i].height);
					}
					else if(l_height<r_height){
						l_arr.push(list[i]);
						l_height+=Number(list[i].height);
					}
				}

				this.larr=l_arr;
				this.rarr=r_arr;
			})
			.catch(function(erro){
				alert(erro);
			})
		},
		methods:{
			//将值传入dapeixinxi
			gotoNext:function(imgID){
				axios.get('http://app.api.repaiapp.com/sx/yangshijie/jiekou/zuimei_jingxuan/zuimei_jingxuan_json.php?&content_id='+imgID)
				.then((value)=>{
					this.$router.push({path:'/dapeixinxi',query:{obj:value.data}});
				})
				.catch(function(erro){
					alert(erro);
				})
			}
		}
	}
</script>

<style scoped>
	.swiper{
		padding-top:90px;
	}

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
</style>