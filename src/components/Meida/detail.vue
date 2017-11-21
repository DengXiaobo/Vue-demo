<template>
	<div id="detail">
		<div class="top">
			<x-header>{{$route.query.title}}</x-header>
		</div>
		<div class="detailDown"></div>
		
		<collection-view></collection-view>
	</div>
</template>

<script>
	import collectionView from './collectionView'
	import {
		XHeader
	} from 'vux'
	export default{
		data(){
			return{
			}
		},
		components:{
			XHeader,
			collectionView
		}
	}
</script>