
function handleSignIn(){

	var email = document.getElementById('inputEmail').value;
	var pass = document.getElementById('inputPassword').value;

	console.log(email);
	if (email == "admin" && pass == "admin") {
		window.location = 'admin.html';
	}else{
		window.location = 'login.html'
	}
	
}