// SE INGRESA COMENTARIO AL HACER CLICK
const boton = document.getElementById('btn');
boton.addEventListener('click', () => {
    let comments = document.getElementById('comment').value;
    document.getElementById('comment').value = '';
    const cont = document.getElementById('cont');
    const newComments = document.createElement('div');

    //Para que aparezca si o si comentario
    if(comments.length === 0 || comments === null){
      alert ('Debes ingresar un mensaje');
      return false;
    }
    
    //ME GUSTA
    const heart = document.createElement('i');
    const contadorheart = document.createElement('span');
    heart.appendChild(contadorheart);
    heart.classList.add('fa', 'fa-heart', 'heart');
   
    let contadorComentario = [];
    heart.addEventListener('click', ()=> {
      if (heart.classList.toggle('red')){
        contadorComentario++;
      }else{
        contadorComentario--;
      }
      return contadorheart.innerHTML = contadorComentario;
    })

    //EDITAR COMENTARIO
    const edit = document.createElement('i');
    edit.classList.add('fas', 'fa-pencil-alt');
    
    edit.addEventListener('click', ()=> {
      contenedorElemento.contentEditable = true;
      contenedorElemento.addEventListener('keydown', (event)=> {
        if (event.which == 13){
          let confirmarEditar = confirm('¿Confirmas que deseas guardar la publicación editada?');
          if (confirmarEditar == true) {
            contenedorElemento.removeAttribute('contentEditable');
          } else {

          }
        }
      })
    })
    
    //ELIMINAR COMENTARIO
    const trash = document.createElement('i');
    trash.classList.add('fa', 'fa-trash', 'trash');
    
    trash.addEventListener('click', ()=> {
        let confirmarEliminar = confirm('¿Seguro que deseas eliminar esta publicación?');
      if (confirmarEliminar == true) {
        cont.removeChild(newComments);
      }
    })

    //AQUI SE CREA TODO LO QUE VA DENTRO DEL CONTENEDOR
    const contenedorElemento = document.createElement('p');
    let textNewComment = document.createTextNode(comments);
    contenedorElemento.appendChild(textNewComment);
    newComments.appendChild(contenedorElemento);
    cont.appendChild(newComments);
    newComments.appendChild(heart);
    newComments.appendChild(edit);
    newComments.appendChild(trash);
})


