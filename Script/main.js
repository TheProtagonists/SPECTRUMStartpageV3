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
	var dayN = [ "Sun", "Mon", "Tues", "Wed", "Thu", "Fri", "Sat" ];
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
//This could be a lot shorter if they all have the same extension but since this is a startpage so I value aesthetics more than code tidyness...
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
				'Images/28.jpg',
				'Images/29.jpg',
				'Images/30.jpg',
				'Images/31.jpg',
				'Images/32.png',
				'Images/33.jpg',
				'Images/34.jpg',
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
				'Images/55.jpg',
				'Images/56.jpg',
				'Images/57.jpg',
				'Images/58.jpg',
				'Images/59.jpg',
				'Images/60.png',
				'Images/61.jpg',
				'Images/62.png',
				'Images/63.png',
				'Images/65.jpg',
				'Images/66.jpg',
				'Images/67.jpg',
				'Images/68.png',
				'Images/69.png',
				'Images/70.png',
				'Images/71.jpg',
				'Images/72.jpg',
				'Images/73.jpg',
				'Images/74.jpg',
				'Images/75.jpg',
				'Images/76.jpg',
				'Images/77.jpg',
				'Images/78.jpg',
				'Images/79.jpg',
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
				'Images/108.jpg'];
	
	$('.BG').css("background", "url("+ images[Math.floor(Math.random() * images.length)] + ") no-repeat center center fixed");
	$('.BG').css("background-size", "cover");
	//Only way to get rid of white borders
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
		CountDown2();
	}
);
