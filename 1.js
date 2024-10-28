$(document).ready(function(){
    $('.btn1 p').on({
        mouseenter: function(){
            $(this).css('background-color',"green");
        },
        mouseleave: function(){
            $(this).css('background-color',"#003366")
        }
    });
});


function validateForm(){
    var name = document.getElementById("name");
    var email = document.getElementById("email");
    var message = document.getElementById("message");
    var errorMessage = "";
    if (name.value ===""){
        errorMessage += "Vänligen fyll i ditt namn.\n";
    }
    var emailRegex =/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value)){
        errorMessage += "Vänligen ange en giltig e-postadress.\n";
    }
    if (message.value === ""){
        errorMessage += "Vänligen ange ett meddelande.";
    }
    if (errorMessage !==""){
        alert(errorMessage);
        return false;
    }
}