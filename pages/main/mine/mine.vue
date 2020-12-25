<template>
	<view class="lff_content" :class="themeType + '_bg_color'">
		<view class="user_content_view" :class="themeType + '_bg_color'">
			<view class="user_top lf_column_a_f" :style="{opacity:themeType == 'dark' ? 0.75 : 1.0}">
				<image class="user_top_icon" src="/static/images/mine/head_portrait.png"></image>
				<text class="user_top_text">{{name}}</text>
				<image class="dark_image" :src="darkImgUrl" @click="changeDarkWay"></image>
			</view>
			<two-row-item ref="rowItemRef" iconType="1" :iconName="item.iconName" v-for="(item,index) in list" :key="index"
			 :title="item.title" :desp="item.desp"  @chooseClick="chooseWay" ></two-row-item>
		</view>
	</view>
	</view>
</template>

<script>
	import twoRowItem from '@/components/mine/two_row_item.vue'
	export default {
		components: {
			twoRowItem
		},
		data() {
			return {
				themeType: '',
				name: '悦享文阁',
				isDart: false,
				list: [{
						iconName:'clock',
						title: '浏览记录',
						desp: ''
					}, {
						iconName:'heart',
						title: '我的收藏',
						desp: ''
					}, {
						iconName:'setting',
						title: '设置',
						desp: ''
					},
					{   iconName:'account',
						title: '关于我们',
						desp: ''
					}
				]
			};
		},
		onLoad() {
			this.setPageStyle()
		},

		onShow() {
			this.list[3].desp = this.$t('版本号') + this.$store.state.version
			this.common.setNavTextWay(this, '我的')
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
		// 
		onHide() {
			uni.$off('changeDark')
		},
		computed:{
			darkImgUrl(){
				return this.isDart ? '/static/images/mine/white_evening.png' : '/static/images/mine/white_day.png'
			}
		},
		
		methods: {
			// 点击某一列响应方法 title 为列表文字标识
			chooseWay(title) {
				switch (title) {
					case '浏览记录':
						uni.navigateTo({
							url: '../../mine/browsing_history/browsing_history'
						})
						break;
					case '我的收藏':
						uni.navigateTo({
							url: '../../mine/my_collection/my_collection'
						})
						break;
					case '设置':
						uni.navigateTo({
							url: '../../mine/setting/setting'
						})
						break;
					case '关于我们':
						uni.navigateTo({
							url: '../../mine/about_us/about_us'
						})
						break;
					default:

						break;
				}
			},
			changeDarkWay() {
				this.isDark = !this.isDark
				getApp().globalData.configInfo.isDark = this.isDark
				this.setPageStyle()
				for (let i = 0; i < this.list.length; i++) {
					this.$refs.rowItemRef[i].setViewStyle()
				}
				uni.$emit('changeDark', this.isDark)
				// const infos = getApp().globalData.configInfo
				// uni.setStorageSync('configInfo',getApp().globalData.configInfo)
				// uni.reLaunch({
				// 	url:'../main/main'
				// })
			},
			// 设置页面样式
			setPageStyle() {
				this.themeType = this.config.getThemeType()
				this.isDart = getApp().globalData.configInfo.isDark
				this.config.setDarkTabBarStyle()
				this.config.setDarkNavBackground()
				// this.config.setBackgroundColor()
			}
		}
	}
</script>

<style lang="scss">
	@import '~@/config/style/config.scss';

	.user_content_view {
		width: calc(100% - 50rpx);
		margin: 0 25rpx;
		padding: 100rpx 0rpx;
		border-radius: 10rpx;

		.user_top {
			position: relative;
			height: 278rpx;
			background-color: $theme_color;
			border-radius: 10rpx 10rpx 0rpx 0rpx;
			.dark_image{
				position: absolute;
				top: 20rpx;
				right: 20rpx;
				width: 60rpx;
				height: 60rpx;
			}
			&_icon {
				margin-top: -49rpx;
				width: 140rpx;
				height: 140rpx;
				margin-bottom: 20rpx;
			}

			&_text {
				font-weight: 400;
				font-size: 28rpx;
				color: #FFFFFF;
			}
		}
	}
</style>
