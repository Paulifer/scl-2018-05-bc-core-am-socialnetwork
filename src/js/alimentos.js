document.getElementById('jugos').addEventListener('click', cargarjugo);

function cargarjugo() {
	fetch('lista.json')
		.then((res)=>{
			console.log(res);
		})
		.then((data)=>{
			console.log(data);
		})
}
		