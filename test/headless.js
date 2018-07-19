// declarar la funcion del test
window.login = (title) =>{
    const newTaskKey = firebase.database().ref().child('todo').push().key;
    return firebase.database().ref('todo/'+newTaskKey).set({
        title : title
    });
};

window.muro = () =>{
    return firebase.database().ref('todo').once('value');
}