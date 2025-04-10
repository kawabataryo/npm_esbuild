export function isDevice() {
	
	const ua = navigator.userAgent.toLowerCase();
	const angle = screen.orientation.angle;

	if((ua.indexOf('ipad') > -1 || ua.indexOf('macintosh') > -1 && 'ontouchend' in document) && (angle === 0 || angle === 180)){
		return 'pad:portrait';
	}else if((ua.indexOf('ipad') > -1 || ua.indexOf('macintosh') > -1 && 'ontouchend' in document) && (angle === 90 || angle === -90)){
		return 'pad:landscape';
	}else if((ua.match(/iphone|android.+mobile/)) && (angle === 0 || angle === 180)){
		return 'sp:portrait';
	}else if((ua.match(/iphone|android.+mobile/)) && (angle === 90 || angle === -90)){
		return 'sp:landscape';
	}else{
		return 'pc';	
	}

}