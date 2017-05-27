
function handleSignIn(){

	var email = document.getElementById('inputEmail').value;
	var pass = document.getElementById('inputPassword').value;

	console.log(email);
	if (email == "y2jz28@gmail.com" && pass == "123456") {
		window.location = 'admin.html';
	}else{
		window.location = 'login.html'
	}
	
}