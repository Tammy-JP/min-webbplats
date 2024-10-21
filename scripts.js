document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('toggleButton');
    
    if (toggleButton) {
        toggleButton.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
            toggleButton.textContent = document.body.classList.contains('dark-mode') ? 'Byt till Ljust Läge' : 'Byt till Mörkt Läge';
        });
    }

    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            document.getElementById('response').innerHTML = `<div class="alert alert-success">Tack, ${name}! Ditt meddelande har skickats.</div>`;
            this.reset();
            console.log(name, email, message);
        });
    }
});
