//generated and modified from http://countdown.onlineclock.net/generator/

dateFuture = new Date(2018,5,1,0,0,0);

function GetCount(){

        dateNow = new Date();                                                                        //grab current date
        amount = dateFuture.getTime() - dateNow.getTime();                //calc milliseconds between dates
        delete dateNow;

        // time is already past
        if(amount < 0){
                document.getElementById('countbox').innerHTML="IT'S HAPPENING";
        }
        // date is still good
        else{
				days=0;hours=0;mins=0;secs=0;out="";
				
				function leadZero(n) {
					if (n < 10) {
					n = "0" + n;}
				return n;}

                amount = Math.floor(amount/1000);//kill the "milliseconds" so just secs

                days=leadZero(Math.floor(amount/86400));//days
                amount=amount%86400;

                hours=leadZero(Math.floor(amount/3600));//hours
                amount=amount%3600;

                mins=leadZero(Math.floor(amount/60));//minutes
                amount=amount%60;

                secs=leadZero(Math.floor(amount));//seconds

                if(days != 0){out += days +" : ";}
                if(days != 0 || hours != 0){out += hours +" : ";}
                if(days != 0 || hours != 0 || mins != 0){out += mins +" : ";}
                out += secs;
                document.getElementById('countbox').innerHTML=out;

                setTimeout("GetCount()", 1000);
        }
}

window.onload=function(){GetCount();}//call when everything has loaded

