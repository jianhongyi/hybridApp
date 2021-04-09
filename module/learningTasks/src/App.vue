<template>
  <div id="app" >
    <router-view></router-view>
  </div>
</template>

<style lang="less" scoped>
	#app {
    height: 100%;
    background: inherit;
    overflow: scroll;
		.content-wrap{
			width: 100%;
			min-height: 100vh;
		}
  }
  #app::-webkit-scrollbar {
    width: 0 !important;
    display: none !important;
  }
</style>
