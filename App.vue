<script>
	export default {
		onLaunch: function() {
			const langInfo = uni.getStorageSync('langInfo')
			if(langInfo){
				console.log(langInfo);
				this.$store.commit('setLangInfo',langInfo)
				this.$i18n.locale = langInfo.lang
			}
		},
		onShow: function() {
			
		},
		onHide: function() {
			
		}
	}
</script>

<style lang="scss">
	/* 注意要写在第一行，同时给style标签加入lang="scss"属性 */
	page{
		width: 100%;
		height: 100%;
	}
		@import "uview-ui/index.scss";
		@import "index.scss";
		@import "~@/config/style/theme/theme_skin.scss";
		.lff_content{
			width: 100%;
			min-height: 100%;
		}
		
</style>
