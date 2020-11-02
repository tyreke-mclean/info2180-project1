/* Add your JavaScript to this file */
document.addEventListener('DOMContentLoaded', function(){
    var result = document.getElementsByClassName("message")[0];
    var  button = document.getElementsByTagName("button")[0];
    var email = document.getElementById("email");
    
  
    button.addEventListener('click', (event) =>{
        event.preventDefault();
        if (email.value === '' || email.value === null||email.value===""){
            result.innerHTML= 'Please enter a valid email address.';
            
        }
        else{
            result.innerHTML = ` Thank you! Your email address, ${email.value}, has been added to our mailing list!`;
            
         }
    });
     
 }, false);
