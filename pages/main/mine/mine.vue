<template>
	<view class="lff_content" :class="themeType + '_bg_color'">
		<view class="user_content_view" :class="themeType + '_bg_color'">
			<view class="user_top lf_column_a_f" :style="{opacity:themeType == 'dark' ? 0.75 : 1.0}">
				<image class="user_top_icon" src="/static/images/mine/head_portrait.png"></image>
				<text class="user_top_text">{{name}}</text>
			</view>
			<oneItem v-for="(item,index) in list" :key="index" :title="item.title" :desp="item.desp" @chooseClick="chooseWay"></oneItem>
		</view>
	</view>
	</view>
</template>

<script>
	import oneItem from '@/components/mine/one_item.vue'
	export default {
		components: {
			oneItem
		},
		data() {
			return {
				themeType:'',
				name: '悦享文阁',
				list: [{
						'title': '浏览记录',
						'desp': ''
					},{
						'title': '我的收藏',
						'desp': ''
					},{
						'title': '多语言',
						'desp': ''
					},
					{
						'title': '关于我们',
						'desp': ''
					}
				]
			};
		},
	onLoad() {
		this.themeType = this.config.getThemeType(this)
		this.config.setDarkTabAndNavBar(this)
	},
		onShow() {
			this.list[2].desp = this.$store.state.langInfo.language 
			this.list[3].desp = this.$t('版本') + this.$store.state.version 
			this.common.setNavTextWay(this,'我的')
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
					case '多语言':
						uni.navigateTo({
							url: '../../mine/language/language'
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
			height: 278rpx;
			background-color: $theme_color;
			border-radius: 10rpx 10rpx 0rpx 0rpx;

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
