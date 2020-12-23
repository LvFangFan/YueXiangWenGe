<!-- 我的页面列表项组件 -->

<template>
	<view :class="themeType + '_box_bg_color'" @click="clickWay">
		<view class="user_list_item lf_row_a_f " :style="{'padding-right':arrowShow ? '0rpx' : '44rpx'}">
			<text class="user_list_item_title">{{$t(title)}}</text>
			<view class="user_list_item_right lf_row_a_f">
				<text class="user_list_item_right_desp">{{desp}}</text>
				<u-icon v-if="arrowShow" class="user_list_item_right_arrow" name="arrow-right"></u-icon>
			</view>
		</view>
		<view v-if="lineShow" class="user_list_line" :class="themeType + '_box_line_color'"></view>
	</view>
</template>

<script>
	export default {
		name:'one_item',
		props:{
			title:{
				type:String,default:''
			},//标题
			desp:{
			  type:String,default:''
			},//描述
			arrowShow:{
				type:Boolean,default:true
			},//箭头是否显示
			lineShow:{
				type:Boolean,default:true
				},//分割线是否显示
		},
		data(){
			return {
				themeType:''
			}
		},
		created() {
			this.themeType =  this.config.getThemeType(this)
		},
		methods:{
			clickWay(){
				this.$emit('chooseClick',this.title)
			}
		}
	}
</script>

<style lang="scss">
	@import '~@/config/style/config.scss';
	.user_list {
		&_item {
			height: 98rpx;
			justify-content: space-between;
			font-weight: 400;
	
			&_title {
				margin-left: 44rpx;
				font-size: 28rpx;
				color: $one_font_color;
			}
	
			&_right_desp {
				font-size: 24rpx;
				color: $three_line_color;
			}
	
			&_right_arrow {
				width: 30rpx;
				height: 30rpx;
				margin: 20rpx;
				color: $three_line_color;
			}
		}
		&_line{
			margin: 0rpx 20rpx 0rpx 18rpx;
			height: 1rpx;
		}
	}
</style>
