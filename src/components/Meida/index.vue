<template>
	<div id="index">
		<div class="top">
			<!--导航-->
			<x-header class='xheader' :left-options='{showBack:false}'>美搭</x-header>
			<!--Tab标签页-->
			<tab>
				<tab-item selected @on-item-click='tap'>精选</tab-item>
				<tab-item @on-item-click='tap'>分类</tab-item>
				<tab-item @on-item-click='tap'>专题</tab-item>
				<tab-item @on-item-click='tap'>活动</tab-item>
			</tab>
		</div>

		<swiper v-model='index' ref='swiper' :show-dots='false'>
			<swiper-item>
				<jingxuan></jingxuan>
			</swiper-item>
			<swiper-item>
				<fenlei></fenlei>
			</swiper-item>
			<swiper-item>
				<zhuanti></zhuanti>
			</swiper-item>
			<swiper-item>
				
			</swiper-item>
		</swiper>

		<Bottom></Bottom>
	</div>
</template>

<script>
	import Bottom from '../Bottom'
	import jingxuan from './jingxuan'
	import fenlei from './fenlei'
	import zhuanti from './zhuanti'
	import {
		XHeader,
		Tab,
		TabItem,
		Swiper,
		SwiperItem
	} from 'vux'

	export default{
		data(){
			return{
				index:''
			}
		},
		components:{
			XHeader,
			Tab,
			TabItem,
			Swiper,
			SwiperItem,
			Bottom,
			jingxuan,
			fenlei,
			zhuanti
		},
		methods:{
			tap:function(index){
				this.index=index;

				this.$nextTick(()=>{
					switch(index){
						case 0 :
							this.$refs.swiper.xheight='4750px';
							break;
						case 1 :
							this.$refs.swiper.xheight='1830px';
							break;
						case 2 :
							this.$refs.swiper.xheight='3650px';
							break;
					}
				})
			}
		},
		mounted(){
			/*
				this.$nextTick
				获取更新后的DOM

				this.$refs.jx.xheight
				读取ref=jx的组件里data中的xheight属性
			*/
			this.$nextTick(()=>{
				this.$refs.swiper.xheight='4750px'
			})
		}
	}
</script>
