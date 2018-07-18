document.getElementById('jugos').addEventListener('click', jugosJSON);
const lista = 'https://raw.githubusercontent.com/Paulifer/scl-2018-05-bc-core-am-socialnetwork/master/src/js/lista.json';
function jugosJSON() {
	fetch(lista)
		.then((res)=>{
			
		})
		.then( data => {
			
			JSON.stringify(data);
			console.log(data);
		})
		 .catch(error => {
    		console.error("No pude obtener la lista");		
    		console.error("ERROR > " + error.stack); //error.stack muestra donde falló el codigo, imprime donde esta el error
  });
		}