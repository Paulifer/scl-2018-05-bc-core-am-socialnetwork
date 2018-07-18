document.getElementById('jugos').addEventListener('click', jugoJSON);

function jugoJSON() {
	fetch('lista.json')
		.then((res)=>{
			return res.json();
		})
		.then((respuestaJson)=>{
			console.log(respuestaJson);
		})
}
		