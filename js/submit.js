document.getElementById('RSVPform').onsubmit= function(event) {
    const abs= document.getElementById('absence');
    const pres= document.getElementById('presence');

    if (!abs.checked && !pres.checked) {
        event.stopImmediatePropagation();
        alert("Veuillez selectionner une des options")
        event.preventDefault();  // Empêche l'envoi automatique du formulaire
        return false;
    }
}