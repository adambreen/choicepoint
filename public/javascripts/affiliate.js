//affiliate.js
$(document).ready(function (){

	var
		affiliateInput = $('#00N90000004H2pU'),
		matches        = document.URL.match(/https?:\/\/.*choicepoint.jp\/info|test\/?(.*)/),
		affiliateCode
	;

	if(matches && matches.length){
		affiliateCode = matches[1];
		affiliateInput.val(function (index, value) { return affiliateCode; });
	}

});