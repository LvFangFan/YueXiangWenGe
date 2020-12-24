<template>
	<view class="lff_content" :class="themeType + '_bg_color'">
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				themeType:''
			};
		},
		onLoad() {
			this.themeType = this.config.getThemeType()
		},
		onReady() {
			const configInfo = uni.getStorageSync('configInfo')
			if(configInfo){
				console.log(configInfo)
				getApp().globalData.configInfo = configInfo
			}
			setTimeout(()=>{
				// this.config.setDarkTabBarStyle()
				uni.switchTab({
					url:'../home/home'
				})
			},1500)
		}
	}
</script>

<style lang="scss">

</style>
