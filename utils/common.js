// 将一个数组转换为两个数组
const oneArrChangeMultipleArrGroup = (array, subGroupLength) =>{
	let index = 0;
	let newArray = [];
	while (index < array.length) {
		newArray.push(array.slice(index, index += subGroupLength));
	}
	return newArray;
}

// 设置语言
const setNavTextWay = (that,title) =>{
	uni.setNavigationBarTitle({
		title: that.$t(title)
	})
}

const toastWarningWay = (title, that) => {
	that.$refs.uToast.show({
		title: that.$t(title),
		position: 'top',
		type: 'warning'
	})
}
const toastErrorWay = (title, that) => {
	that.$refs.uToast.show({
		title: title,
		position: 'top',
		type: 'error'
	})
}

export default {
	oneArrChangeMultipleArrGroup,
	setNavTextWay,
	toastWarningWay,
	toastErrorWay
}
