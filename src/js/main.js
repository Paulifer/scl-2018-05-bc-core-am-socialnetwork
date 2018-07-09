/*Barra lateral */
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}
//ocultar login al apretar boton registrar y mostar registro
const btnRegistry = document.getElementById('registroClick').addEventListener('click', ()=>{
	document.getElementById('login').classList.add('divDisplayNone');
	document.getElementById('containerCrearcuenta').classList.remove('divDisplayNone');
	document.getElementById('containerCrearcuenta').classList.add('divDisplayBlock');
});
//Registro Nuevos Usuarios	
function registryUser(){
	let emailRegistry = document.getElementById('registryEmail').value;
	let passwordRegistry = document.getElementById('registryPassword').value;
	let nameRegistry = document.getElementById('registryName').value
  	console.log(email);
  	console.log(contrasena);
  	console.log(name);	
  	firebase.auth().createUserWithEmailAndPassword(emailRegistry, passwordRegistry)
  	.catch(function(error) {
  // Handle Errors here.
	  	let errorCode = error.code;
  		let errorMessage = error.message;

  alert("error");
});
  }

//Iniciar seción a traves de correo
const btnIngresarMail = document.getElementById('btnenviar').addEventListener('click', ()=>{
	let validarMail = document.getElementById('exampleInputEmail1').value;
	let valiarPassword = document.getElementById('exampleInputPassword1').value;
	if (/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i.test(validarMail)) {
		alert("correcto");
	}else{
		alert("incorrecto");
	}

})
 function ingresar(){
 	let emailSingIn = document.getElementById('exampleInputEmail1').value;
 	let passwordSingIn = document.getElementById('exampleInputPassword1').value;
 	alert("funciona");
	firebase.auth().signInWithEmailAndPassword(emailSingIn, passwordSingIn)
	.catch(function(error) {
  // Handle Errors here.
 	 let errorCode = error.code;
  	 let errorMessage = error.message;
  	console.log(errorCode);
  	console.log(errorMessage);
});
  }

   function observador(){
  	firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    console.log('usuario existente')
    var displayName = user.displayName;
    var email = user.email;
    var emailVerified = user.emailVerified;
    var photoURL = user.photoURL;
    var isAnonymous = user.isAnonymous;
    var uid = user.uid;
    var providerData = user.providerData;
    // ...
  } else {
    // User is signed out.
    // ...
    console.log('usuario no existente')
  }
});
  }
  observador();