/*Barra lateral */
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}
//Registro de usuarios nuevos
function registrar(){
	let email = document.getElementById('email').value;
	let contrasena = document.getElementById('contrasena').value;
  	console.log(email);
  	console.log(contrasena);	
  	firebase.auth().createUserWithEmailAndPassword(email, contrasena)
  	.catch(function(error) {
  // Handle Errors here.
	  	let errorCode = error.code;
  		let errorMessage = error.message;

  alert("error");
});
  }

//Iniciar seción a traves de correo
const btnIngresarMail = document.getElementById('btnenviar').addEventListener('click', ()=>{
	const validarMail = document.getElementById('exampleInputEmail1').value;
	if (/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i.test(validarMail)) {
		alert("correcto");
	}else{
		alert("incorrecto");
	}
})
