function updateTime() {
	
	//leading zero for single digits
	function leadZero(n) {
		if (n < 10) {
		n = "0" + n;}
	return n;}
	
	//Local time
	var c = new Date();
	var hr = leadZero(c.getHours());
	var min = leadZero(c.getMinutes());
	var sec = leadZero(c.getSeconds());
	
	var dayH = c.getDay();
	var dateH = leadZero(c.getDate());
	var monH = leadZero(c.getMonth() + 1);
	var yr = c. getFullYear();
	
	//Substitute date
	var dayN = [ "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat" ];
	var day = dayN[dayH]
	
	//"World" time
	var utcH = c.getUTCHours();
	var cstH = utcH+8
	var jstH = utcH+9
	
	//Correct time when over 24h
	if (cstH >= 24){
		cstH = cstH-24;}
	
	if (jstH >= 24){
		jstH = jstH-24;}
	
	//Output
	$('#Time').html(hr + " : " + min + " : " + sec);
	$('#Date').html(yr + " - " + monH + " - " + dateH + " " + day);
	$('#UTC').html("UTC" + " /// " + leadZero(utcH) + " : " + min);
	$('#CST').html("CST" + " /// " + leadZero(cstH) + " : " + min);
	$('#JST').html("JST" + " /// " + leadZero(jstH) + " : " + min);
	
}
setInterval(updateTime, 250);

