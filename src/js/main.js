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
	let nameRegistry = document.getElementById('registryName').value;
  	console.log(emailRegistry);
  	console.log(passwordRegistry);
  	console.log(nameRegistry);	
  	firebase.auth().createUserWithEmailAndPassword(emailRegistry, passwordRegistry)
  	.catch(function(error) {
  // Handle Errors here.
	  	let errorCode = error.code;
  		let errorMessage = error.message;
  		console.log(errorCode);
  		console.log(errorMessage);
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
		console.log(validarMail);
		console.log(valiarPassword);
		firebase.auth().signInWithEmailAndPassword(validarMail, valiarPassword)
	.catch(function(error) {
  // Handle Errors here.
 	 let errorCode = error.code;
  	 let errorMessage = error.message;
  	console.log(errorCode);
  	console.log(errorMessage);
});
  
})
 //Ingressando con google
 const btnGoogle = document.getElementById('google').addEventListener('click', ()=>{
 	var provider = new firebase.auth.GoogleAuthProvider();
 	provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
 	firebase.auth().languageCode = 'pt';
// To apply the default browser preference instead of explicitly setting it.
// firebase.auth().useDeviceLanguage();
provider.setCustomParameters({
  'login_hint': 'user@example.com'
});
 firebase.auth().signInWithPopup(provider).then(function(result) {
  // This gives you a Google Access Token. You can use it to access the Google API.
  var token = result.credential.accessToken;
  // The signed-in user info.
  var user = result.user;
  // ...
}).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // The email of the user's account used.
  var email = error.email;
  // The firebase.auth.AuthCredential type that was used.
  var credential = error.credential;
  // ...
});
firebase.auth().signInWithRedirect(provider);
firebase.auth().signOut().then(function() {
  // Sign-out successful.
}).catch(function(error) {
  // An error happened.
});
 
 })
 


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