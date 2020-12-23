import Vue from 'vue'
import App from './App'
import store from './store'

Vue.config.productionTip = false

// 引入全局uView
import uView from 'uview-ui';
Vue.use(uView);

// 注册全局刷新组件
import MescrollBody from "@/components/mescroll-uni/mescroll-body.vue"
import MescrollUni from "@/components/mescroll-uni/mescroll-uni.vue"
Vue.component('mescroll-body', MescrollBody)
Vue.component('mescroll-uni', MescrollUni)

import common from '@/utils/common.js'
Vue.prototype.common = common


// i18n部分的配置
// 引入语言包，注意路径
import Chinese from '@/config/language/zh.js';
import English from '@/config/language/en.js';

// 引入并使用vue-i18n
import VueI18n from 'vue-i18n'
Vue.use(VueI18n)

// 构造i18n对象
const i18n = new VueI18n({
	// 默认语言，这里的local属性，对应message中的zh、en属性
	locale: 'zh',
	// 引入语言文件
	messages: {
		// 这里的属性名是任意的，您也可以把zh设置为cn等，只是后续切换语言时
		// 要标识这里的语言属性，如：this.$i18n.locale = zh|en|xxx
		'zh': Chinese,
		'en': English,
	}
})

App.mpType = 'app'
// 由于微信小程序的运行机制问题，需声明如下一行，H5和APP非必填
Vue.prototype._i18n = i18n


const app = new Vue({
	i18n,
	store,
    ...App
})
app.$mount()