//Random background on page load
//Will eventually make every image png and make this less horrible
function randomBG(){
	var images=['Images/1.jpg',
				'Images/2.png',
				'Images/3.png',
				'Images/4.jpg',
				'Images/5.png',
				'Images/6.jpg',
				'Images/7.jpg',
				'Images/8.png',
				'Images/9.jpg',
				'Images/10.png',
				'Images/11.png',
				'Images/12.png',
				'Images/13.png',
				'Images/14.jpg',
				'Images/15.png',
				'Images/16.jpg',
				'Images/17.jpg',
				'Images/18.jpg',
				'Images/19.png',
				'Images/20.jpg',
				'Images/21.jpg',
				'Images/22.png',
				'Images/23.jpg',
				'Images/24.jpg',
				'Images/25.png',
				'Images/26.png',
				'Images/27.jpg',
				'Images/28.png',
				'Images/29.jpg',
				'Images/30.jpg',
				'Images/31.jpg',
				'Images/32.png',
				'Images/33.jpg',
				'Images/34.png',
				'Images/35.jpg',
				'Images/36.jpg',
				'Images/37.jpg',
				'Images/38.jpg',
				'Images/39.jpg',
				'Images/40.jpg',
				'Images/41.jpg',
				'Images/42.jpg',
				'Images/43.jpg',
				'Images/44.jpg',
				'Images/45.jpg',
				'Images/46.jpg',
				'Images/47.png',
				'Images/48.png',
				'Images/49.jpg',
				'Images/50.jpg',
				'Images/51.jpg',
				'Images/52.jpg',
				'Images/53.jpg',
				'Images/54.jpg',
				'Images/55.png',
				'Images/56.jpg',
				'Images/57.jpg',
				'Images/58.jpg',
				'Images/59.jpg',
				'Images/60.png',
				'Images/61.jpg',
				'Images/62.png',
				'Images/63.png',
				'Images/65.jpg',
				'Images/66.png',
				'Images/67.jpg',
				'Images/68.png',
				'Images/69.jpg',
				'Images/70.png',
				'Images/71.jpg',
				'Images/72.jpg',
				'Images/73.jpg',
				'Images/74.jpg',
				'Images/75.jpg',
				'Images/76.jpg',
				'Images/77.png',
				'Images/78.jpg',
				'Images/79.png',
				'Images/80.jpg',
				'Images/81.png',
				'Images/82.png',
				'Images/83.jpg',
				'Images/84.jpg',
				'Images/85.png',
				'Images/86.jpg',
				'Images/87.png',
				'Images/88.jpg',
				'Images/89.jpg',
				'Images/90.jpg',
				'Images/91.png',
				'Images/92.png',
				'Images/93.jpg',
				'Images/94.jpg',
				'Images/95.jpg',
				'Images/96.jpg',
				'Images/97.png',
				'Images/98.png',
				'Images/99.jpg',
				'Images/100.png',
				'Images/101.png',
				'Images/102.jpg',
				'Images/103.jpg',
				'Images/104.jpg',
				'Images/105.jpg',
				'Images/106.jpg',
				'Images/107.png',
				'Images/108.jpg',
				'Images/109.jpg',
				'Images/110.jpg',
				'Images/111.jpg',
				'Images/112.png',
				'Images/113.jpg',
				'Images/114.jpg',
				'Images/115.png',
				'Images/116.png',
				'Images/117.png',
				'Images/118.png',
				'Images/119.jpg',
				'Images/120.png',
				'Images/121.jpg',
				'Images/122.jpg',
				'Images/123.jpg',
				'Images/124.jpg',
				'Images/125.png',
				'Images/126.jpg',
				'Images/127.png',
				'Images/128.png',
		    		'Images/129.png',
				'Images/130.png',
				'Images/131.jpg',
				'Images/132.png',
				'Images/133.jpg',
				'Images/134.jpg',
				'Images/135.jpg',
				'Images/136.jpg',
				'Images/137.jpg',
				'Images/138.jpg',
				'Images/139.jpg',
				'Images/140.jpg',
				'Images/141.jpg',
				'Images/142.jpg',
				'Images/143.png',
				'Images/144.png',
				'Images/145.png',
				'Images/146.jpg',
				'Images/147.png',
				'Images/148.jpg',
				'Images/149.jpg',
				'Images/150.jpg',
				'Images/151.jpg',
				'Images/152.png',
				'Images/153.png',
				'Images/154.jpg',
				'Images/155.jpg',
				'Images/156.jpg',
				'Images/157.png',
				'Images/158.jpg',
				'Images/159.png',
				'Images/160.png',
				'Images/161.png',
				'Images/162.png',
				'Images/163.png',
				'Images/164.png',
				'Images/165.png',
				'Images/166.png',
				'Images/167.jpg',
				'Images/168.png',
				'Images/169.png',
				'Images/170.png',
				'Images/171.png',
				'Images/174.png',
				'Images/173.png',
				'Images/174.png',
				'Images/175.jpg',
				'Images/176.png',
				'Images/177.png',
				'Images/178.png',
				'Images/179.jpg',
				'Images/180.jpg',
				'Images/181.jpg',
				'Images/182.png',
				'Images/183.png',
				'Images/184.png',
				'Images/185.jpg',
				'Images/186.jpg',
				'Images/187.png',
				'Images/188.jpg',
				'Images/189.png',
				'Images/190.png',
				'Images/191.jpg',
				'Images/192.jpg',
				'Images/193.jpg',
				'Images/194.jpg',
				'Images/195.png',
				'Images/196.jpg',
				'Images/197.png',
				'Images/198.png',
				'Images/199.png',
				'Images/200.jpg',
				'Images/201.jpg',
				'Images/202.jpg',
				'Images/203.jpg',
				'Images/204.jpg',
				'Images/205.png',
				'Images/206.jpg',
				'Images/207.jpg',
				'Images/208.png',
				'Images/209.jpg',
				'Images/210.jpg'];
	
	$('.BG').css("background", "url("+ images[Math.floor(Math.random() * images.length)] + ") no-repeat center center fixed");
	$('.BG').css("background-size", "cover");
	//Zoom in a bit so there won't be white borders when blurred
	$('.BG').css("transform", "scale(1.05)");
}

//Blur darken / unblur lighten background using HTML DOM events
function blurBG() {
	$('.BG').css("filter", "blur(5px) brightness(75%)");
}

function unblurBG() {
	$('.BG').css("filter", "none");
}

//Initialize everything
$(document).ready(
	function() {
		randomBG();
		updateTime();
	}
);
