<template>
  <div id="app">
  	<link rel="stylesheet" href="http://at.alicdn.com/t/font_470169_v5jd95iro58w7b9.css">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';

*{margin: 0;padding: 0}
body {
  background-color: #fbf9fe;
}

/*固定导航条*/
.top{
	position: fixed;
	top: 0;
	width: 100%;
	z-index: 112;
}

.XheaderDown{
	padding-top: 90px;
}

.detailDown{
  padding-top: 45px;
}
</style>
