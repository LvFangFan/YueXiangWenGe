<template>
	<view class="lf_column_a_f lff_content" :class="themeType + '_bg_color'">
		<image class="logo_icon" style="opacity: ;" :style="{opacity:themeType === 'dark' ? 0.5 : 1.0}"></image>
		<text class="version_num">{{versionText}}</text>
		<view class="us_content_view">
			<one-item v-for="(item,index) in list" :themeType="themeType" :key="index" :title="item.title" :desp="item.desp" :arrowShow="item.arrow" @chooseClick="chooseWay"></one-item>
		</view>
		<view class="us_desp lf_column_a_f">
			<text>Lv Fang Fan Develop </text>
			<text>lff-develop©2020</text>
		</view>
	</view>
</template>

<script>
	import oneItem from '@/components/mine/one_row_item.vue'
	export default {
		components:{
			oneItem
		},
		
		data() {
			return {
				versionText:'',
				list: [{
						'title': '联系电话',
						'desp': '158****0523',
						'arrow':false
					},
					{
						'title': '作者简介',
						'desp': '',
						'arrow':true
					},
					{
						'title': '意见反馈',
						'desp': '',
						'arrow':true
					},
					{
						'title': '版本号',
						'desp': '',
						'arrow':true
					}
				]
			};
		},
		onLoad() {
			this.config.setDarkNavBackground()
		},
		onReady() {
			this.common.setNavTextWay(this,'关于我们')
			this.versionText = this.$t('版本号') + this.$store.state.version 
		},
		computed:{
			themeType(){
				return this.config.getThemeType()
			}
		},
		methods:{
			// 点击某一列响应方法 title 为列表文字标识
			chooseWay(title){
				uni.showToast({
					icon:'none',
					title:'点击了'+ title
				})
				switch (title){
					case '客服电话':
						break;
					case '公司官网':
						break;
					case '版本号':
						break;
					default:
						break;
				}
			}
		}
	}
</script>

<style lang="scss">
	@import  '~@/config/style/config.scss';
	
	.logo_icon{
		margin: 127rpx 0rpx 45rpx 0rpx;
		width: 126rpx;
		height: 126rpx;
		border-radius: 20rpx;
		background-color: $theme_color;
	}
	.version_num{
		font-weight: 400;
		font-size: 28rpx;
		color: #818181;
	}
	.us_content_view{
		width: calc(100% - 52rpx);
		margin: 70rpx 28rpx 50rpx 24rpx;
		background-color: #FFFFFF;
		border-radius: 10rpx;
	}
	.us_desp{
		position: absolute;
		bottom: 70rpx;
		color: #BBBBBB;
		font-size: 20rpx;
	}
	
</style>
