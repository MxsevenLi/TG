//import "@babel/polyfill";
//import 'whatwg-fetch';
//import "./closest";

const slideshows = document.getElementsByClassName("slideshow");

for (let slideshow of slideshows) {
	let slides = slideshow.getElementsByTagName("picture");

	slideshow.currentSlide = 0;

	slideshow.getElementsByClassName("source")[0].href = slides[0].getAttribute("x-source");

	window.setInterval(() => {
		slides[slideshow.currentSlide].classList.remove("shown");
		slideshow.currentSlide = (slideshow.currentSlide + 1) % slides.length;
		slides[slideshow.currentSlide].classList.add("shown");

		slideshow.getElementsByClassName("source")[0].href = slides[slideshow.currentSlide].getAttribute("x-source");
	}, 2500);
}

/* 检查ie浏览器版本 
(function() {
	var o = navigator.userAgent.match(/MSIE (\d+)/);
	o = o && o[1];
	console.log('o', o);
	// ie9 以下 || o != null
	if (!!o && o < 9) {
	  // 更新页面
	  var newUrl = location.protocol + '//' + location.host + '/views/static/ieupdate/index.html';
	  location.href =  newUrl;
	}
  })();
*/
let style = document.createElement('style');
document.head.appendChild(style);
let widthCdm = window.innerWidth;
let from = `from { 
	visibility: visible; 
	-webkit-transform: 
	translateX(${widthCdm}px); 
}`;
let to = `to { 
	  visibility: visible; 
	  -webkit-transform: 
	  translateX(-100%); 
}`;
style.sheet.insertRule(`@-webkit-keyframes danmu { ${from} ${to} }`, 0);