// Initialize Firebase - este codigo es nuevo 

var config = {
    apiKey: "AIzaSyCoXzw0EbNwkAU9Pqh2p5EMB81AGBhtLyY",
    authDomain: "test-redsocial.firebaseapp.com",
    databaseURL: "https://test-redsocial.firebaseio.com",
    projectId: "test-redsocial",
    storageBucket: "test-redsocial.appspot.com",
    messagingSenderId: "337268216403"
};
firebase.initializeApp(config);

//test para ver si el login funciona 
describe('funciones que debe tener el login', () => {
    it('Debe dar verdadero para email y clave', () => {
        const email = 'test@mail.com';
        const password = 12345;
        assert.exists();
        assert.equal(result.valid, false);

        // const result = window.controller.validateLogin(variales declaras, variables declaras);
        // asert.equal valida resultado
        // asert.aqual valida resultado
    });

    it('Debe dar falso para clave menos 6 caracteres', () => {

        const email = 'test@mail.com';
        const password = ' ';
        // const result = window.controller.validateLogin(variales declaras, variables declaras);
        // asert.equal valida resultado
        // assert.equal(result.message, 'Contraseña demasiado corta');
        // asert.aqual valida resultado


    });


})

describe('funciones que debe tener el muro', () => {
    it('Debe dar falso para la ausencia de texto', () => {

        // const result = window.controller.validateMuro(variables declaradas, variables declaras);
        // asert.equal valida resultado
        // asert.aqual valida resultado
    });


    it
})