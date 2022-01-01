const form = document.querySelector('form');
const username = document.querySelector('#username');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const password2 = document.querySelector('#password2');
const button = document.querySelector('button');


form.addEventListener ('submit', (e) => {

     e.preventDefault();

     /**
      * Callling Input Check Function
      */

     checkInput();



});