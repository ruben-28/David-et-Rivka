document.getElementById('RSVPform').addEventListener('submit', function (event) {

    var btn = document.getElementById('sendButton');
    btn.disabled = true; // Désactiver le bouton pour éviter les envois multiples

    event.preventDefault(); // Empêche l'envoi du formulaire traditionnel

    // Création de l'élément de message "Envoi en cours"
    var sendingMessage = document.createElement('div');
    sendingMessage.textContent = 'שליחה...';
    sendingMessage.style.position = 'fixed';
    sendingMessage.style.top = '50%';
    sendingMessage.style.left = '50%';
    sendingMessage.style.transform = 'translate(-50%, -50%)';
    sendingMessage.style.backgroundColor = '#84A48D'; // Couleur de fond dans les tons de vert
    sendingMessage.style.color = '#ffffff'; // Couleur du texte en blanc pour un bon contraste
    sendingMessage.style.padding = '20px';
    sendingMessage.style.borderRadius = '5px';
    sendingMessage.style.zIndex = '9999';
    sendingMessage.style.border = '2px solid #617968'; // Bordure dans les tons de marron
    document.body.appendChild(sendingMessage);

    // Préparation des données du formulaire
    var formData = new FormData(event.target);
    var data = {};
    formData.forEach((value, key) => data[key] = value);

    fetch('Your link to your Google Sheet', { // Remplacez par l'URL de déploiement du script Google Apps
        method: 'POST',
        mode: 'no-cors',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: new URLSearchParams(data)
    })
        .then(response => {
            sendingMessage.textContent = 'הטופס נשלח בהצלחה !';
            event.target.reset(); // Réinitialiser le formulaire

            setTimeout(function () {
                sendingMessage.remove(); // Supprimer le message après 3 secondes
                btn.disabled = false; // Réactiver le bouton après le succès
            }, 3000);
        })
        .catch(error => {
            console.error('Erreur:', error);
            sendingMessage.textContent = 'אירעה תקלה, נא לנסות שוב.';
            sendingMessage.style.backgroundColor = '#f44336'; // Fond rouge en cas d'erreur

            setTimeout(function () {
                sendingMessage.remove(); // Supprimer le message après 5 secondes
                btn.disabled = false; // Réactiver le bouton après l'erreur pour réessayer
            }, 5000);
        });
});
