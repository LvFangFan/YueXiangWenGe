const setDarkTabBarStyle = () => {
	const isDark = getApp().globalData.configInfo.isDark
	const themeType = getApp().globalData.configInfo.themeType
	const themeColor = getThemeColor(themeType)
	const tabStyle = getDarkToTabStyle(isDark, themeColor)
	uni.setTabBarStyle({
		backgroundColor: tabStyle.bgColor,
		selectedColor: tabStyle.selectedColor,
		borderStyle: tabStyle.borderColor
	})

}
const setDarkNavBackground = () => {
	const isDark = getApp().globalData.configInfo.isDark
	const themeType = getApp().globalData.configInfo.themeType
	const themeColor = getThemeColor(themeType)
	const newColor = isDark ? '#2D2D2D' : themeColor
	uni.setNavigationBarColor({
		frontColor: '#ffffff', //只能小写
		backgroundColor: newColor,
		animation: {
			duration: 0,
			timingFunc: 'easeIn'
		}
	})
}
const setBackgroundColor = () => {
	const isDark = getApp().globalData.configInfo.isDark
	const newColor = isDark ? '#2D2D2D' : '#F8F9FB'
	uni.setBackgroundColor({
		backgroundColor: newColor
	})
}

// 设置tabbar
const getDarkToTabStyle = (isDark, themeColor) => {
	if (isDark) {
		return {
			bgColor: '#2D2D2D',
			color: '#FFFFFF',
			selectedColor: themeColor,
			borderColor: '#2D2D2D'
		}
	} else {
		return {
			bgColor: '#FFFFFF',
			color: '#828282',
			selectedColor: themeColor,
			borderColor: '#FFFFFF'
		}
	}
}
// 获得主题颜色
const getThemeColor = (themeType) => {
	let newColor = ''
	switch (themeType) {
		case 'normal':
			newColor = '#C0E8B9'
			break;
		case 'pink':
		    newColor = '#FF6EC7'
			break;
		default:
			newColor = '#FFFFFF'
			break;
	}
	
	return newColor
}
// 获得主题颜色
const getNewThemeColor = () => {
	const themeType = getApp().globalData.configInfo.themeType
	let newColor = ''
	switch (themeType) {
		case 'normal':
			newColor = '#C0E8B9'
			break;
		case 'pink':
		    newColor = '#FF6EC7'
			break;
		default:
			newColor = '#FFFFFF'
			break;
	}
	return newColor
}

// 获得主题类型 bool 是否用于黑暗模式
const getThemeType = (bool = true) => {
	const isDark = getApp().globalData.configInfo.isDark
	const themeType = getApp().globalData.configInfo.themeType
	if (bool) {
		return isDark ? 'dark' : themeType
	} else {
		return themeType
	}
}

export default {
	setDarkTabBarStyle,
	setDarkNavBackground,
	setBackgroundColor,
	getThemeType,
	getThemeColor,
	getNewThemeColor,
	getDarkToTabStyle

}
