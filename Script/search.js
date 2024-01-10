//Mostly forked and almost never actually used one-search-bar-multiple-search function 

var searchInput = document.getElementById('Search');

function search(query){
    switch(query.substr(0, 3)){
		
		case "-im":
            query = query.substr(4);
            window.location = "https://duckduckgo.com/?q=" + query + "&iax=images&ia=images";
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
			window.location = "https://tvtropes.org/pmwiki/elastic_search_result.php?q=" + query + "&page_type=all&search_type=article";
			break;

		case "-r/":
			query = query.substr(4);
			window.location = "https://www.reddit.com/r/" + query;
			break;

		case "-wf":
			query = query.substr(4);
			window.location = "http://www.wolframalpha.com/input/?i=" + query;
			break;

        default:
            window.location="https://duckduckgo.com/?q=" + query;
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