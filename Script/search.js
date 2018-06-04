//Mostly forked one-search-bar-multiple-search function 

var searchInput = document.getElementById('Search');

function search(query){
    switch(query.substr(0, 3)){
        case "-am":
            query = query.substr(4);
            window.location = "https://smile.amazon.com/s/ref=nb_sb_noss_1?url=search-alias%3Daps&field-keywords=" + query;
            break;
		
		case "-im":
            query = query.substr(4);
            window.location = "https://www.google.com/search?tbm=isch&q=" + query;
            break;

        case "-yt":
            query = query.substr(4);
			window.location = "https://www.youtube.com/results?search_query=" + query;
            break;

        case "-wk":
            query = query.substr(4);
            window.location = "https://en.wikipedia.org/w/index.php?search=" + query;
            break;

		case "-tv":
			query = query.substr(4);
			window.location = "http://tvtropes.org/pmwiki/search_result.php?q=" + query;
			break;

		case "-r/":
			query = query.substr(4);
			window.location = "https://www.reddit.com/r/" + query;
			break;

		case "-wf":
			query = query.substr(4);
			window.location = "http://www.wolframalpha.com/input/?i=" + query;
			break;

		case "-wa":
			query = query.substr(4);
			window.location = "https://wall.alphacoders.com/search.php?search=" + query;
			break;

		case "-wh":
			query = query.substr(4);
			window.location = "http://alpha.wallhaven.cc/search?q=" + query;
			break;

        default:
            window.location="https://www.google.com/#q=" + query;
    }
}

//Focus to search bar on keypress
function handleKeydown(event) {
	var ignoredKeys = [9,13,16,17,18,19,20,27,33,34,35,36,37,38,39,40,45,46,91,92,93,112,113,114,115,116,117,118,119,120,121,122,123,144,145];
	
	if 	(searchInput == document.activeElement || 
		ignoredKeys.includes(event.keyCode))
    return;

  searchInput.focus();
}
 
window.onload = function(){
    if(!!searchInput){
        searchInput.addEventListener('keypress', function(a){
            var key = a.keyCode;
            if(key == 13){
                var query = this.value;
                search(query);
            }
        });
    }
	
    document.addEventListener('keydown', function(event) { handleKeydown(event); });
 
}