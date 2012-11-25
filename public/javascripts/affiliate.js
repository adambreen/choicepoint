//affiliate.js
$(document).ready(function (){

	var
		affiliateInput = $('#00N90000004H2pU'),
		matches        = document.URL.match(/https?:\/\/.*\/(info|test)\/?(.*)/),
		affiliateCode
	;

	if(matches && matches.length > 1){
		affiliateCode = matches[2];

		if(affiliateCode[0] === '?'){
			affiliateCode = 'internalList:' + affiliateCode.substr(1).split('&')[0].split('=')[1];
		}

		affiliateInput.val(function (index, value) { return affiliateCode; });
	}

});