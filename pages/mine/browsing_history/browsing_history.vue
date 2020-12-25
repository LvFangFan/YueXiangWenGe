<template>
	<view class="lff_content" :class="themeType + '_bg_color'">
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		onLoad() {
			this.config.setDarkNavBackground()
		},
		onReady() {
			this.common.setNavTextWay(this,'浏览记录')
		},
		
		computed:{
			themeType(){
				return this.config.getThemeType()
			}
		}
	}
</script>

<style lang="scss">

</style>
