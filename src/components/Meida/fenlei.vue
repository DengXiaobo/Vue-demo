<template>
	<div id="fenlei">
		<div class="XheaderDown"></div>
		<img src="../../assets/fengge.png" width="100%;">

		
		<div class="img">
			<img src="../../assets/style_01.png" alt="" width="100%;">
			<div class="l1"></div>
			<div class="l2"></div>
			<div class="r3"></div>
		</div>

		<div class="img">
			<img src="../../assets/style_02.png" alt="" width="100%;">
			<div class="l3"></div>
			<div class="r1"></div>
			<div class="r2"></div>
		</div>

		<div class="img">
			<img src="../../assets/style_03@2x.png" alt="" width="100%;">
			<div class="l1"></div>
			<div class="l2"></div>
			<div class="r3"></div>
		</div>

		<div class="img">
			<img src="../../assets/style_04@2x.png" alt="" width="100%;">
			<div class="l3"></div>
			<div class="r1"></div>
			<div class="r2"></div>
		</div>

		<div class="img">
			<img src="../../assets/style_05@2x.png" alt="" width="100%;">
			<div class="l1"></div>
			<div class="l2"></div>
			<div class="r3"></div>
		</div>

		<div class="img">
			<img src="../../assets/style_06@2x.png" alt="" width="100%;">
			<div class="l3"></div>
			<div class="r1"></div>
			<div class="r2"></div>
		</div>

		<div class="img">
			<img src="../../assets/style_07@2x.png" alt="" width="100%;">
			<div class="l1"></div>
			<div class="l2"></div>
			<div class="r3"></div>
		</div>

		<!--身形搭配-->

		<img src="../../assets/shenxing.png" width="100%;">

		<div class="img">
			<img src="../../assets/figure_01@2x.png" alt="" width="100%;">
			<div class="l3"></div>
			<div class="r1"></div>
			<div class="r2"></div>
		</div>

		<div class="img">
			<img src="../../assets/figure_02@2x.png" alt="" width="100%;">
			<div class="l1"></div>
			<div class="l2"></div>
			<div class="r3"></div>
		</div>

		<div class="img">
			<img src="../../assets/figure_03@2x.png" alt="" width="100%;">
			<div class="l3"></div>
			<div class="r1"></div>
			<div class="r2"></div>
		</div>
		



	</div>
</template>

<script>
	export default{
		data(){
			return{

			}
		},
		components:{

		},
		methods:{

		}
	}
</script>

<style scoped>
	.img{
		position: relative;
	}

	/*左二右一*/
	.l1{
		width: 45%;
		height: 45%;
		position: absolute;
		float: left;
		top: 0;
		left: 3%;
	}

	.l2{
		width: 45%;
		height: 45%;
		position: absolute;
		float: left;
		bottom: 5%;
		left: 3%;
	}

	.r3{
		width: 45%;
		height: 95%;
		position: absolute;
		float: right;
		top: 0;
		right: 3%;
	}

	/*左一右二*/

	.l3{
		width: 45%;
		height: 95%;
		position: absolute;
		float: left;
		top: 0;
		left: 3%;
	}

	.r1{
		width: 45%;
		height: 45%;
		position: absolute;
		float: right;
		top: 0;
		right: 3%;
	}

	.r2{
		width: 45%;
		height: 45%;
		position: absolute;
		float: right;
		bottom: 5%;
		right: 3%;
	}
</style>