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
  .limitToLast(8) //muestra solo los ultimos 8 mensajes como historial al recargar la pagina
  .on('child_added', (newMessage) => {
    let date = new Date();
    messageContainer.innerHTML += `
              <div style="border:1px solid gray; margin: 7%; border-radius:4px; background-color:white"><p style="margin-left:0.5em; color:#9B369D;">${newMessage.val().creatorName} ha comentado:</p>
              <p style="margin-left:0.5em;">${newMessage.val().text}</p>
              <p style="margin-left:0.5em; color:#99CE81; font-size:0.8em;">${date.getDate(newMessage.val())}/${date.getMonth(newMessage.val()) + 1} a las ${date.getHours(newMessage.val())}:${date.getMinutes(newMessage.val())}</p>
              </div>   
          `;
  });

// Guardar los mensajes en database, llamada messages
function sendMessage() {
  const currentUser = firebase.auth().currentUser;
  const messageAreaText = messageArea.value;
  const displayName = registryName.value;

 
  const newMessageKey = firebase.database().ref().child('messages').push().key;


  firebase.database().ref(`messages/${newMessageKey}`).set({
    creator: currentUser.uid,
    creatorName: currentUser.displayName || currentUser.email,
    text: messageAreaText,
    date : firebase.database.ServerValue.TIMESTAMP,
  });
}
