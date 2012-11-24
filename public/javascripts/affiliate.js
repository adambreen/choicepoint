//affiliate.js
$(document).ready(function (){

	var
		affiliateInput = $('#00N90000004H2pU'),
		matches        = document.URL.match(/https?:\/\/.*choicepoint.jp\/info\/?(.*)/),
		affiliateCode
	;

	if(matches.length){
		affiliateCode = matches[1];
		affiliateInput.val(affiliateCode);
	}

});