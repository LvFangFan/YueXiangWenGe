<template>
	<view class="lff_content" :class="themeType + '_bg_color'">
		<view class="list" :class="themeType + '_box_bg_color'">
			<view class="lf_row_a_f rows" v-for="(item,index) in list" :key="index" @click="chooseItem(item)">
				<text class="rows_text">{{item.title}}</text>
				<u-icon v-if="text === item.title" class="rows_icon" name="checkmark" size="40"></u-icon>
			</view>
		</view>
		<u-toast ref="uToast" />
	</view>
	
</template>

<script>
	export default {
		data() {
			return {
				list:[{title:'简体中文',lang:'zh',disabled:false},
				{title:'English',lang:'en',disabled:false},
				{title:'繁体中文（台湾）',disabled:true},
				{title:'繁体中文（香港）',disabled:true},
				
				],
				text:'简体中文'
			};
		},
		onLoad() {
			this.config.setDarkNavBackground()
		},
		onReady() {
			this.common.setNavTextWay(this,'多语言')
			this.text = this.$store.state.langInfo.language 
		},
		computed:{
			themeType(){
				return this.config.getThemeType()
			}
		},
		methods:{
			chooseItem(newItem){
				if(!newItem.disabled){
					this.text = newItem.title	
					this.$i18n.locale = newItem.lang
					const langInfo = {language:newItem.title,lang:newItem.lang}
					uni.setStorageSync('langInfo',langInfo)
					this.$store.commit('setLangInfo',langInfo);
					this.common.setNavTextWay(this,'多语言');
					
				}else{
					this.common.toastWarningWay('该语言暂不支持', this);
				}
			}
		}
	}
</script>

<style lang="scss">
	@import '~@/config/style/config.scss';
	.list{
		padding: 0rpx 20rpx 10rpx 20rpx;
		.rows{
			height: 85rpx;
			justify-content: space-between;
			&:last-child{
				border-bottom-width: 0;
			}
			&_text{
				margin-left: 20rpx;
				font-size: 28rpx;
				color: $two_font_color;
			}
			&_icon{
				width: 60rpx;
				height: 60rpx;
				color: $theme_color;
			}
		}
	}
</style>
