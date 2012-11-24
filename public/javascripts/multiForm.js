$(document).ready(function(){
	$('input').blur(onInputBlur);
	$('.send').click(onClickSend);
});

function onInputBlur(e){
	var
		targetId = this.id.substr(2),
		target   = $('#' + targetId)
	;

	target.val($(this).val());
}

function onClickSend(){
	$('#submitForm').submit();
}