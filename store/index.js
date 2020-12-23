import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = {
  state: {
		// 软件常规设置
		configInfo:{
			isFirst:true,//是否第一次打开软件
			lang:'zh',//选择语言
			themeType:'dark',//主体类型
			isDark:false,//暗夜模式
		},
		langInfo:{
			language:'简体中文',
			lang:'zh'
		},
		version:' 1.0.0'
  },
	getters: {
		getVersion:(state) => state.version,
		getConfigInfo:(state) => state.configInfo,
		getLangInfo:(state) => state.langInfo
	},
  mutations: {
		setLangInfo (state, info) {
			state.langInfo = info
		},
		setConfigInfo (state,info){
			state.configInfo = info
		}
  },
  actions: {
  }
}

export default new Vuex.Store(store)