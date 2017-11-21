<template>
	<div id="zhuanti">
		<div class="XheaderDown"></div>

		<div class="box" v-for='data in result'>
			<group-title>{{data.title}}</group-title>
			<grid :cols=3>
				<grid-item v-for='pic in data.data'>
					<img :src="pic" width="100%" height="100" @click='tap(data.col_album_id,data.title)'>
				</grid-item>
			</grid>
		</div>
		
	</div>
</template>

<script>
	import axios from 'axios'
	import {
		Grid,
		GridItem,
		GroupTitle
	} from 'vux'

	export default{
		data(){
			return{
				result:[]
			}
		},
		components:{
			Grid,
			GridItem,
			GroupTitle
		},
		mounted(){
			axios.get('http://app.api.repaiapp.com/sx/yangshijie/jiekou/taonvlang/taonvlang_json.php?app_id=141273368&app_oid=11baea23eedc88f48cf9768919605cbd7bc1831c&app_dtoken=(null)&app_version=3.1.6&app_channel=appstore&sche=aidapei')
			.then((data)=>{
				this.result=data.data;
				console.log(this.result);
			})
			.catch((error)=>{
				alert(error);
			})
		},
		methods:{
			tap:function(id,title){
				axios.get('http://app.api.repaiapp.com/sx/yangshijie/jiekou/taonvlang/taonvlang_json.php?app_id=141273368&app_oid=11baea23eedc88f48cf9768919605cbd7bc1831c&app_dtoken=(null)&app_version=3.1.6&app_channel=appstore&sche=aidapei&col_album_id='+id)
				.then((data)=>{
					this.data=data.data.data;
					this.$router.push({path:'/detail',query:{title:title,data:this.data}});
				})
				.catch((error)=>{
					alert(error);
				})
			}
		}
	}
</script>

<style scoped>
	.weui-grid{
		padding: 0 3px 0 3px !important;
	}
</style>



