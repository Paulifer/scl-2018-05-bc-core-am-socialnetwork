//MURO CON COMENTARIOS
firebase.database().ref('messages')
  .limitToLast(5) //filtro para no obtener todos los mensajes
  .once('value')
  .then((messages) => {
    console.log("Mensajes >" + JSON.stringify(messages));
  })
  .catch(() => {

  });


//Llamando a los mensajes  para que aparezcan cada vez que recargue la pagina
firebase.database().ref('messages')
  .limitToLast(5) //muestra solo los ultimos 5 mensajes como historial al recargar la pagina
  .on('child_added', (newMessage) => {
    contenedor.innerHTML = `
              <div class="trashPost" style="margin: 7%; border-radius:8px; background-color:#ECF8E0">
                <p style="margin-left:0.5em; color:#9B369D;">${newMessage.val().creatorName} ha comentado:</p>
                <p style="margin-left:0.5em;">${newMessage.val().text}</p>
                <i class="fa fa-heart heart iconHeart" onclick="like(event)" data-likePost="${newMessage.key}"><span> ${newMessage.val().starCount}</span></i>
                <i class="fas fa-pencil-alt iconEdit"  data-id="${newMessage.key}"></i>
                <i class="fa fa-trash trash iconTrash" onclick="deletePost(event)" 
                data-postId="${newMessage.key}"></i>
              </div>
          `+ contenedor.innerHTML;
  });


//Boton me gusta
const like = (event) => {
  event.stopPropagation();
  event.target.style.color = 'red';
  const idLike = event.target.getAttribute('data-likePost');
  firebase.database().ref('messages/' + idLike).once('value', function(posting){
    let result = (posting.val().starCount || 0)+1;
    console.log(result);
    
    firebase.database().ref('messages').child(idLike).update({
      starCount : result
    });
  });
};

//Boton Eliminar comentario
const deletePost = (event) => {
  event.stopPropagation();
  let confirmar = confirm('¿Estás seguro de eliminar la publicación?');
  if(confirmar === true){
    const idPosts = event.target.getAttribute('data-postId');
    firebase.database().ref('messages/').child(idPosts).remove();
    // contenedor.removeChild(contenedor.childNodes[0] && contenedor.childNodes[1]); //se borra el primer mensaje
  }else{};
};


// Firebase Database
// Guardar los mensajes en database, llamada messages
function sendMessage() {
  if (messageArea.value.length === 0 || messageArea.value === null) {
    alert('Debes ingresar un mensaje')
  } else {
  const currentUser = firebase.auth().currentUser;
  const messageAreaText = messageArea.value;
  const displayNames = registryName.value;
  

  //Para tener una nueva llave en la colección messages
  const newMessageKey = firebase.database().ref().child('messages').push().key;


  firebase.database().ref(`messages/${newMessageKey}`).set({
    creator: currentUser.uid,
    creatorName: currentUser.displayName || currentUser.email,
    text: messageAreaText,
    starCount: 0,
  });
  messageArea.value = '';
}    
}         