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

function onClickSend(e){
	if(formIsValid()){
		$('#submitForm').submit();
	}
}

function formIsValid(){
	var
		firstName = $('#first_name').val(),
		lastName  = $('#last_name').val(),
		email     = $('#email').val()
	;

	if(! (firstName.length && lastName.length && email.length) ){
		alert('あなたの姓名、および有効なメールアドレスを入力してください。');
		return false;
	}

	if(! (isValidEmail(email))){
		alert('無効なメールアドレス');
		return false;
	}

	return true;
}

function isValidEmail(toValidate){
    var
        ATOM = "[a-z0-9!#$%&'*+/=?^_`{|}~-]",
        DOMAIN = "(" + ATOM + "+(\\." + ATOM + "+)+",
        IP_DOMAIN = "\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\]",
        PATTERN =
            "^" + ATOM + "+(\\." + ATOM + "+)*@" +
                    DOMAIN +
                    "|" +
                    IP_DOMAIN +
                    ")$"
    ;


    return toValidate.match(PATTERN) ? true : false;
}