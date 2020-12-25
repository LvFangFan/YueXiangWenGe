<template>
	<view class="lff_content" :class="themeType + '_bg_color'">
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				isDart:false,
				themeType:''
			};
		},
		onLoad() {
			this.isDart = getApp().globalData.configInfo.isDark
			this.config.setDarkTabBarStyle()
			this.setPageStyle()
			uni.$on('changeDark',(data) =>{
				this.setPageStyle()
				// this.$forceUpdate()
			})
		},
		onShow() {
			this.common.setNavTextWay(this,'首页')
			uni.setTabBarItem({
				index: 0,
				text: this.$t('首页'),
				"iconPath": "static/images/main/home_normal.png",
				"selectedIconPath": "static/images/main/home_active.png"
			})
			uni.setTabBarItem({
				index: 1,
				text: this.$t('我的'),
				"iconPath": "static/images/main/mine_normal.png",
				"selectedIconPath": "static/images/main/mine_active.png"
			})
		},
		onUnload() {
			uni.$off('changeDark')
		},
		methods:{
			setPageStyle(){
				this.config.setDarkNavBackground()
				this.themeType = this.config.getThemeType()
			}
		}
	}
</script>

<style lang="scss">

</style>
