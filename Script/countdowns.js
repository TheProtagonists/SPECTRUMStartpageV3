function CountDown1(){

        dateFuture = new Date(2018,9,25,0,0,0);
		dateNow = new Date();
        amount = dateFuture.getTime() - dateNow.getTime();
        delete dateNow;

        // time is already past
        if(amount < 0){
                document.getElementById('countbox1').innerHTML="HAPPENING";
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
                document.getElementById('countbox1').innerHTML=out;

                setTimeout("CountDown1()", 250);
        }
}

function CountDown2(){

        dateFuture = new Date(2019,4,24,0,0,0);
		dateNow = new Date();
        amount = dateFuture.getTime() - dateNow.getTime();
        delete dateNow;

        // time is already past
        if(amount < 0){
                document.getElementById('countbox2').innerHTML="HAPPENING";
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
                document.getElementById('countbox2').innerHTML=out;


                setTimeout("CountDown2()", 250);
        }
}
