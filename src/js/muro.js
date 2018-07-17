// SE INGRESA COMENTARIO AL HACER CLICK
const boton = document.getElementById('buttonPost');
boton.addEventListener('click', () => {
    let posts = document.getElementById('post').value;
    document.getElementById('post').value = '';
    const cont = document.getElementById('cont');
    const newPosts = document.createElement('div');

    //Debe ingresar un mensaje, no puede ser de largo igual a 0 o vacío.
    if(post.length === 0 || post === null){
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
        cont.removeChild(newPosts);
      }
    })

    //AQUI SE CREA TODO LO QUE VA DENTRO DEL CONTENEDOR
    const contenedorElemento = document.createElement('p');
    let textNewPost = document.createTextNode(posts);
    contenedorElemento.appendChild(textNewPost);
    newPosts.appendChild(contenedorElemento);
    cont.appendChild(newPosts);
    newPosts.appendChild(heart);
    newPosts.appendChild(edit);
    newPosts.appendChild(trash);
})


