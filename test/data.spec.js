// Initialize Firebase

var config = {
    apiKey: "AIzaSyCg7hHQY9fRP9EJTE4R3-HPUMi4wFA0WaI",
    authDomain: "redsocial-78423.firebaseapp.com",
    databaseURL: "https://redsocial-78423.firebaseio.com",
    projectId: "redsocial-78423",
    storageBucket: "redsocial-78423.appspot.com",
    messagingSenderId: "739042868398"
};
firebase.initializeApp(config);


//test para ver si el login funciona 
describe('funciones que debe tener el login', () => {
    it('Debe dar verdadero para email y clave', () => {
        const email = 'test@mail.com';
        const password = 12345;
        assert.equal(result.valid, false);
        assert.equal(result.message, 'Contraseña demasiado corta');
        //const result = window.controller.validateLogin(variales declaras, variables declaras);
        //asert.equal valida resultado
        //asert.aqual valida resultado
    });

    it('Debe dar falso para clave menos 6 caracteres', () => {

        const email = 'test@mail.com';
        const password = ' ';
        //const result = window.controller.validateLogin(variales declaras, variables declaras);
        //asert.equal valida resultado
        //asert.aqual valida resultado


    });


})

describe('funciones que debe tener el muro', () => {
    it('Debe dar falso para la ausencia de texto', () => {
        const
        const
        //const result = window.controller.validateMuro(variables declaradas, variables declaras);
        //asert.equal valida resultado
        //asert.aqual valida resultado
    });


    it
})