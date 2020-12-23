
 const setDarkTabAndNavBar = (that) =>{
	const isDark = that.$store.state.configInfo.isDark
	const themeType = that.$store.state.configInfo.themeType
	const themeColor = getThemeColor(themeType)
	const tabStyle =  getDarkToTabStyle(isDark,themeColor)
	 uni.setTabBarStyle({
	 	backgroundColor:tabStyle.bgColor,
		// color:tabStyle.color,
		selectedColor:tabStyle.selectedColor
	 })
	 const newColor = isDark ? '#2D2D2D' : themeColor
	uni.setNavigationBarColor({
	    frontColor: '#ffffff',
	    backgroundColor: newColor
	})
}
// 设置tabbar
const getDarkToTabStyle = (isDark,themeColor) =>{
	if(isDark){
		return {
			bgColor:'#2D2D2D',
			color:'#FFFFFF',
			selectedColor:themeColor
		}
	}else{
		return {
			bgColor:'#FFFFFF',
			color:'#828282',
			selectedColor:themeColor
		}
	}
}
// 获得主题颜色
const getThemeColor = (themeType,isDark) =>{
	switch (themeType){
		case 'normal':
			return '#C0E8B9'
		default:
			return '#FFFFFF'
	}
}

// 获得主题类型
const getThemeType = (that) =>{
	const isDark = that.$store.state.configInfo.isDark
	let themeType = isDark ? 'dark' : that.$store.state.configInfo.themeType
	return  themeType
}

export default {
	setDarkTabAndNavBar,
	getThemeType,
	getThemeColor,
	getDarkToTabStyle
	
}
