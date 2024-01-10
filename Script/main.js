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
	var estH = utcH-5
	//I GIVE UP MANUNALLY CHANGE THIS WHEN DAYLIGHT SAVING CHANGES
	
	//Account for over 24 and negative values
	if (cstH >= 24){
		cstH = cstH-24;}
	
	if (jstH >= 24){
		jstH = jstH-24;}
	
	if (estH <= 0){
		estH = estH+24;}
	
	//Output
	$('#Time').html(hr + " : " + min + " : " + sec);
	$('#Date').html(yr + " - " + monH + " - " + dateH + " " + day);
	$('#UTC').html("UTC" + " /// " + leadZero(utcH) + " : " + min);
	$('#CST').html("CST" + " /// " + leadZero(cstH) + " : " + min);
	$('#JST').html("JST" + " /// " + leadZero(jstH) + " : " + min);
	$('#EST').html("EST" + " /// " + leadZero(estH) + " : " + min);
	
}
setInterval(updateTime, 250);

function randomBG(){
	
	var min = 1;
	var max = 400;
	
	var randomBGN = Math.floor(Math.random() * (max - min)) + min;
	
	$('.BG').css("background", "url("+ 'BG/' + randomBGN + '.png' + ") no-repeat center center fixed");
	$('.BG').css("background-size", "cover");
	//Zoom in a bit so there won't be white borders when blurred (at least on Firefox)
	$('.BG').css("transform", "scale(1.025)");
}

