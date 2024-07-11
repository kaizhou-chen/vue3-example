/**
 * B站，在视频播放页，获取播放列表
 */
export const code = `function getList() {
	const getList_1 = () => {
		const list = [];
		
		const videoList = document.querySelectorAll('.video-episode-card__info-title');
		videoList.forEach(x => {
			list.push({
				title: x.title
			})
		})
		
		return list;
	}
	
	const getList_2 = () => {
		const list = [];
		
		const videoList = document.querySelectorAll('.list-box li');
		videoList.forEach(x => {
			const part = x.querySelector('.part');
			list.push({
				title: part.innerText
			})
		})
		
		return list;
	}
	
	let list = getList_1()
	if (list.length === 0) {
		list = getList_2()
	}
	
	console.log(JSON.stringify(list))
}`