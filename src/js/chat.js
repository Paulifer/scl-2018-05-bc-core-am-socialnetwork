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
  .limitToLast(5) //muestra solo los ultimos 8 mensajes como historial al recargar la pagina
  .on('child_added', (newMessage) => {
    const contenedorPost = document.createElement('div')
    contenedor.appendChild(contenedorPost)
    contenedorPost.innerHTML += `
              <div style="margin: 7%; border-radius:8px; background-color:#ECF8E0">
                <p style="margin-left:0.5em; color:#9B369D;">${newMessage.val().creatorName} ha comentado:</p>
                <p style="margin-left:0.5em;">${newMessage.val().text}</p>
                <i class="fa fa-heart heart iconHeart" onclick="heartClick()">Me gusta</i>
                <i class="fas fa-pencil-alt iconEdit" onclick="editClick()">Editar</i>
                <i class="fa fa-trash trash iconTrash" onclick="trashClick()">Eliminar</i>
              </div>
          `;
  });
  

// Firebase Database
// Guardar los mensajes en database, llamada messages
function sendMessage() {
  const currentUser = firebase.auth().currentUser;
  const messageAreaText = messageArea.value;
  const displayNames = registryName.value;

  //Para tener una nueva llave en la colección messages
  const newMessageKey = firebase.database().ref().child('messages').push().key;


  firebase.database().ref(`messages/${newMessageKey}`).set({
    creator: currentUser.uid,
    creatorName: currentUser.displayName || currentUser.email,
    text: messageAreaText
  });
}             