// <br> 
var randomWords = [
	'She depends on you <br> We depend on you',
	'If I lay here <br> If I just lay here <br> Would you lie with me and just forget the world',
	'I\'ll run away with your foot steps <br> I\'ll build a city that dreams for two <br> And if you lose yourself <br> I will find you',
	'Let\'s leave for an eternity <br> We\'ll sail across the lights beyond our sky',
	'I don\'t know where <br> Confused about how as well <br> Just know that these things will never change for us at all',
	'Can you feel the silk embrace <br> In the satin air <br> If we dissolve without a trace <br> Will the real world even care',
	'You were my clarity I swear <br> All alone in a daydream <br> Yeah there was magic in the air <br> And you were right here beside me',
	'Cause we\'ve got futures to unfold <br> And there are stories left untold',
	'So take a long time <br> Oh the world is lucky to be your home I know <br> I need a next life <br> Not satisfied to know you just once',
	'I won\'t spend time resenting the way things are',
	'I don\'t know much about your life beyond these walls <br> The fleeting sense of love within these God-forsaken halls <br> And I can hear it in his voice in every call <br> This girl who\'s slept a hundred years has something after all',
	'Lean into my side <br> Never felt alive <br> Call the chance and sigh <br> We will wait for this',
	'Come watch us rise again <br> Out of the fever <br> Life will never be the same <br> I\'m a believer',
	'It\'s alright <br> With memories inside <br> Midnight dust on the floor <br> Watch it turn into gold',
	'Love your ego <br> You won\'t feel a thing <br> Always number one <br> The pen with a bent wrist crooked king',
	'Can you show me a miracle',
	'And if you lose yourself <br> I will find you',
	'Don\'t wait for a signal <br> To go change your mind <br> Grab on to the surface <br> And just hold on tight',
	'You can hear the waves in underwater caves <br> As if you actually were inside a saltwater room',
	'Now these voices have become our own',
	'三千世界 常世之闇 <br> 嘆ク唄モ 聞コエナイヨ <br> 青藍せいらんの空 遥か彼方 <br> その光線銃で打ち抜いて',
	'星はまた弧を描いて飛んだ <br> 街の視線を奪い去るように <br> 君とまた会えるのなら僕は、そうだ <br> 星の名前をひとつ受け止めよう',
	'This is our story <br> That we could take back some day <br> Our lonely glory <br> That we could get back they say',
	'I cried <br> For I didn\'t think it could be true <br> That you and I <br> Might have always known one another',
	'That everywhere <br> That has ever existed <br> Was all in service of our dream',
	'Hear what I hear',
	'知らない 知らない <br> あの耳鳴りは <br> 夕焼けの中に吸い込まれて消えてった',
	'To come apart again <br> The sirens wail and you\'re diving in <br> Well it stops and then <br> You\'re drawing storms just to tie the ends',
	'And at the end this wound will show <br> Time will run out but you won\'t be close <br> And you will not know how long it took <br> I\'ve tried to reach you but I never could',
	'It\'s impossible to see <br> All the things we used to be <br> And it\'s impossible to say <br> Why I always feel this way',
	'Like planets in the dark <br> We don\'t know how we got here in the sky <br> Like magnets torn apart <br> You don\'t know why you come back every time',
	'Let your colors burn and brightly burst <br> Into a million sparks that all disperse <br> And illuminate a world that\'ll try to bring you down <br> But not this time',
	'Thousand tears call the shadow of the nightmare <br> Thousand years past longing for the future <br> Thousand grief shed cruelty and their blood but <br> Thousand beliefs will salvage our souls',
	'Still we\'re gonna shout it loud <br> Even if our words seem meaningless <br> It\'s like I\'m carrying the weight of the world',
	'So at the dark we\'ll run <br> Bearing our tattered woven hearts <br> And come the dawn we\'ll be gone <br> So don\'t look away',
	'My heart to heart with the light and we always get along <br> Counting the stars in the sky thinking why they have to die <br> Just face to face we can hear a voice telling us it\'s wrong <br> Counting the stars in the sky it was like a lullaby',
	'Put all your faults to bed <br> You can be king again',
	'I could really use a wish right now, wish right now, wish right now',
	'笑い合えるってすごく幸せなこと <br> それをきみから教えてもらったんだよ',
	'I\'ll spend all thirty nights <br> Staring into the sky',
	'君と僕で 作り上げてく <br> 七色に輝く世界 <br> 見てる明日が それぞれでも <br> 歩いていこう',
	'ただ ただ 君だけを描け <br> 視界の 藍も 滲んだまま <br> 遠く 仰いだ 空に花泳ぐ <br> この目覆う藍二乗',
	'僕は無力だ。',
	'Trails of fire <br> You always knew <br> They would carry me home <br> They would lead me to you',
	'Doctor <br> I\'ve been walking by the side of the road <br> For a long time <br> And I\'m going out of my mind',
	'Sitting on a rooftop <br> Crazy days are coming again <br> I\'ll be running <br> But I\'ll be hidden in the masquerade',
	'Does it matter if we change <br> Does it matter at all <br> Don\'t you worry about me friend <br> Don\'t you worry if it doesn\'t feel the same',
	'At last the longest night has gone and brought in light <br> I felt myself melt in the morning light',
	'何もない僕たちに なぜ夢を見させたか <br> 終わりある人生に なぜ希望を持たせたか <br> なぜこの手をすり抜ける ものばかり与えたか <br> それでもなおしがみつく 僕らは醜いかい',
	'何光年でも <br> この歌を口ずさみながら',
	'降り積もる白に <br> 小さな芽 覆われてく <br> 遠い遠い春は <br> 雪の下',
	'迷いながらも <br> 君を <br> 見つけたよ',
	'Place of the fate <br> Uncertain record',
	'And I will be the victim <br> Maybe you should know <br> That I can see the writing <br> So slowly letting go',
	'Someday both of us are leaving here <br> But for now I\'ll just bring the sea to you',
	'私はちょうど何が重要か',
	'Please take me away from here',
	'Cast the shadows out from sight <br> A final stand a shouting cry <br> All the wrongs now turn to right <br> So fight the past take back the night',
	'Paradise here in the fields immense <br> If I return to this world here I will live again',
	'何かが変わったわけじゃない 何かが解ったわけじゃない <br> でこぼこ丸い地球の上 <br> 誰かが誰かを呼んだ声 知らない同士 人の群れ <br> でこぼこ丸い地球の上',
	'We\'ll be the lionhearted <br> For we don\'t care about it <br> We\'ll finish what we started <br> So promise me that they\'ll fall',
	'Take one last look at what you\'re leaving behind <br> Cause there\'s no coming back once we go <br> We are the children of an innocent crime <br> And it\'s time to take down the throne',
	'Just know <br> That mine is the hand to hold',
	'Longing somewhere far from home <br> I need your hand to hold',
	'感情的な太陽は <br> 熱をあげすぎてどうにかなりそう <br> 叫びたくてしょうがない <br> がむしゃらに求めてる identity',
	'Someday both of us are leaving here <br> But for now I\'ll just bring the sea to you',
	'Are you close <br> Shouldn\'t it come to you naturally',
	'I\'m so scared of getting used to this',
	'Everything we need is already here',
	'The work that stirred your soul <br> You can make for someone else',
	'Floating to the surface <br> Quicker than you sank',
	'それでも僕らは必死に生きて <br> 命を必死に抱えて生きて <br> 殺してあがいて笑って抱えて <br> 生きて、生きて、生きて、生きて、生きろ',
	'She\'s been holding her ground <br> No matter how you see it <br> She\'ll always hold on to you <br> "I swear I\'ll never forget"',
	'The tears that fall surround me <br> Shattering my heart like glass <br> Just wake up, I swear you\'ll see <br> Everything you\'ll ever fight for',
	'Maybe it\'s a gift that I couldn\'t recognize <br> Trying to feel alive',
	'Some days you hear it <br> Some days you don\'t <br> Sometimes you feel it <br> Sometimes you won\'t',
	'All that ever was and ever is <br> is nearly coming true <br> All you ever see you ever hear <br> will all come crashing through',
	'Every place you have ever imagined <br> It\'s real',
	'I am not my own <br> For I have been made new <br> Please don\'t let me go <br> I desprately need you',
	'And since we came here together <br> We\'ll leave with each other now',
	'Can\'t move my feet in the dark <br> I don\'t wanna be all alone <br> Can\'t feel the heat in my blood <br> Do you remember what he said',
	'あの日見渡した渚を <br> 今も思い出すんだ <br> 砂の上に刻んだ言葉 <br> 君の後ろ姿',
	'二人で育てた花が いつの日か枯れてしまっても <br> また新しい芽が出て <br> そんなふうにずっとずっと 永遠に いつまでも <br> あなたのとなりがいい',
	'These will be times that I won\'t miss <br> Don\'t blame me if I don\'t come through <br> I spent a lifetime on this <br> But I will give it up for you',
	'Because I know what you do out of passion <br> But it only makes it harder for me <br> And I know that you’re scared by the notion <br> We\'ll become who we meant to be',
	'We\'ll become who we meant to be',
	'I will come home in time <br> And we\'ll grow old and break apart <br> It\'s what I told you from the start <br> We\'ve always played the part',
	'Reality isn\'t going to be the same anymore',
	'そんな僕を置いて <br> 月は沈み陽は昇る <br> けどその夜は違ったんだ <br> 君は 僕の 手を',
	'君は君が勝手に君のやりかたで幸せになれる',
	'でも所詮君は強い <br> 君はきっと一人で前を向いていくんだ',
	'and the universe said I love you <br> and the universe said you have played the game well <br> and the universe said everything you need is within you <br> and the universe said you are stronger than you know',
	'and the universe said you are the daylight <br> and the universe said you are the night <br> and the universe said the darkness you fight is within you <br> and the universe said the light you seek is within you',
	'and the universe said you are not alone <br> and the universe said you are not separate from every other thing <br> and the universe said you are the universe tasting itself, talking to itself, reading its own code <br> and the universe said I love you because you are love',
	'Give me release <br> Let the waves of time and space surround me',
	'I\'ll be okay',
	'今 この世の行方を <br> 遮る迷路に 線を引こうぜ <br> その線がさ 重なる地図 <br> 君を照らすために咲く花さ',
	'I could never find the right way to tell you <br> Have you noticed I\'ve been gone? <br> Cause I left behind the home that you made me <br> But I will carry it along',
	'パッと花火が <br> 夜に咲いた <br> 夜に咲いて <br> 静かに消えた',
	'もう少しだけでいい <br> あと少しだけでいい <br> もう少しだけでいいから',
	'わたしなんで <br> 泣いているんだろう <br> 心になんて <br> 答えたらいい',
	'We will see creation come undone <br> These bones that bound us will be gone',
	'We\'ll stir our spirits till we\'re one <br> Then soft as shadows we\'ll become',
	'Let out the past <br> Pretend that your time has come again <br> Goodbye <br> a world you made to restore the mess you\'re in',
	'And she knows belief alone <br> Won\'t make it better <br> Let us pretend <br> It doesn\'t matter',
	'And they won\'t need to know the names or our faces <br> But they will carry on for us',
	'Oh it\'s a long way forward <br> So trust in me',
	'And I know <br> I\'m not alone <br> You\'ll be watching over us <br> Until you\'re gone',
	'Melt this curse away <br> Cry for you the same',
	'You\'d fit perfectly to me we\'d end our loneliness melt this curse away <br> Though I\'ll never know your name I\'ll cry for you the same',
	'Dry your eyes <br> Draw your blades <br> As we break and bend',
	'Seek your hath <br> For your kin <br> As we face the end',
	'Remember the time we lay on the grass on the hill in the pink fields <br> We watched the world together'
];
var randomText = Math.floor(Math.random()*randomWords.length);

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
		$('#countbox2').html(randomWords[randomText]);
	}
);