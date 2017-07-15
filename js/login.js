
function handleSignIn(){

	var email = document.getElementById('inputEmail').value;
	var pass = document.getElementById('inputPassword').value;

	console.log(email);
	if (email == "admin" && pass == "admin") {
		window.location = 'dashboard.html';
	}else{
		window.location = 'login.html'
	}
	
}


function home(){
		window.location = 'index.html';
}

function handleProvSignIn(){
		var email = document.getElementById('inputEmail').value;
	var pass = document.getElementById('inputPassword').value;

	console.log(email);
	if (email == "prov" && pass == "prov") {
		window.location = 'proveedor.html';
	}else{
		window.location = 'loginProveedor.html'
	}

}