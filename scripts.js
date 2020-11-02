/* Add your JavaScript to this file */
document.addEventListener('DOMContentLoaded', function(){
    var result = document.getElementsByClassName("message")[0];
    var  subscribe = document.getElementsByTagName("button")[0];
    var emailAdd = document.getElementsByName("email");
    
  
    subscribe.addEventListener('click', (e) =>{
        e.preventDefault();
        if (emailAdd.value === "" || emailAdd.value === null){
             result.innerHTML=` Thank you! Your email address ${emailAdd.value} has been added to our mailing list!`;
          
            }
        else{
             result.innerHTML="Please enter a valid email address.";
        
         }
    });
     
 });
