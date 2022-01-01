
/**
 * check Input function
 */

function checkInput (){

          const userValue = username.value;
          const emailValue = email.value;
          const passwordValue = password.value;
          const password2Value = password2.value;
          let patternEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

          /** username Validation */
          if (userValue === '') {
         
               errorFor(username, 'Username Not be Blank');
               
          } else {
               successFor(username);
          };

          /** Email Validation */

          if (emailValue === '') {

               errorFor(email, 'email Not be Blank');
               
          } else if (patternEmail.test(emailValue) == false) {

               errorFor(email, 'Email is not Valid');
              
          }else{
               successFor(email);
          };

          /** password Validation */
          if (passwordValue === '') {

               errorFor(password, 'Password Not be Blank');
               
          } else {
               successFor(password);
          };
          if (password2Value !== passwordValue) {

               errorFor(password2, 'Password Check Not Matched');
               
          } else if (password2Value === ''){

               errorFor(password2, 'Password Check Not Matched');


          }else{
               successFor(password2);
          };

};

/**
 * error message and class adding
 * @param {*} input 
 * @param {*} message 
 */
function errorFor(input, message) {

     const formGroup = input.parentElement; /**.form-group */
     const samall = formGroup.querySelector('small');

     formGroup.classList.add('errors');      /** add class message */ 
     samall.innerText = message;      /** errors message */ 


     
}

/**
 * Success Class adding 
 * @param {*} vale 
 */
function successFor(vale) {

     /** success class adding */ 
     const formGroup = vale.parentElement;
     formGroup.classList.add('success');
     
}


