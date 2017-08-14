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
	var dateH = c.getDate();
	var monH = c.getMonth();
	var yr = c. getFullYear();
	
	//Substitute date
	var dayN = [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ];
	var dateN = [ "0", "1st", "2nd", "3rd", "4th", "5th", "6th", "7th", "8th", "9th", "10th", "11th", "12th", "13th", "14th", "15th", "16th", "17th", "18th", "19th", "20th", "21st", "22nd", "23rd", "24th", "25th", "26th", "27th", "28th", "29th", "30th", "31st", "wat" ];
    var monN = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
	var day = dayN[dayH]
	var date = dateN[dateH]
	var mon = monN[monH]
	
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
	$('#Time').html(hr + ":" + min + ":" + sec);
	$('#Week').html(day);
	$('#Date').html(date + " " + mon + " " + yr);
	$('#UTC').html(leadZero(utcH) + ":" + min);
	$('#CST').html(leadZero(cstH) + ":" + min);
	$('#JST').html(leadZero(jstH) + ":" + min);
	
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
				'Images/80.jpg'];
	
	$('.BG').css("background", "url("+ images[Math.floor(Math.random() * images.length)] + ") no-repeat center center fixed");
	$('.BG').css("background-size", "cover");
	//Only way to get rid of white borders DO NOT middle click in Firefox or it ruins everything
	$('.BG').css("transform", "scale(1.05)");
}

//Weather, directly copied from simpleWeather.js but with location disabled because firefox asks for permission every time
function getWeather(location, unit) {
	$.simpleWeather({
		location: 'Sunrise, FL',
		unit: 'c',
		success: function(weather) {
			$('.Weather-Location').html(weather.city + ', ' + weather.region);
			$('.Weather-TempC').html(weather.temp + weather.units.temp + '&deg;');
			$('.Weather-TempR').html(weather.low + weather.units.temp + '&deg;' + ' ~ ' + weather.high + weather.units.temp + '&deg;');
			$('.Weather-Condition').html(weather.currently);
			$('.Weather-Icon').html('<span class="icon-' + weather.code + '"></span>');
		},
		error: function(error) { $('.Weather-Location').html(error); }
	});
}

//Get public IP address
function getIP(json) {
	document.getElementById('PublicIP').innerHTML = json.ip;
}

//Blur darken / unblur lighten background using HTML DOM events
//WHY THE FUCK DOESN'T CSS HAVE PARENT SELEECTORS ALREADY
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
		getWeather();
		getIP(json);
	}
);