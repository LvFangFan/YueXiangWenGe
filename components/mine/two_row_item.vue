<!-- 带图标的配置项组件 -->
<template>
	<view :class="themeType + '_box_bg_color'" @click="clickWay">
		<view class="user_list_item lf_row_a_f " :style="{'padding-right':arrowShow ? '0rpx' : '44rpx'}">
			<view class="lf_row_a_f">
				<view v-if="iconType" style="margin-right: 20rpx;">
					<u-icon v-if="iconType === '1'" :name="iconName" :color="iconColor"  :size="size"></u-icon>
					<image v-if="iconType === '2'" :style="iconStyle" :src="iconUrl"></image>
				</view>
				<text class="user_list_item_title">{{$t(title)}}</text>
			</view>
			<u-switch style="margin-right: 20rpx;" :active-color="themeColor" v-if="switchShow" v-model="checked" @change="switchWay"></u-switch>
			<view v-if="rightShow" class="user_list_item_right lf_row_a_f">
				<text class="user_list_item_right_desp">{{desp}}</text>
				<u-icon v-if="arrowShow" class="user_list_item_right_arrow" name="arrow-right"></u-icon>
			</view>
		</view>
		<view v-if="lineShow" class="user_list_line" :class="themeType + '_box_line_color'"></view>
	</view>
</template>

<script>
	export default {
		name:'one_row_item',
		props:{
			title:{
				type:String,default:''
			},//标题
			size:{
				type:[String,Number],default:'45'
			},//图标大小 单位rpx
			iconType:{
				type:String,default:''
			},//图标的类型 值为空 则不显示图标 1 uicon 2 image
			iconName:{
				type:String,default:''
			},//icon的名
			iconUrl:{
				type:String,default:''
			},//图标的地址
			switchShow:{
				type:Boolean,default:false
			},//是否显示开关
			rightShow:{
				type:Boolean,default:true
			},//是否显示右侧视图
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
				themeType:'',
				themeColor:'',
				checked:false
			}
		},
		created() {
			this.setViewStyle()
		},
		computed:{
			// 图片的大小
			imageStyle(){
				return {width: this.size + 'rpx',height:this.size + 'rpx'}
			},
			// 图标的颜色
		    iconColor(){
				// this.config.getNewThemeColor()
				return '#818181'
			}
		},
		
		methods:{
			setViewStyle(){
				this.themeType =  this.config.getThemeType()
				this.themeColor = this.config.getNewThemeColor(this.themeType)
			},
			clickWay(){
				this.$emit('chooseClick',this.title)
			},
			switchWay(bool){
				this.$emit('switchChange',bool)
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
			padding-left: 20rpx;
			
			&_title {
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
