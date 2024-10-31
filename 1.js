$(document).ready(function(){
    $('.btn1').click(function(){
        $('.btn1 p').slideToggle("slow");
    });
    $('.btn1 p').on({
        mouseenter: function(){
            $(this).css('background-color',"green");
        },
        mouseleave: function(){
            $(this).css('background-color',"#003366")
        }
    });
    $('#submitbtn').click(function(){
        const utValue = $('input[name="1"]:checked').val() || "Ingen";
        const valValue = $('input[name="Val"]:checked').val() || "Ingen";
        const CSNValue = $('input[name="CSN"]:checked').val() || "Ingen";
        var skolanlist = $('#textinput').val().trim();
        if (skolanlist !==''){
            var message = `Du valde utbildning för ${utValue}. Studietak för: ${valValue}.Du ska söker till CSN: ${CSNValue}. Du valde ${skolanlist}.`
            $('#meddelande').text(message);
            $('#textinput').val('');
        } else {
            alert('Vänligen ange ditt namn.');
        }
        console.log("Utbildning:", utValue);
        console.log("Studietak:", valValue);
        console.log("CSN", CSNValue);
        console.log("Skolanlist",skolanlist);
    });
    $('#dmode').on('click', function(){
        $('body').toggleClass('theme2');
    });
    $('#kontaktbtn').on('click', function() {
        visa();
    });
    function visa() {
        var name = $('#name').val().trim();
        var email = $('#email').val().trim();
        var telefon = $('#tlnm').val().trim();
        var message = $('#message').val().trim();
        var errorMessage = "";

        if (name === "") {
            errorMessage += "Vänligen fyll i ditt namn.\n";
        }

        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            errorMessage += "Vänligen ange en giltig e-postadress.\n";
        }

        if (message === "") {
            errorMessage += "Vänligen ange ett meddelande.\n";
        }

        if (telefon === "") {
            errorMessage += "Vänligen ange ditt telefonnummer.\n";
        } else if (isNaN(telefon)) {
            errorMessage += "Telefonnumret måste vara ett nummer.\n";
        }

        if (errorMessage !== "") {
            $('#visameddelande').text(errorMessage);
            return false;
        } else {
            $('#visameddelande').text("Tack för ditt meddelande, " + name + "\n" +
                "Din e-post: " + email + "\n" +
                "Ditt telefonnummer: " + telefon + "\n" +
                "Ditt meddelande: " + message);
            $('#name').val('');
            $('#email').val('');
            $('#tlnm').val('');
            $('#message').val('');
        }
    }
});

function taxml(){
    var xhr = new XMLHttpRequest();
    xhr.open('GET','skolor.xml',true);
    xhr.onreadystatechange = function(){
        if(xhr.readyState === 4 && xhr.status === 200){
            const xml = xhr.responseXML;
            const skolor = xml.getElementsByTagName('skola');
            let output = '';
            for(let i =0; i < skolor.length; i++){
                const namn = skolor[i].getElementsByTagName('namn')[0].textContent;
                output += `<p>${namn}</p>`
            }
            document.getElementById('output').innerHTML = output;
        }
    };
    xhr.send();
}
window.onload = taxml;