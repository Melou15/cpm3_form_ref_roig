document.getElementById('formu').addEventListener('submit', function(event) {

            var nom = document.getElementById('nom').value;
            var email = document.getElementById('email').value;
            var message = document.getElementById('message').value;

            if (nom === '' || email === '' || message === '') {
                event.preventDefault();
                alert('Veuillez remplir tous les champs.');
            }
        });





