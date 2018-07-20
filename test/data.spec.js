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
    const email = 'test@test.com';
    const password = '123456';
    const result = window.controller.validateLogin(email, password);
    assert.equal(result.valid, false);
  });

})
