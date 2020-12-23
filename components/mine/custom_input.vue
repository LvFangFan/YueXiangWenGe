<!--用户或手机号输入组件 -->
<template>
	<view>
		<view class="lf_row_a_f input_view" :style="{border: '2rpx solid' + borderColor,color:color}" v-if="type == '1'">
			<image class="input_icon" :src="tagIcon"></image>
			<input class="input" :maxlength="maxlenght" :value="value" @input="inputChange" :type="keyType" :placeholder="$t(placeholder)"
			 :placeholder-style="'color:' + placeholderColor" />
		</view>
		<view class="lf_row_a_f input_view" :style="{border: '2rpx solid' + borderColor,color:color}" v-if="type == '2'">
			<image class="input_icon" :src="tagIcon"></image>
			<input class="input" :value="value" @input="inputChange" password :type="keyType" :placeholder="$t(placeholder)" :placeholder-style="'color:' + placeholderColor" />
		</view>
		<view class="lf_row_a_f input_view" style="justify-content: space-between;" :style="{border: '2rpx solid' + borderColor,color:color}"
		 v-if="type == '3'">
			<view class="lf_row_a_f">
				<image class="input_icon" :src="tagIcon"></image>
				<input class="code_input"  :value="value" maxlength="12" @input="inputChange" :type="keyType" style="width: 240rpx;"
				 :placeholder="$t(placeholder)" :placeholder-style="'color:' + placeholderColor" />
			</view>
			<u-button class="input_btn" :disabled="codeDisabled" :hair-line="false" shape="circle" :style="{'background-color': codeBgColor}"
			 @click="getCode">{{tips}}</u-button>

		</view>
		<u-verification-code :keep-running="true" :seconds="seconds" @end="end" @start="start" ref="uCode" @change="codeChange"
		 :startText="startText" :changeText="changeText" :endText="endText"></u-verification-code>
		<u-toast ref="uToast"></u-toast>
	</view>

</template>

<script>
	import {
		UserApi
	} from '@/api/userApi.js'
	const userApiM = new UserApi()
	export default {
		name: 'custom_input',
		props: {
			value: {
				type: String,
				default: ''
			},
			type: {
				type: [Number, String],
				default: '1'
			}, //1账户 2密码 3验证码 4修改密码
			keyType:{
				type:String,default:'text'
			},//键盘弹出类型 
			color:{
				type:String,default:'#828282'
			},
			borderColor: {
				type: String,
				default: '#FFFFFF'
			}, //外边框颜色
			codeBgColor: {
				type: String,
				default: '#69B3FF'
			},
			placeholder: {
				type: String,
				default: '请输入'
			}, //提示文字
			placeholderColor: {
				type: String,
				default: '#93C9FF'
			}, //提示颜色
			iconType: {
				type: String,
				default: '1'
			}, //图标类型 1 白色用户 2 白色手机 3 白色密码 4 白色验证码 5 灰色手机 6灰色密码 7灰色再确认密码 8灰色验证码
			phoneNumber: {
				type: String,
				default: ''
			}, //只有类型为验证码时调用
			btnText: {
				type: String,
				default: '获得验证码'
			}
		},
		data() {
			return {
				codeDisabled: false,
				tips: '',
				seconds: 60,
				refCode: null,
				startText: '获取验证码',
				changeText: 'Xs',
				endText: '重新获取'
			}
		},
		computed: {
			tagIcon() {
				switch (this.iconType) {
					case '1':
						return '/static/images/user/login_user.png'
					case '2':
						return '/static/images/user/login_phone.png'
					case '3':
						return '/static/images/user/login_password.png'
					case '4':
						return '/static/images/user/login_verification_code.png'
					case '5':
						return '/static/images/user/gray_phone.png'
					case '6':
						return '/static/images/user/gray_password.png'
					case '7':
						return '/static/images/user/gray_two_password.png'
					case '8':
						return '/static/images/user/gray_verification_code.png'
					default:
						return ''
				}
			},
			// 手机号，用户 最大输入长度
			maxlenght() {
				return this.iconType == '2' && this.type == '1' ? '11' : '-1'
			}
		},
		methods: {
			inputChange(e) {
				let valueStr = e.detail.value
				this.$emit('input', valueStr);
			},
			codeChange(text) {
				this.tips = text;
			},
			getCode() {
				if (this.$refs.uCode.canGetCode) {
					this.codeDisabled = true
					// 通知验证码组件内部开始倒计时
					if (this.phoneNumber.length === 11) {
						userApiM.getPhoneLoginRegisterSendCode(this.phoneNumber, da => {
							if(da.code === '0000'){
								uni.showToast({
									icon:'none',
									title:'验证码获取成功'
								})
							}else{
								this.codeDisabled = false
							}
						})
						this.$refs.uCode.start();
					}else{
						uni.showToast({
							icon:'none',
							title:'手机号格式错误，请重新输入'
						})
					}

				}
			},
			start(){
				
			},
			end() {
				this.codeDisabled = false
			}
		}
	}
</script>

<style lang="scss">
	.input_view {
		width: 100%;
		padding: 0rpx 29rpx;
		height: 80rpx;
		border-radius: 40rpx;
		.input_icon {
			width: 50rpx;
			height: 50rpx;
			margin-right: 20rpx;
		}

		.input {
			width: calc(100% - 70rpx);
			size: 28rpx;
		}

		.code_input {
			width: calc(100% - 230rpx);
			size: 28rpx;
		}

		.input_btn {
			width: 160rpx;
			padding: 0rpx 10rpx;
			height: 60rpx;
			font-size: 24rpx;
			font-weight: 400;
			color: #FFFFFF;
			margin: 0rpx;
		}
	}
</style>
