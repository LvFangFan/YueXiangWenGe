
// 变更语言
export const changeTabbarLanguage = (tabArrStr) =>{
	uni.setTabBarItem({
		index: 0,
		text: tabArrStr[0],
		"iconPath": "static/images/main/tabbar/tab_one_normal.png",
		"selectedIconPath": "static/images/main/tabbar/tab_one_active.png"
	})
	uni.setTabBarItem({
		index: 1,
		text: tabArrStr[1],
		"iconPath": "static/images/main/tabbar/tab_two_normal.png",
		"selectedIconPath": "static/images/main/tabbar/tab_two_active.png"
	})
	uni.setTabBarItem({
		index: 2,
		text: tabArrStr[2],
		"iconPath": "static/images/main/tabbar/tab_three_normal.png",
		"selectedIconPath": "static/images/main/tabbar/tab_three_active.png"
	})
	uni.setTabBarItem({
		index: 3,
		text: tabArrStr[3],
		"iconPath": "static/images/main/tabbar/tab_four_normal.png",
		"selectedIconPath": "static/images/main/tabbar/tab_four_active.png"
	})
}