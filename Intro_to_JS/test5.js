let myForm = document.forms.myForm;
let message = document.getElementById('message');

 myForm.onsubmit = function() {
     if (myForm.name.value == "") {
         message.innerHTML = 'Please enter a name';
         return false;
     } else {
         message.innerHTML = '';
         return true;
     }

 };