<template>
	<view class="lff_content" :class="themeType + '_bg_color'">
		<one-row-item :themeType="themeType" v-for="(item,index) in list" :key="index" :title="item.title" :desp="item.desp"
		 :switchShow="index === 0" :rightShow="item.arrow" @chooseClick="chooseWay" @switchChange="switchChangeWay"></one-row-item>
	</view>
</template>

<script>
	import oneRowItem from '@/components/mine/one_row_item.vue'
	export default {
		components: {
			oneRowItem
		},
		data() {
			return {
				isDark: false,
				list: [{
						'title': '夜间模式',
						'desp': '',
						'arrow': false
					},
					{
						'title': '多语言',
						'desp': '',
						'arrow': true
					},
					{
						'title': '主题',
						'desp': '主题1',
						'arrow': true
					},
					{
						'title': '字体大小',
						'desp': '32',
						'arrow': true
					}
				]
			};
		},
		onLoad() {
			this.isDark = getApp().globalData.configInfo.isDark
			this.config.setDarkNavBackground()
		},
		onReady() {
			this.common.setNavTextWay(this, '设置')
		},

		computed: {
			themeType() {
				return this.config.getThemeType(this.isDark)
			}
		},
		methods: {
			// 点击某一列响应方法 title 为列表文字标识
			chooseWay(title) {
				switch (title) {
					case '多语言':
						uni.navigateTo({
							url: '../language/language'
						})
						break;
					case '主题':
						break;
					default:
						break;
				}
			},
			switchChangeWay(bool) {
				this.isDark = bool
				getApp().globalData.configInfo.isDark = bool
				this.config.setDarkTabBarStyle()
				this.config.setDarkNavBackground()
			}
		}
	}
</script>

<style lang="scss">

</style>
