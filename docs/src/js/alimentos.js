//realizamos un json que aun no esta listo, y esto lo mostraria para que el usuario pudiera
//ver una lista de aliemntos sin gluten separada por seccion
//pero no la terminamos por eso la dejare comentada
/*
document.getElementById('jugos').addEventListener('click', jugosJSON);
const lista = 'https://raw.githubusercontent.com/Paulifer/scl-2018-05-bc-core-am-socialnetwork/master/src/js/lista.json';
function jugosJSON() {
	fetch(lista)
		.then((res)=>{
			return res.json();
		})
		.then( data => {
			console.log(data);
		})
		 .catch(error => {
    		console.log(error)  });
		}*/