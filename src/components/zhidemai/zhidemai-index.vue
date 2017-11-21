<template>
	<div id="zhidemai-index">
		<div class="top">
			<x-header title='值得买' :left-options='{showBack:false}'></x-header>
		</div>
		<div class="detailDown"></div>

		<div class="banner">
			<ul>
				<li><img src="../../assets/zhidemai/20yuan@2x.png" width="100%"></li>
				<li><img src="../../assets/zhidemai/renqi@2x.png" width="100%"></li>
			</ul>
		</div>

		<ul class="icons">
			<li><img src="../../assets/zhidemai/category_1_c@2x.png" width="50" @click='tapIcon(0)'></li>
			<li><img src="../../assets/zhidemai/category_2_c@2x.png" width="50" @click='tapIcon(1)'></li>
			<li><img src="../../assets/zhidemai/category_3_c@2x.png" width="50" @click='tapIcon(2)'></li>
			<li><img src="../../assets/zhidemai/category_4_c@2x.png" width="50" @click='tapIcon(3)'></li>
			<li><img src="../../assets/zhidemai/category_5_c@2x.png" width="50" @click='tapIcon(4)'></li>
		</ul>
		
		<div class="spinner" v-if='load'>
			<spinner type='ios' size='50px'></spinner>
		</div>
		

		<div class="contain">
			<!--左列-->
			<div class="list">
				<div class="imgbox" v-for='img in larr'>
					<img :src="img.pic_url" width="100%" @click='tap(img.url,img.title)'>
					<p class="item_title">{{img.title}}</p>

					<div class="bottom">
						<ul class="status">
							<li class="num now_price">￥{{img.now_price}}</li>
							<li class="num origin_price">￥{{img.origin_price}}</li>
							<li class="num baoyou">包邮</li>
						</ul>
					</div>
				</div>
			</div>

			<!--右列-->
			<div class="list">
				<div class="imgbox" v-for='img in rarr'>
						<img :src="img.pic_url" width="100%" @click='tap(img.url,img.title)'>
						<p class="item_title">{{img.title}}</p>
					<div class="bottom">
						<ul class="status">
							<li class="num now_price">￥{{img.now_price}}</li>
							<li class="num origin_price">￥{{img.origin_price}}</li>
							<li class="num baoyou">包邮</li>
						</ul>
					</div>
				</div>
			</div>
		</div>

		<!-- <img :src="'../../assets/zhidemai/category_'+i+'_c@2x.png'" v-for='i in 11' width="10%;" @click='tap'> -->

		<Bottom></Bottom>
	</div>
</template>

<script>
	import Bottom from '../Bottom'
	import collectionView from '../Meida/collectionView'
	import {
		XHeader,
		Scroller,
		Spinner
	} from 'vux'

	import axios from 'axios'

	export default{
		data(){
			return{
				load:false,
				larr:[],
				rarr:[]
			}
		},
		components:{
			Bottom,
			collectionView,
			XHeader,
			Scroller,
			Spinner
		},
		mounted(){
			var myDate=new Date();

			if(localStorage.data==null){
				this.getData();
				
			}else{
				//判断过期
				if(myDate.getTime()>JSON.parse(localStorage.data).date){
					this.getData();
				}else{
					this.show();
				}
			}
			
		},
		methods:{
			tap:function(url,title){
				this.$router.push({path:'/webView',query:{url:url,title:title}});
			},
			tapIcon:function(id){
				this.getData(id);
			},
			show:function(){
				this.larr=[];
				this.rarr=[];
				var list=JSON.parse(localStorage.data).value;
				for(var i in list){
					if(i%2!=0){
						this.rarr.push(list[i]);
					}else{
						this.larr.push(list[i]);
					}
				}
				this.load=false
			},
			getData:function(id){
				this.load=true;//加载
				var myDate=new Date();
				axios.get('http://zhekou.yijia.com/jkjby/view/tmzk19_9_api.php?cid='+id)
				.then((msg)=>{
					console.log(msg.data.list)
					//预设有效期
					var date=myDate.getTime()+(60*1000)*30;
					//缓存数据
					localStorage.removeItem('data');
					localStorage.data=JSON.stringify({value:msg.data.list,date:date});

					this.show();
				})
				.catch(function(error){
					alert(error)
				})
			}
		}
	}
</script>

<style scoped>

	.spinner{
		width: 100%;
		margin: 0 auto;
		text-align: center;
	}
	
	.banner li{
		float: left;
		list-style: none;
		width: 50%;
	}

	.icons li{
		padding: 0 2px 0 4px;
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
		width: 32%;
	}

	.num{
		font-size: 12px;
		line-height: 30px;
	}
	
	.now_price{color: #d4237a;}
	.origin_price{
		text-decoration: line-through;
		color:gray;
	}
	.baoyou{
		position: relative;
		right: -20px;
		color:gray;
	}

	.item_title{
		font-size: 12px;
	}
</style>






